﻿/** The MIT License (MIT) Copyright(c) 2016 Maxim V.Tsapov */
import { BaseObject } from "jriapp_shared";

export interface IDataGridAnimation {
    beforeShow(el: HTMLElement): void;
    show(onEnd: () => void): void;
    beforeHide(el: HTMLElement): void;
    hide(onEnd: () => void): void;
    stop(): void;
}

/*
    used for collapsing or expanding data grid details
*/
export class DefaultAnimation extends BaseObject implements IDataGridAnimation {
    private _$el: JQuery;
    constructor() {
        super();
        this._$el = null;
    }
    beforeShow(el: HTMLElement): void {
        this.stop();
        this._$el = $(el);
        this._$el.hide();
    }
    show(onEnd: () => void): void {
        this._$el.slideDown(400, onEnd);
    }
    beforeHide(el: HTMLElement): void {
        this.stop();
        this._$el = $(el);
    }
    hide(onEnd: () => void): void {
        this._$el.slideUp(400, onEnd);
    }
    stop(): void {
        if (!!this._$el) {
            this._$el.finish();
            this._$el = null;
        }
    }
    destroy() {
        if (this._isDestroyed)
            return;
        this._isDestroyCalled = true;
        try {
            this.stop();
        }
        finally {
            super.destroy();
        }
    }
}