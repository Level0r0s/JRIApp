﻿/** The MIT License (MIT) Copyright(c) 2016 Maxim V.Tsapov */
import {
    LocaleERRS, Utils, IIndexer, IErrorHandler, IPromise, IVoidPromise, DummyError,
    BaseObject
} from "jriapp_shared";
import { DATA_ATTR } from "./const";
import {
    IElViewFactory, IElView, IViewType, IApplication, IExports, ILifeTimeScope,
    IBindableElement, IConverter,
    IBindingOptions, IBindingInfo, IDataBindingService, IModuleLoader
} from "./int";
import { bootstrap } from "./bootstrap";
import { LifeTimeScope } from "./utils/lifetime";
import { create as createModulesLoader } from "./utils/mloader";
import { getBindingOptions, Binding } from "./binding";
import { ViewChecks } from "./utils/viewchecks";
import { Parser } from "./utils/parser";
import { $ } from "./utils/jquery";

const utils = Utils, viewChecks = ViewChecks, dom = utils.dom, doc = dom.document,
    strUtils = utils.str, sys = utils.sys, checks = utils.check, boot = bootstrap, ERRS = LocaleERRS, parser = Parser;

export function createDataBindSvc(root: Document | HTMLElement, elViewFactory: IElViewFactory): IDataBindingService {
    return new DataBindingService(root, elViewFactory);
}

class DataBindingService extends BaseObject implements IDataBindingService, IErrorHandler {
    private _root: Document | HTMLElement;
    private _elViewFactory: IElViewFactory;
    private _objLifeTime: ILifeTimeScope;
    private _mloader: IModuleLoader;

