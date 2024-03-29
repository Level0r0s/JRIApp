﻿/** The MIT License (MIT) Copyright(c) 2016 Maxim V.Tsapov */
import {
    IIndexer, Utils, IStatefulPromise, PromiseState
} from "jriapp_shared";
import { AsyncUtils } from "jriapp_shared/utils/async";
import { IStylesLoader } from "../int";
import { PathHelper } from "./path";

const _async = AsyncUtils, utils = Utils, dom = utils.dom, arrHelper = utils.arr,
    resolvedPromise = _async.createSyncDeferred<void>().resolve(),
    doc = dom.document, head = doc.head || doc.getElementsByTagName("head")[0];
let _stylesLoader: IStylesLoader = null;
export const frameworkCss = "jriapp.css";

export function createCssLoader(): IStylesLoader {
    if (!_stylesLoader)
        _stylesLoader = new StylesLoader();
    return _stylesLoader;
}

function whenAll(promises: IStatefulPromise<any>[]): IStatefulPromise<any> {
    if (!promises)
        return resolvedPromise;
    if (promises.length === 1)
        return promises[0];
    let cnt = promises.length, resolved = 0;
    for (let i = 0; i < cnt; i += 1) {
        if (promises[i].state() === PromiseState.Resolved) {
            ++resolved;
        }
    }

    if (resolved === cnt) {
        return resolvedPromise;
    }
    else {
        return _async.whenAll(promises);
    }
}

function createLink(url: string) {
    var link = doc.createElement("link");

    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = url;

    return link;
}

export interface IUrlParts {
    protocol: string;
    host: string;
    hostname: string;
    port: string;
    pathname: string;
    hash: string;
    search: string;
}

//load css styles on demand
class StylesLoader implements IStylesLoader {
    private _loadedCSS: IIndexer<IStatefulPromise<string>>;
    
    constructor() {
        this._loadedCSS = <IIndexer<IStatefulPromise<string>>>{};
    }
    private isStyleSheetLoaded(url: string): boolean {
        let testUrl = PathHelper.getUrlParts(url);
        let arr = arrHelper.fromList(doc.styleSheets);
        for (let i = 0; i < arr.length; i += 1) {
            let cssUrl = PathHelper.getUrlParts(arr[i].href);
            if (cssUrl.hostname === testUrl.hostname && cssUrl.pathname === testUrl.pathname) {
                return true;
            }
        }

        return false;
    }
    private loadByLink(url: string, fn_onload: (err: any) => void) {
        let link = createLink(url);
        link.onload = function () {
            fn_onload(null);
        };
        link.onerror = function () {
            fn_onload("Error loading: " + url);
        };
        head.appendChild(link);
    }
    private load(url: string, load: (err: any) => void): void {
        this.loadByLink(url, load);
    };
    private static ensureCssExt(name: string): string {
        return name.search(/\.(css|less|scss)$/i) === -1 ? name + ".css" : name;
    }
    loadStyle(url: string): IStatefulPromise<string> {
        url = PathHelper.appendBust(url);
        const cssUrl = PathHelper.getNormalizedUrl(url);

        //test if we already are loading this css file
        let cssPromise = this._loadedCSS[cssUrl];
        if (!!cssPromise) {
            return cssPromise;
        }
        const deferred = _async.createSyncDeferred<string>();
        cssPromise = deferred.promise();

        if (this.isStyleSheetLoaded(url)) {
            deferred.resolve(url);
            this._loadedCSS[cssUrl] = cssPromise;
            return cssPromise;
        }

        this.load(url, (err: any) => {
            if (!!err)
                deferred.reject(err);
            else
                deferred.resolve(url);
        });

        this._loadedCSS[cssUrl] = cssPromise;
        return cssPromise;
    }
    loadStyles(urls: string[]): IStatefulPromise<any> {
        let promises = <IStatefulPromise<string>[]>[];

        for (let i = 0; i < urls.length; i += 1) {
            promises.push(this.loadStyle(urls[i]));
        }
        return whenAll(promises);
    }
    loadOwnStyle(cssName?: string): IStatefulPromise<string> {
        cssName = cssName || frameworkCss;
        let cssUrl = PathHelper.getFrameworkCssPath() + StylesLoader.ensureCssExt(cssName);
        return this.loadStyle(cssUrl);
    }
    whenAllLoaded(): IStatefulPromise<any> {
        let obj = this._loadedCSS, names = Object.keys(obj), promises = <IStatefulPromise<any>[]>[];
        for (let i = 0; i < names.length; i += 1) {
            promises.push(obj[names[i]]);
        }
        return whenAll(promises);
    }
}