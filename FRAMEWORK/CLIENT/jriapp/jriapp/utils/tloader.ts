﻿/** The MIT License (MIT) Copyright(c) 2016 Maxim V.Tsapov */
import {
    IPromise, LocaleERRS, BaseObject, WaitQueue, Utils
} from "jriapp_shared";
import {
    IApplication, ITemplateGroupInfo, ITemplateGroupInfoEx, ITemplateLoaderInfo
} from "../int";

const utils = Utils, checks = utils.check, coreUtils = utils.core,
    strUtils = utils.str, defer = utils.defer, ERRS = LocaleERRS, DEBUG = utils.debug,
    LOG = utils.log, http = utils.http;

const PROP_NAME = {
    isLoading: "isLoading"
};

export class TemplateLoader extends BaseObject {
    private _templateLoaders: any;
    private _templateGroups: any;
    private _promises: IPromise<string>[];
    private _waitQueue: WaitQueue;

    constructor() {
        super();
        let self = this;
        this._templateLoaders = {};
        this._templateGroups = {};
        this._promises = [];
        this._waitQueue = new WaitQueue(self);
    }
    destroy() {
        if (this._isDestroyed)
            return;
        this._isDestroyCalled = true;
        let self = this;
        self._promises = [];
        self._templateLoaders = {};
        self._templateGroups = {};
        if (!!self._waitQueue) {
            self._waitQueue.destroy()
            self._waitQueue = null;
        }
        super.destroy();
    }
    protected _getEventNames() {
        let base_events = super._getEventNames();
        return ["loaded"].concat(base_events);
    }
    addOnLoaded(fn: (sender: TemplateLoader, args: { html: string; app: IApplication; }) => void, nmspace?: string) {
        this.addHandler("loaded", fn, nmspace);
    }
    removeOnLoaded(nmspace?: string) {
        this.removeHandler("loaded", nmspace);
    }
    public waitForNotLoading(callback: (...args: any[]) => any, callbackArgs: any): void {
        this._waitQueue.enQueue({
            prop: PROP_NAME.isLoading,
            groupName: null,
            predicate: function (val: any) {
                return !val;
            },
            action: callback,
            actionArgs: callbackArgs
        });
    }
    private _onLoaded(html: string, app: IApplication) {
        this.raiseEvent("loaded", { html: html, app: app });
    }
    private _getTemplateGroup(name: string): ITemplateGroupInfoEx {
        return coreUtils.getValue(this._templateGroups, name);
    }
    private _registerTemplateLoaderCore(name: string, loader: ITemplateLoaderInfo): void {
        coreUtils.setValue(this._templateLoaders, name, loader, false);
    }
    private _getTemplateLoaderCore(name: string): ITemplateLoaderInfo {
        return coreUtils.getValue(this._templateLoaders, name);
    }
    public loadTemplatesAsync(fn_loader: () => IPromise<string>, app: IApplication): IPromise<any> {
        let self = this, promise = fn_loader(), old = self.isLoading;
        self._promises.push(promise);
        if (self.isLoading !== old)
            self.raisePropertyChanged(PROP_NAME.isLoading);
        let res = promise.then((html: string) => {
            self._onLoaded(html, app);
        });

        res.always(() => {
            coreUtils.arr.remove(self._promises, promise);
            if (!self.isLoading)
                self.raisePropertyChanged(PROP_NAME.isLoading);
        });
        return res;
    }
    /*
     fn_loader must load template and return promise which resolves with the loaded HTML string
    */
    public unRegisterTemplateLoader(name: string) {
        coreUtils.removeValue(this._templateLoaders, name);
    }
    public unRegisterTemplateGroup(name: string) {
        coreUtils.removeValue(this._templateGroups, name);
    }
    public registerTemplateLoader(name: string, loader: ITemplateLoaderInfo): void {
        let self = this;
        loader = coreUtils.extend({
            fn_loader: null,
            groupName: null
        }, loader);

        if (!loader.groupName && !checks.isFunc(loader.fn_loader)) {
            throw new Error(strUtils.format(ERRS.ERR_ASSERTION_FAILED, "fn_loader is Function"));
        }
        let prevLoader = self._getTemplateLoaderCore(name);
        if (!!prevLoader) {
            //can overwrite previous loader with new one, only if the old did not have loader function and the new has it
            if ((!prevLoader.fn_loader && !!prevLoader.groupName) && (!loader.groupName && !!loader.fn_loader)) {
                return self._registerTemplateLoaderCore(name, loader);
            }
            throw new Error(strUtils.format(ERRS.ERR_TEMPLATE_ALREADY_REGISTERED, name));
        }
        return self._registerTemplateLoaderCore(name, loader);
    }
    //this function will return promise resolved with the template's html
    public getTemplateLoader(name: string): () => IPromise<string> {
        let self = this, loader = self._getTemplateLoaderCore(name);
        if (!loader)
            return null;
        if (!loader.fn_loader && !!loader.groupName) {
            let group = self._getTemplateGroup(loader.groupName);
            if (!group) {
                throw new Error(strUtils.format(ERRS.ERR_TEMPLATE_GROUP_NOTREGISTERED, loader.groupName));
            }

            //this function will return promise resolved with the template's html
            return () => {
                //it prevents double loading
                if (!group.promise) {
                   //start loading only if no another loading in progress
                    group.promise = self.loadTemplatesAsync(group.fn_loader, group.app);
                }

                let deferred = defer.createSyncDeferred<string>();

                group.promise.then(() => {
                    group.promise = null;
                    group.names.forEach(function (name) {
                        if (!!group.app) {
                            name = group.app.appName + "." + name;
                        }
                        let loader = self._getTemplateLoaderCore(name);
                        if (!loader || !loader.fn_loader) {
                            let error = strUtils.format(ERRS.ERR_TEMPLATE_NOTREGISTERED, name);
                            if (DEBUG.isDebugging())
                                LOG.error(error);
                            throw new Error(error);
                        }
                    });

                    let loader = self._getTemplateLoaderCore(name);
                    if (!loader || !loader.fn_loader) {
                        let error = strUtils.format(ERRS.ERR_TEMPLATE_NOTREGISTERED, name);
                        if (DEBUG.isDebugging())
                            LOG.error(error);
                        throw new Error(error);
                    }

                    delete self._templateGroups[loader.groupName];
                    let promise = loader.fn_loader();
                    promise.then((html) => {
                        deferred.resolve(html);
                    }, (err) => {
                        deferred.reject(err);
                    });
                }).fail((err) => {
                    group.promise = null;
                    deferred.reject(err);
                });

                return deferred.promise();
            };
        }
        else
            return loader.fn_loader;
    }
    public registerTemplateGroup(groupName: string, group: ITemplateGroupInfoEx): void {
        let self = this, group2: ITemplateGroupInfoEx = coreUtils.extend({
            fn_loader: <() => IPromise<string>>null,
            url: <string>null,
            names: <string[]>null,
            promise: <IPromise<string>>null,
            app: <IApplication>null
        }, group);

        if (!!group2.url && !group2.fn_loader) {
            //make a function to load from this url
            group2.fn_loader = () => {
                return http.getAjax(group2.url);
            };
        }

        coreUtils.setValue(self._templateGroups, groupName, group2, true);
        group2.names.forEach((name) => {
            if (!!group2.app) {
                name = group2.app.appName + "." + name;
            }
            //for each template in the group register dummy loader function which has only group name
            //when template will be requested, this dummy loader will be replaced with the real one
            self.registerTemplateLoader(name, {
                groupName: groupName,
                fn_loader: null //no loader function
            });
        });
    }
    public loadTemplates(url: string) {
        let self = this;
        this.loadTemplatesAsync(function () {
            return http.getAjax(url);
        }, null);
    }
    get isLoading() {
        return this._promises.length > 0;
    }
}