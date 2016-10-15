﻿/// <reference path="../jriapp_core/../../thirdparty/jquery.d.ts" />
/** The MIT License (MIT) Copyright(c) 2016 Maxim V.Tsapov */
import { ERRS } from "../jriapp_core/lang";
import { IIndexer } from "../jriapp_core/shared";

if (!(<any>window).jQuery)
    throw new Error(ERRS.ERR_APP_NEED_JQUERY);

export class DomUtils {
    static isContained(oNode: any, oCont: any) {
        if (!oNode) return false;
        while (!!(oNode = oNode.parentNode)) if (oNode === oCont) return true;
        return false;
    }
    static removeNode(node: Node) {
        if (!node)
            return;
        let pnd = node.parentNode;
        if (!!pnd)
            pnd.removeChild(node);
    }
    static insertAfter(referenceNode: Node, newNode: Node) {
        let parent = referenceNode.parentNode;
        if (parent.lastChild === referenceNode)
            parent.appendChild(newNode);
        else
            parent.insertBefore(newNode, referenceNode.nextSibling);
    }
    static $: JQueryStatic = jQuery;
    static destroyJQueryPlugin($el: JQuery, name: string): void {
        let plugin = $el.data(name);
        if (!!plugin) {
            $el[name]("destroy");
        }
    }
    static window: Window = window;
    static document: Document = window.document;
    private static getClassMap(el: Element): IIndexer<number>  {
        let res: IIndexer<number> = {};
        if (!el)
            return res;
        let className = el.className;
        if (!className)
            return res;
        let arr: string[] = className.split(" ");
        for (let i = 0; i < arr.length; i += 1)
        {
            arr[i] = arr[i].trim();
            if (!!arr[i]) {
                res[arr[i]] = i;
            }
        }
        return res;
    }
    /**
       set all classes, where param classes is array of classnames: ["+clasName1", "-className2", "-className3"]
       + means to add the class name, and - means to remove the class name
       -* means to remove all classes
    */
    static setClasses(elems: Element[], classes: string[]): void {
        if (!elems.length || !classes.length)
            return;

        let toAdd: string[] = [], toRemove: string[] = [], removeAll = false;
        classes.forEach((v: string) => {
            if (!v)
                return;

            let name = v.trim();
            if (!name)
                return;
            let op = v.charAt(0);
            if (op == "+" || op == "-") {
                name = v.substr(1).trim();
            }
            if (!name)
                return;

            let arr: string[] = name.split(" ");
            for (let i = 0; i < arr.length; i += 1) {
                let v2 = arr[i].trim();
                if (!!v2) {
                    if (op != "-") {
                        toAdd.push(v2);
                    }
                    else {
                        if (name === "*")
                            removeAll = true;
                        else
                            toRemove.push(v2);
                    }
                }
            }
        });

        if (removeAll) {
            toRemove = [];
        }

        for (let j = 0; j < elems.length; j += 1)
        {
            let el = elems[j];
            let map = DomUtils.getClassMap(el);
            if (removeAll) {
                map = {};
            }
            for (let i = 0; i < toRemove.length; i += 1) {
                delete map[toRemove[i]];
            }
            for (let i = 0; i < toAdd.length; i += 1) {
                map[toAdd[i]] = i + 1000;
            }
            let keys = Object.keys(map);
            el.className = keys.join(" ").trim();
        }
    }
    static setClass(elems: Element[], css: string, remove: boolean = false): void {
        if (!elems.length)
            return;

        if (remove && !css) {
            for (let j = 0; j < elems.length; j += 1) {
                elems[j].className = "";
            }
            return;
        }

        if (!css)
            return;

        let arr: string[] = css.split(" ");
        for (let i = 0; i < arr.length; i += 1) {
            arr[i] = arr[i].trim();
        }

        for (let j = 0; j < elems.length; j += 1) {
            let el = elems[j];
            let map = DomUtils.getClassMap(el);
            for (let i = 0; i < arr.length; i += 1) {
                if (!!arr[i]) {
                    if (remove)
                        delete map[arr[i]];
                    else
                        map[arr[i]] = i + 1000;
                }
            }
            let keys = Object.keys(map);
            el.className = keys.join(" ").trim();
        }
    }
    static addClass($el: JQuery, css: string): void {
        DomUtils.setClass($el.toArray(), css, false);
    }
    static removeClass($el: JQuery, css: string): void {
        DomUtils.setClass($el.toArray(), css, true);
    }
}