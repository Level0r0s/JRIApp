﻿/** The MIT License (MIT) Copyright(c) 2016 Maxim V.Tsapov */
import { DATA_ATTR } from "jriapp_core/const";
import { Utils } from "jriapp_utils/utils";

import { css, PROP_NAME } from "../const";
import { BaseColumn, ICellInfo } from "./base";
import { DataGrid } from "../datagrid";
import { RowSelectorCell } from "../cells/rowselector";

const utils = Utils, dom = utils.dom, $ = dom.$, doc = dom.document, checks = utils.check;

export class RowSelectorColumn extends BaseColumn {
    private _chk: HTMLInputElement;
    private _event_chk_scope: string;
    private _onDespose: () => void;

    constructor(grid: DataGrid, options: ICellInfo) {
        super(grid, options);
        let self = this;
        this._event_chk_scope = ["input[", DATA_ATTR.DATA_EVENT_SCOPE, '="', this.uniqueID, '"]'].join("");
        dom.addClass([this.col], css.rowSelector);
        let label = doc.createElement("label");
        let chk = doc.createElement("input");
        chk.type = "checkbox";
        chk.checked = false;
        chk.className = css.rowSelector;
        label.className = css.rowSelector;
        label.appendChild(chk);
        label.appendChild(doc.createElement("span"));
        this.col.appendChild(label);
        this._chk = chk;
        let chkHandler = (e: Event) => {
            e.stopPropagation();
            self.raisePropertyChanged(PROP_NAME.checked);
            self.grid.selectRows(this.checked);
        };
        chk.addEventListener("change", chkHandler);
        this._onDespose = () => {
            chk.removeEventListener("change", chkHandler);
            dom.removeNode(label);
        };

        //delegated event from the cells
        this.grid.$table.on("click", this._event_chk_scope, function (e) {
            e.stopPropagation();
            const chk = <HTMLInputElement>this, $chk = $(chk), cell = <RowSelectorCell>$chk.data("cell");
            if (!!cell && !cell.getIsDestroyCalled()) {
                cell.row.isSelected = cell.checked;
            }
        });
    }
    toString() {
        return "RowSelectorColumn";
    }
    get checked() {
        if (!!this._chk) {
            return this._chk.checked;
        }
        return checks.undefined;
    }
    set checked(v) {
        let bv = !!v, chk = this._chk;
        if (!!chk) {
            if (bv !== chk.checked) {
                chk.checked = bv;
                this.raisePropertyChanged(PROP_NAME.checked);
            }
        }
    }
    destroy() {
        if (this._isDestroyed)
            return;
        this._isDestroyCalled = true;
        this.grid.$table.off("click", this._event_chk_scope);
        if (!!this._onDespose) {
            this._onDespose();
            this._onDespose = null;
        }
        this._chk = null;
        super.destroy();
    }
}