    constructor(root: Document | HTMLElement, elViewFactory: IElViewFactory) {
        super();
        this._root = root;
        this._elViewFactory = elViewFactory;
        this._objLifeTime = null;
        this._mloader = createModulesLoader();
    }
    private _toBindableElement(el: HTMLElement): IBindableElement {
        let val: string, allAttrs = el.attributes, attr: Attr,
            res: IBindableElement = { el: el, dataView: null, dataForm: null, expressions: [] };

        for (let i = 0, n = allAttrs.length; i < n; i++) {
            attr = allAttrs[i];
            if (strUtils.startsWith(attr.name, DATA_ATTR.DATA_BIND)) {
                val = attr.value.trim();
                if (!val) {
                    throw new Error(strUtils.format(ERRS.ERR_PARAM_INVALID, attr.name, "empty"));
                }
                if (val[0] !== "{" && val[val.length - 1] !== "}")
                    val = "{" + val + "}";
                res.expressions.push(val);
            }
            if (strUtils.startsWith(attr.name, DATA_ATTR.DATA_FORM)) {
                res.dataForm = attr.value.trim();
            }
            if (strUtils.startsWith(attr.name, DATA_ATTR.DATA_VIEW)) {
                res.dataView = attr.value.trim();
            }
        }
        if (!!res.dataView || res.expressions.length > 0)
            return res;
        else
            return null;
    }
    private _getBindableElements(scope: Document | HTMLElement): IBindableElement[] {
        let self = this, result: IBindableElement[] = [], allElems = utils.arr.fromList<HTMLElement>(scope.querySelectorAll("*"));
        allElems.forEach(function (el) {
            let res = self._toBindableElement(el);
            if (!!res)
                result.push(res);
        });

        return result;
    }
    private _cleanUp() {
        if (!!this._objLifeTime) {
            this._objLifeTime.destroy();
            this._objLifeTime = null;
        }
    }
    private _getRequiredModuleNames(el: HTMLElement): string[] {
        let attr = el.getAttribute(DATA_ATTR.DATA_REQUIRE);
        if (!attr)
            return <string[]>[];
        let reqArr = attr.split(",");

        let hashMap: IIndexer<any> = {};
        reqArr.forEach(function (name) {
            if (!name)
                return;
            name = strUtils.fastTrim(name);
            if (!!name)
                hashMap[name] = name;
        });
        return Object.keys(hashMap);
    }
    private _getOnlyDataFormElems(bindElems: IBindableElement[]): HTMLElement[] {
        return bindElems.filter((bindElem, index, arr) => {
            return !!bindElem.dataForm;
        }).map((bindElem, index, arr) => {
            return bindElem.el;
        });
    }
    private _updDataFormAttr(bindElems: IBindableElement[]): void {
        //mark all dataforms for easier checking that the element is a dataform
        bindElems.forEach(function (bindElem) {
            if (!bindElem.dataForm && viewChecks.isDataForm(bindElem.el)) {
                bindElem.el.setAttribute(DATA_ATTR.DATA_FORM, "yes");
                bindElem.dataForm = "yes";
            }
        });
    }
    private _bindElView(elView: IElView, bindElem: IBindableElement, lftm: ILifeTimeScope, isInsideTemplate: boolean, defSource: any) {
        let self = this, op: IBindingOptions, bind_attr: string, temp_opts: IBindingInfo[], info: IBindingInfo;
        lftm.addObj(elView);
        if (isInsideTemplate)
            viewChecks.setIsInsideTemplate(elView);

        //then create databinding if element has data-bind attribute
        bind_attr = bindElem.expressions.join("");
        if (!!bind_attr) {
            temp_opts = parser.parseOptions(bind_attr);
            for (let j = 0, len = temp_opts.length; j < len; j += 1) {
                info = temp_opts[j];
                op = getBindingOptions(info, elView, defSource);
                let binding = self.bind(op);
                lftm.addObj(binding);
            }
        }
    }
    private _bindTemplateElements(templateEl: HTMLElement): IPromise<ILifeTimeScope> {
        const self = this, defer = utils.defer.createSyncDeferred<ILifeTimeScope>();
        try {
            let rootBindEl = self._toBindableElement(templateEl), bindElems: IBindableElement[],
                lftm = new LifeTimeScope();
            if (!!rootBindEl && !!rootBindEl.dataForm) {
                //in this case process only this element
                bindElems = [rootBindEl];
            }
            else {
                bindElems = self._getBindableElements(templateEl);
                if (!!rootBindEl) {
                    bindElems.push(rootBindEl);
                }
            }

            //mark all dataforms for easier checking that the element is a dataform
            self._updDataFormAttr(bindElems);

            //select all dataforms inside the scope
            let forms = self._getOnlyDataFormElems(bindElems);

            let needBinding = bindElems.filter((bindElem) => {
                return !viewChecks.isInNestedForm(templateEl, forms, bindElem.el);
            });

            needBinding.forEach(function (bindElem) {
                let elView = self._elViewFactory.getOrCreateElView(bindElem.el);
                self._bindElView(elView, bindElem, lftm, true, null);
            });

            defer.resolve(lftm);
        }
        catch (err) {
            self.handleError(err, self);
            setTimeout(() => {
                defer.reject(new DummyError(err));
            }, 0);
        }

        return defer.promise();
    }
    bindTemplateElements(templateEl: HTMLElement): IPromise<ILifeTimeScope> {
        const self = this;
        let requiredModules = self._getRequiredModuleNames(templateEl), res: IPromise<ILifeTimeScope>;
        if (requiredModules.length > 0) {
            res = self._mloader.load(requiredModules).then(() => {
                return self._bindTemplateElements(templateEl);
            });
        }
        else {
            res = self._bindTemplateElements(templateEl);
        }

        res.fail((err) => {
            setTimeout(() => {
                self.handleError(err, self);               
            }, 0);
        });

        return res;
    }
    bindElements(scope: Document | HTMLElement, defaultDataContext: any, isDataFormBind: boolean, isInsideTemplate: boolean): IPromise<ILifeTimeScope> {
        const self = this, defer = utils.defer.createSyncDeferred<ILifeTimeScope>();
        scope = scope || doc;
        try {
            const bindElems = self._getBindableElements(scope), lftm = new LifeTimeScope();

            if (!isDataFormBind) {
                //mark all dataforms for easier checking that the element is a dataform
                self._updDataFormAttr(bindElems);
            }

            //select all dataforms inside the scope
            const forms = self._getOnlyDataFormElems(bindElems);

            const needBinding = bindElems.filter((bindElem) => {
                return !viewChecks.isInNestedForm(scope, forms, bindElem.el);
            });

            needBinding.forEach(function (bindElem) {
                let elView = self._elViewFactory.getOrCreateElView(bindElem.el);
                self._bindElView(elView, bindElem, lftm, isInsideTemplate, defaultDataContext);
            });

            defer.resolve(lftm);
        }
        catch (err) {
            self.handleError(err, self);
            setTimeout(() => {
                defer.reject(new DummyError(err));
            }, 0);
        }

        return defer.promise();
    }
    setUpBindings(): IVoidPromise {
        const defScope = this._root, defaultDataContext = boot.getApp(), self = this;
        this._cleanUp();
        let promise = this.bindElements(defScope, defaultDataContext, false, false);
        return promise.then((lftm) => {
            if (self.getIsDestroyCalled()) {
                lftm.destroy();
                return;
            }
            self._objLifeTime = lftm;
        });
    }
    bind(opts: IBindingOptions): Binding {
        return new Binding(opts);
    }
    destroy() {
        this._cleanUp();
        this._elViewFactory = null;
        this._mloader = null;
        super.destroy();
    }
}