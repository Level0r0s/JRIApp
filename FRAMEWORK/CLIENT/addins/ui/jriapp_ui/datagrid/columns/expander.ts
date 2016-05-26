﻿/** The MIT License (MIT) Copyright(c) 2016 Maxim V.Tsapov */
import { css } from "../const";
import { BaseColumn, ICellInfo } from "./base";
import { DataGrid } from "../datagrid";

export class ExpanderColumn extends BaseColumn {
    constructor(grid: DataGrid, options: ICellInfo) {
        super(grid, options);
        this.$col.addClass(css.rowExpander);
    }
    toString() {
        return "ExpanderColumn";
    }
}