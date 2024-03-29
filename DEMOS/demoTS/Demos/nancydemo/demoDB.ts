﻿/*
	Generated from: http://localhost:8080/demosvc/code?lang=ts on 2016-09-21 14:44 at 14:44
	Don't make manual changes here, because they will be lost when this db interface will be regenerated!
*/

import * as RIAPP from "jriapp";
import * as dbMOD from "jriapp_db";

//******BEGIN INTERFACE REGION******
export interface IAddressInfo2 {
    AddressID: number;
    AddressLine1: string;
    City: string;
    StateProvince: string;
    CountryRegion: string;
}

/*
	Generated from C# KeyVal model
*/
export interface IKeyVal {
    key: number;
    val: string;
}

export interface ITestLookUpProduct {
    ProductID: number;
    Name: string;
}

export enum TestEnum {
    None = 0,
    OK = 1,
    Error = 2,
    Loading = 3
}

/*
	A Class for testing of conversion C# types to typescript
*/
export interface IClientTestModel {
    Key: string;
    SomeProperty1: string;
    SomeProperty2: number[];
    SomeProperty3: string[];
    MoreComplexProperty: ITestLookUpProduct[];
    EnumProperty: TestEnum;
}

/*
	Generated from C# StrKeyVal model
*/
export interface IStrKeyVal {
    key: string;
    val: string;
}

export interface IRadioVal {
    key: string;
    value: string;
    comment: string;
}

/*
	Generated from C# HistoryItem model
*/
export interface IHistoryItem {
    radioValue: string;
    time: Date;
}

/*
	An enum for testing of conversion C# types to typescript
*/
export enum TestEnum2 {
    None = 0,
    One = 1,
    Two = 2,
    Three = 3
}
//******END INTERFACE REGION******

export interface ISvcMethods {
    TestComplexInvoke: (args: {
        info: IAddressInfo2;
        keys: IKeyVal[];
    }) => RIAPP.IVoidPromise;
    TestInvoke: (args: {
        param1: number[];
        param2: string;
    }) => RIAPP.IPromise<string>;
}

//******BEGIN LISTS REGION******
export class TestModelListItem extends RIAPP.CollectionItem<RIAPP.ListItemAspect<TestModelListItem, IClientTestModel>> implements RIAPP.IListItem, IClientTestModel {
    get Key(): string { return <string>this._aspect._getProp('Key'); }
    set Key(v: string) { this._aspect._setProp('Key', v); }
    get SomeProperty1(): string { return <string>this._aspect._getProp('SomeProperty1'); }
    set SomeProperty1(v: string) { this._aspect._setProp('SomeProperty1', v); }
    get SomeProperty2(): number[] { return <number[]>this._aspect._getProp('SomeProperty2'); }
    set SomeProperty2(v: number[]) { this._aspect._setProp('SomeProperty2', v); }
    get SomeProperty3(): string[] { return <string[]>this._aspect._getProp('SomeProperty3'); }
    set SomeProperty3(v: string[]) { this._aspect._setProp('SomeProperty3', v); }
    get MoreComplexProperty(): ITestLookUpProduct[] { return <ITestLookUpProduct[]>this._aspect._getProp('MoreComplexProperty'); }
    set MoreComplexProperty(v: ITestLookUpProduct[]) { this._aspect._setProp('MoreComplexProperty', v); }
    get EnumProperty(): TestEnum { return <TestEnum>this._aspect._getProp('EnumProperty'); }
    set EnumProperty(v: TestEnum) { this._aspect._setProp('EnumProperty', v); }

    toString() {
        return 'TestModelListItem';
    }
}

export class TestDictionary extends RIAPP.BaseDictionary<TestModelListItem, IClientTestModel> {
    constructor() {
        super(TestModelListItem, 'Key', [{ name: 'Key', dtype: 1 }, { name: 'SomeProperty1', dtype: 1 }, { name: 'SomeProperty2', dtype: 10 }, { name: 'SomeProperty3', dtype: 0 }, { name: 'MoreComplexProperty', dtype: 0 }, { name: 'EnumProperty', dtype: 0 }]);
    }
    findItem(key: string): TestModelListItem {
        return this.findByPK(RIAPP.Utils.arr.fromList(arguments));
    }
    toString() {
        return 'TestDictionary';
    }
}

export class TestList extends RIAPP.BaseList<TestModelListItem, IClientTestModel> {
    constructor() {
        super(TestModelListItem, [{ name: 'Key', dtype: 1 }, { name: 'SomeProperty1', dtype: 1 }, { name: 'SomeProperty2', dtype: 10 }, { name: 'SomeProperty3', dtype: 0 }, { name: 'MoreComplexProperty', dtype: 0 }, { name: 'EnumProperty', dtype: 0 }]);
    }
    toString() {
        return 'TestList';
    }
}

export class KeyValListItem extends RIAPP.CollectionItem<RIAPP.ListItemAspect<KeyValListItem, IKeyVal>> implements RIAPP.IListItem, IKeyVal {
    get key(): number { return <number>this._aspect._getProp('key'); }
    set key(v: number) { this._aspect._setProp('key', v); }
    get val(): string { return <string>this._aspect._getProp('val'); }
    set val(v: string) { this._aspect._setProp('val', v); }

    toString() {
        return 'KeyValListItem';
    }
}

export class KeyValDictionary extends RIAPP.BaseDictionary<KeyValListItem, IKeyVal> {
    constructor() {
        super(KeyValListItem, 'key', [{ name: 'key', dtype: 3 }, { name: 'val', dtype: 1 }]);
    }
    findItem(key: number): KeyValListItem {
        return this.findByPK(RIAPP.Utils.arr.fromList(arguments));
    }
    toString() {
        return 'KeyValDictionary';
    }
}

export class StrKeyValListItem extends RIAPP.CollectionItem<RIAPP.ListItemAspect<StrKeyValListItem, IStrKeyVal>> implements RIAPP.IListItem, IStrKeyVal {
    get key(): string { return <string>this._aspect._getProp('key'); }
    set key(v: string) { this._aspect._setProp('key', v); }
    get val(): string { return <string>this._aspect._getProp('val'); }
    set val(v: string) { this._aspect._setProp('val', v); }

    toString() {
        return 'StrKeyValListItem';
    }
}

export class StrKeyValDictionary extends RIAPP.BaseDictionary<StrKeyValListItem, IStrKeyVal> {
    constructor() {
        super(StrKeyValListItem, 'key', [{ name: 'key', dtype: 1 }, { name: 'val', dtype: 1 }]);
    }
    findItem(key: string): StrKeyValListItem {
        return this.findByPK(RIAPP.Utils.arr.fromList(arguments));
    }
    toString() {
        return 'StrKeyValDictionary';
    }
}

export class RadioValListItem extends RIAPP.CollectionItem<RIAPP.ListItemAspect<RadioValListItem, IRadioVal>> implements RIAPP.IListItem, IRadioVal {
    get key(): string { return <string>this._aspect._getProp('key'); }
    set key(v: string) { this._aspect._setProp('key', v); }
    get value(): string { return <string>this._aspect._getProp('value'); }
    set value(v: string) { this._aspect._setProp('value', v); }
    get comment(): string { return <string>this._aspect._getProp('comment'); }
    set comment(v: string) { this._aspect._setProp('comment', v); }

    toString() {
        return 'RadioValListItem';
    }
}

export class RadioValDictionary extends RIAPP.BaseDictionary<RadioValListItem, IRadioVal> {
    constructor() {
        super(RadioValListItem, 'key', [{ name: 'key', dtype: 1 }, { name: 'value', dtype: 1 }, { name: 'comment', dtype: 1 }]);
    }
    findItem(key: string): RadioValListItem {
        return this.findByPK(RIAPP.Utils.arr.fromList(arguments));
    }
    toString() {
        return 'RadioValDictionary';
    }
}

export class HistoryItemListItem extends RIAPP.CollectionItem<RIAPP.ListItemAspect<HistoryItemListItem, IHistoryItem>> implements RIAPP.IListItem, IHistoryItem {
    get radioValue(): string { return <string>this._aspect._getProp('radioValue'); }
    set radioValue(v: string) { this._aspect._setProp('radioValue', v); }
    get time(): Date { return <Date>this._aspect._getProp('time'); }
    set time(v: Date) { this._aspect._setProp('time', v); }

    toString() {
        return 'HistoryItemListItem';
    }
}

export class HistoryList extends RIAPP.BaseList<HistoryItemListItem, IHistoryItem> {
    constructor() {
        super(HistoryItemListItem, [{ name: 'radioValue', dtype: 1 }, { name: 'time', dtype: 6 }]);
    }
    toString() {
        return 'HistoryList';
    }
}
//******END LISTS REGION******

export interface LookUpProduct extends dbMOD.IEntityItem {
    ProductID: number;
    Name: string;
}

export class LookUpProductDb extends dbMOD.DbSet<LookUpProduct, DbContext>
{
    constructor(dbContext: DbContext) {
        var opts: dbMOD.IDbSetConstuctorOptions = {
            dbContext: dbContext,
            dbSetInfo: { "fieldInfos": [], "enablePaging": true, "pageSize": 25, "dbSetName": "LookUpProduct" },
            childAssoc: ([]),
            parentAssoc: ([])
        };
        opts.dbSetInfo.fieldInfos = ([{ "fieldName": "ProductID", "isPrimaryKey": 1, "dataType": 3, "isNullable": false, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "Name", "isPrimaryKey": 0, "dataType": 1, "isNullable": false, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }]);
        super(opts);
        this._createEntityType();
    }
    private _createEntityType(): void {
        //class expression
        this._entityType = class extends RIAPP.CollectionItem<dbMOD.EntityAspect<LookUpProduct, DbContext>> implements LookUpProduct {

            constructor(aspect: dbMOD.EntityAspect<LookUpProduct, DbContext>) {
                super(aspect);

            }
            toString() {
                return 'LookUpProductEntity';
            }
            get ProductID(): number { return this._aspect._getFieldVal('ProductID'); }
            set ProductID(v: number) { this._aspect._setFieldVal('ProductID', v); }
            get Name(): string { return this._aspect._getFieldVal('Name'); }
            set Name(v: string) { this._aspect._setFieldVal('Name', v); }
        };
    }
    findEntity(productID: number): LookUpProduct {
        return this.findByPK(RIAPP.Utils.arr.fromList(arguments));
    }
    toString(): string {
        return 'LookUpProductDb';
    }
    createReadProductLookUpQuery(): dbMOD.DataQuery<LookUpProduct> {
        return this.createQuery('ReadProductLookUp');
    }

}

export interface Product extends dbMOD.IEntityItem {
    readonly ProductID: number;
    Name: string;
    ProductNumber: string;
    Color: string;
    StandardCost: number;
    ListPrice: number;
    Size: string;
    Weight: number;
    ProductCategoryID: number;
    ProductModelID: number;
    SellStartDate: Date;
    SellEndDate: Date;
    DiscontinuedDate: Date;
    readonly rowguid: string;
    readonly ModifiedDate: Date;
    readonly IsActive: boolean;
    ThumbnailPhotoFileName: string;
    readonly SalesOrderDetails: SalesOrderDetail[];
}

export class ProductDb extends dbMOD.DbSet<Product, DbContext>
{
    constructor(dbContext: DbContext) {
        var opts: dbMOD.IDbSetConstuctorOptions = {
            dbContext: dbContext,
            dbSetInfo: { "fieldInfos": [], "enablePaging": true, "pageSize": 25, "dbSetName": "Product" },
            childAssoc: ([]),
            parentAssoc: ([{ "name": "OrdDetailsToProduct", "parentDbSetName": "Product", "childDbSetName": "SalesOrderDetail", "childToParentName": "Product", "parentToChildrenName": "SalesOrderDetails", "onDeleteAction": 0, "fieldRels": [{ "parentField": "ProductID", "childField": "ProductID" }] }])
        };
        opts.dbSetInfo.fieldInfos = ([{ "fieldName": "ProductID", "isPrimaryKey": 1, "dataType": 3, "isNullable": false, "isReadOnly": true, "isAutoGenerated": true, "isNeedOriginal": true, "maxLength": 4, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "Name", "isPrimaryKey": 0, "dataType": 1, "isNullable": false, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 50, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "ProductNumber", "isPrimaryKey": 0, "dataType": 1, "isNullable": false, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 25, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "Color", "isPrimaryKey": 0, "dataType": 1, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 15, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "StandardCost", "isPrimaryKey": 0, "dataType": 4, "isNullable": false, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 8, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "ListPrice", "isPrimaryKey": 0, "dataType": 4, "isNullable": false, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 8, "dateConversion": 0, "allowClientDefault": false, "range": "100,5000", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "Size", "isPrimaryKey": 0, "dataType": 1, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 5, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "Weight", "isPrimaryKey": 0, "dataType": 4, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 5, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "ProductCategoryID", "isPrimaryKey": 0, "dataType": 3, "isNullable": false, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 4, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "ProductModelID", "isPrimaryKey": 0, "dataType": 3, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 4, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "SellStartDate", "isPrimaryKey": 0, "dataType": 7, "isNullable": false, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 8, "dateConversion": 0, "allowClientDefault": false, "range": "2000-01-01,2015-01-01", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "SellEndDate", "isPrimaryKey": 0, "dataType": 7, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 8, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "DiscontinuedDate", "isPrimaryKey": 0, "dataType": 7, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 8, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "rowguid", "isPrimaryKey": 0, "dataType": 9, "isNullable": false, "isReadOnly": true, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 16, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 4, "dependentOn": "", "nested": null }, { "fieldName": "ModifiedDate", "isPrimaryKey": 0, "dataType": 6, "isNullable": false, "isReadOnly": true, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 8, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "IsActive", "isPrimaryKey": 0, "dataType": 2, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 2, "dependentOn": "SellEndDate", "nested": null }, { "fieldName": "ThumbnailPhotoFileName", "isPrimaryKey": 0, "dataType": 1, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 256, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "SalesOrderDetails", "isPrimaryKey": 0, "dataType": 0, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 3, "dependentOn": "", "nested": null }]);
        super(opts);
        this._createEntityType();
    }
    private _createEntityType(): void {
        //class expression
        this._entityType = class extends RIAPP.CollectionItem<dbMOD.EntityAspect<Product, DbContext>> implements Product {

            constructor(aspect: dbMOD.EntityAspect<Product, DbContext>) {
                super(aspect);

            }
            toString() {
                return 'ProductEntity';
            }
            get ProductID(): number { return this._aspect._getFieldVal('ProductID'); }
            get Name(): string { return this._aspect._getFieldVal('Name'); }
            set Name(v: string) { this._aspect._setFieldVal('Name', v); }
            get ProductNumber(): string { return this._aspect._getFieldVal('ProductNumber'); }
            set ProductNumber(v: string) { this._aspect._setFieldVal('ProductNumber', v); }
            get Color(): string { return this._aspect._getFieldVal('Color'); }
            set Color(v: string) { this._aspect._setFieldVal('Color', v); }
            get StandardCost(): number { return this._aspect._getFieldVal('StandardCost'); }
            set StandardCost(v: number) { this._aspect._setFieldVal('StandardCost', v); }
            get ListPrice(): number { return this._aspect._getFieldVal('ListPrice'); }
            set ListPrice(v: number) { this._aspect._setFieldVal('ListPrice', v); }
            get Size(): string { return this._aspect._getFieldVal('Size'); }
            set Size(v: string) { this._aspect._setFieldVal('Size', v); }
            get Weight(): number { return this._aspect._getFieldVal('Weight'); }
            set Weight(v: number) { this._aspect._setFieldVal('Weight', v); }
            get ProductCategoryID(): number { return this._aspect._getFieldVal('ProductCategoryID'); }
            set ProductCategoryID(v: number) { this._aspect._setFieldVal('ProductCategoryID', v); }
            get ProductModelID(): number { return this._aspect._getFieldVal('ProductModelID'); }
            set ProductModelID(v: number) { this._aspect._setFieldVal('ProductModelID', v); }
            get SellStartDate(): Date { return this._aspect._getFieldVal('SellStartDate'); }
            set SellStartDate(v: Date) { this._aspect._setFieldVal('SellStartDate', v); }
            get SellEndDate(): Date { return this._aspect._getFieldVal('SellEndDate'); }
            set SellEndDate(v: Date) { this._aspect._setFieldVal('SellEndDate', v); }
            get DiscontinuedDate(): Date { return this._aspect._getFieldVal('DiscontinuedDate'); }
            set DiscontinuedDate(v: Date) { this._aspect._setFieldVal('DiscontinuedDate', v); }
            get rowguid(): string { return this._aspect._getFieldVal('rowguid'); }
            get ModifiedDate(): Date { return this._aspect._getFieldVal('ModifiedDate'); }
            get IsActive(): boolean { return this._aspect._getCalcFieldVal('IsActive'); }
            get ThumbnailPhotoFileName(): string { return this._aspect._getFieldVal('ThumbnailPhotoFileName'); }
            set ThumbnailPhotoFileName(v: string) { this._aspect._setFieldVal('ThumbnailPhotoFileName', v); }
            get SalesOrderDetails(): SalesOrderDetail[] { return this._aspect._getNavFieldVal('SalesOrderDetails'); }
        };
    }
    findEntity(productID: number): Product {
        return this.findByPK(RIAPP.Utils.arr.fromList(arguments));
    }
    toString(): string {
        return 'ProductDb';
    }
    createReadProductByIdsQuery(args?: {
        productIDs: number[];
    }): dbMOD.DataQuery<Product> {
        var query = this.createQuery('ReadProductByIds');
        query.params = args;
        return query;
    }
    createReadProductQuery(args?: {
        param1: number[];
        param2: string;
    }): dbMOD.DataQuery<Product> {
        var query = this.createQuery('ReadProduct');
        query.params = args;
        return query;
    }
    defineIsActiveField(getFunc: (item: Product) => boolean) { this._defineCalculatedField('IsActive', getFunc); }
}

export interface ProductCategory extends dbMOD.IEntityItem {
    readonly ProductCategoryID: number;
    ParentProductCategoryID: number;
    Name: string;
    rowguid: string;
    ModifiedDate: Date;
}

export class ProductCategoryDb extends dbMOD.DbSet<ProductCategory, DbContext>
{
    constructor(dbContext: DbContext) {
        var opts: dbMOD.IDbSetConstuctorOptions = {
            dbContext: dbContext,
            dbSetInfo: { "fieldInfos": [], "enablePaging": false, "pageSize": 25, "dbSetName": "ProductCategory" },
            childAssoc: ([]),
            parentAssoc: ([])
        };
        opts.dbSetInfo.fieldInfos = ([{ "fieldName": "ProductCategoryID", "isPrimaryKey": 1, "dataType": 3, "isNullable": false, "isReadOnly": true, "isAutoGenerated": true, "isNeedOriginal": true, "maxLength": 4, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "ParentProductCategoryID", "isPrimaryKey": 0, "dataType": 3, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 4, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "Name", "isPrimaryKey": 0, "dataType": 1, "isNullable": false, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 50, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "rowguid", "isPrimaryKey": 0, "dataType": 9, "isNullable": false, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 16, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 4, "dependentOn": "", "nested": null }, { "fieldName": "ModifiedDate", "isPrimaryKey": 0, "dataType": 6, "isNullable": false, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 8, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }]);
        super(opts);
        this._createEntityType();
    }
    private _createEntityType(): void {
        //class expression
        this._entityType = class extends RIAPP.CollectionItem<dbMOD.EntityAspect<ProductCategory, DbContext>> implements ProductCategory {

            constructor(aspect: dbMOD.EntityAspect<ProductCategory, DbContext>) {
                super(aspect);

            }
            toString() {
                return 'ProductCategoryEntity';
            }
            get ProductCategoryID(): number { return this._aspect._getFieldVal('ProductCategoryID'); }
            get ParentProductCategoryID(): number { return this._aspect._getFieldVal('ParentProductCategoryID'); }
            set ParentProductCategoryID(v: number) { this._aspect._setFieldVal('ParentProductCategoryID', v); }
            get Name(): string { return this._aspect._getFieldVal('Name'); }
            set Name(v: string) { this._aspect._setFieldVal('Name', v); }
            get rowguid(): string { return this._aspect._getFieldVal('rowguid'); }
            set rowguid(v: string) { this._aspect._setFieldVal('rowguid', v); }
            get ModifiedDate(): Date { return this._aspect._getFieldVal('ModifiedDate'); }
            set ModifiedDate(v: Date) { this._aspect._setFieldVal('ModifiedDate', v); }
        };
    }
    findEntity(productCategoryID: number): ProductCategory {
        return this.findByPK(RIAPP.Utils.arr.fromList(arguments));
    }
    toString(): string {
        return 'ProductCategoryDb';
    }
    createReadProductCategoryQuery(): dbMOD.DataQuery<ProductCategory> {
        return this.createQuery('ReadProductCategory');
    }

}

export interface ProductModel extends dbMOD.IEntityItem {
    readonly ProductModelID: number;
    Name: string;
}

export class ProductModelDb extends dbMOD.DbSet<ProductModel, DbContext>
{
    constructor(dbContext: DbContext) {
        var opts: dbMOD.IDbSetConstuctorOptions = {
            dbContext: dbContext,
            dbSetInfo: { "fieldInfos": [], "enablePaging": false, "pageSize": 25, "dbSetName": "ProductModel" },
            childAssoc: ([]),
            parentAssoc: ([])
        };
        opts.dbSetInfo.fieldInfos = ([{ "fieldName": "ProductModelID", "isPrimaryKey": 1, "dataType": 3, "isNullable": false, "isReadOnly": true, "isAutoGenerated": true, "isNeedOriginal": true, "maxLength": 4, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "Name", "isPrimaryKey": 0, "dataType": 1, "isNullable": false, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 50, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }]);
        super(opts);
        this._createEntityType();
    }
    private _createEntityType(): void {
        //class expression
        this._entityType = class extends RIAPP.CollectionItem<dbMOD.EntityAspect<ProductModel, DbContext>> implements ProductModel {

            constructor(aspect: dbMOD.EntityAspect<ProductModel, DbContext>) {
                super(aspect);

            }
            toString() {
                return 'ProductModelEntity';
            }
            get ProductModelID(): number { return this._aspect._getFieldVal('ProductModelID'); }
            get Name(): string { return this._aspect._getFieldVal('Name'); }
            set Name(v: string) { this._aspect._setFieldVal('Name', v); }
        };
    }
    findEntity(productModelID: number): ProductModel {
        return this.findByPK(RIAPP.Utils.arr.fromList(arguments));
    }
    toString(): string {
        return 'ProductModelDb';
    }
    createReadProductModelQuery(): dbMOD.DataQuery<ProductModel> {
        return this.createQuery('ReadProductModel');
    }

}

export interface SalesOrderDetail extends dbMOD.IEntityItem {
    SalesOrderID: number;
    readonly SalesOrderDetailID: number;
    OrderQty: number;
    ProductID: number;
    readonly UnitPrice: number;
    readonly UnitPriceDiscount: number;
    readonly LineTotal: number;
    readonly rowguid: string;
    readonly ModifiedDate: Date;
    SalesOrderHeader: SalesOrderHeader;
    Product: Product;
}

export class SalesOrderDetailDb extends dbMOD.DbSet<SalesOrderDetail, DbContext>
{
    constructor(dbContext: DbContext) {
        var opts: dbMOD.IDbSetConstuctorOptions = {
            dbContext: dbContext,
            dbSetInfo: { "fieldInfos": [], "enablePaging": false, "pageSize": 25, "dbSetName": "SalesOrderDetail" },
            childAssoc: ([{ "name": "OrdDetailsToOrder", "parentDbSetName": "SalesOrderHeader", "childDbSetName": "SalesOrderDetail", "childToParentName": "SalesOrderHeader", "parentToChildrenName": "SalesOrderDetails", "onDeleteAction": 1, "fieldRels": [{ "parentField": "SalesOrderID", "childField": "SalesOrderID" }] }, { "name": "OrdDetailsToProduct", "parentDbSetName": "Product", "childDbSetName": "SalesOrderDetail", "childToParentName": "Product", "parentToChildrenName": "SalesOrderDetails", "onDeleteAction": 0, "fieldRels": [{ "parentField": "ProductID", "childField": "ProductID" }] }]),
            parentAssoc: ([])
        };
        opts.dbSetInfo.fieldInfos = ([{ "fieldName": "SalesOrderID", "isPrimaryKey": 1, "dataType": 3, "isNullable": false, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 4, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "SalesOrderDetailID", "isPrimaryKey": 2, "dataType": 3, "isNullable": false, "isReadOnly": true, "isAutoGenerated": true, "isNeedOriginal": true, "maxLength": 4, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "OrderQty", "isPrimaryKey": 0, "dataType": 3, "isNullable": false, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 2, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "ProductID", "isPrimaryKey": 0, "dataType": 3, "isNullable": false, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 4, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "UnitPrice", "isPrimaryKey": 0, "dataType": 4, "isNullable": true, "isReadOnly": true, "isAutoGenerated": true, "isNeedOriginal": true, "maxLength": 8, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "UnitPriceDiscount", "isPrimaryKey": 0, "dataType": 4, "isNullable": true, "isReadOnly": true, "isAutoGenerated": true, "isNeedOriginal": true, "maxLength": 8, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "LineTotal", "isPrimaryKey": 0, "dataType": 4, "isNullable": false, "isReadOnly": true, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 17, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "rowguid", "isPrimaryKey": 0, "dataType": 9, "isNullable": false, "isReadOnly": true, "isAutoGenerated": true, "isNeedOriginal": true, "maxLength": 16, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "ModifiedDate", "isPrimaryKey": 0, "dataType": 6, "isNullable": false, "isReadOnly": true, "isAutoGenerated": true, "isNeedOriginal": true, "maxLength": 8, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "SalesOrderHeader", "isPrimaryKey": 0, "dataType": 0, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 3, "dependentOn": "SalesOrderID", "nested": null }, { "fieldName": "Product", "isPrimaryKey": 0, "dataType": 0, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 3, "dependentOn": "ProductID", "nested": null }]);
        super(opts);
        this._createEntityType();
    }
    private _createEntityType(): void {
        //class expression
        this._entityType = class extends RIAPP.CollectionItem<dbMOD.EntityAspect<SalesOrderDetail, DbContext>> implements SalesOrderDetail {

            constructor(aspect: dbMOD.EntityAspect<SalesOrderDetail, DbContext>) {
                super(aspect);

            }
            toString() {
                return 'SalesOrderDetailEntity';
            }
            get SalesOrderID(): number { return this._aspect._getFieldVal('SalesOrderID'); }
            set SalesOrderID(v: number) { this._aspect._setFieldVal('SalesOrderID', v); }
            get SalesOrderDetailID(): number { return this._aspect._getFieldVal('SalesOrderDetailID'); }
            get OrderQty(): number { return this._aspect._getFieldVal('OrderQty'); }
            set OrderQty(v: number) { this._aspect._setFieldVal('OrderQty', v); }
            get ProductID(): number { return this._aspect._getFieldVal('ProductID'); }
            set ProductID(v: number) { this._aspect._setFieldVal('ProductID', v); }
            get UnitPrice(): number { return this._aspect._getFieldVal('UnitPrice'); }
            get UnitPriceDiscount(): number { return this._aspect._getFieldVal('UnitPriceDiscount'); }
            get LineTotal(): number { return this._aspect._getFieldVal('LineTotal'); }
            get rowguid(): string { return this._aspect._getFieldVal('rowguid'); }
            get ModifiedDate(): Date { return this._aspect._getFieldVal('ModifiedDate'); }
            get SalesOrderHeader(): SalesOrderHeader { return this._aspect._getNavFieldVal('SalesOrderHeader'); }
            set SalesOrderHeader(v: SalesOrderHeader) { this._aspect._setNavFieldVal('SalesOrderHeader', v); }
            get Product(): Product { return this._aspect._getNavFieldVal('Product'); }
            set Product(v: Product) { this._aspect._setNavFieldVal('Product', v); }
        };
    }
    findEntity(salesOrderID: number, salesOrderDetailID: number): SalesOrderDetail {
        return this.findByPK(RIAPP.Utils.arr.fromList(arguments));
    }
    toString(): string {
        return 'SalesOrderDetailDb';
    }
    createReadSalesOrderDetailQuery(): dbMOD.DataQuery<SalesOrderDetail> {
        return this.createQuery('ReadSalesOrderDetail');
    }

}

export interface SalesOrderHeader extends dbMOD.IEntityItem {
    readonly SalesOrderID: number;
    readonly RevisionNumber: number;
    OrderDate: Date;
    DueDate: Date;
    ShipDate: Date;
    readonly Status: number;
    OnlineOrderFlag: boolean;
    readonly SalesOrderNumber: string;
    readonly PurchaseOrderNumber: string;
    AccountNumber: string;
    CustomerID: number;
    ShipToAddressID: number;
    BillToAddressID: number;
    ShipMethod: string;
    CreditCardApprovalCode: string;
    readonly SubTotal: number;
    readonly TaxAmt: number;
    readonly Freight: number;
    readonly TotalDue: number;
    Comment: string;
    readonly rowguid: string;
    readonly ModifiedDate: Date;
    readonly SalesOrderDetails: SalesOrderDetail[];
}

export class SalesOrderHeaderDb extends dbMOD.DbSet<SalesOrderHeader, DbContext>
{
    constructor(dbContext: DbContext) {
        var opts: dbMOD.IDbSetConstuctorOptions = {
            dbContext: dbContext,
            dbSetInfo: { "fieldInfos": [], "enablePaging": false, "pageSize": 25, "dbSetName": "SalesOrderHeader" },
            childAssoc: ([]),
            parentAssoc: ([{ "name": "OrdDetailsToOrder", "parentDbSetName": "SalesOrderHeader", "childDbSetName": "SalesOrderDetail", "childToParentName": "SalesOrderHeader", "parentToChildrenName": "SalesOrderDetails", "onDeleteAction": 1, "fieldRels": [{ "parentField": "SalesOrderID", "childField": "SalesOrderID" }] }])
        };
        opts.dbSetInfo.fieldInfos = ([{ "fieldName": "SalesOrderID", "isPrimaryKey": 1, "dataType": 3, "isNullable": false, "isReadOnly": true, "isAutoGenerated": true, "isNeedOriginal": true, "maxLength": 4, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "RevisionNumber", "isPrimaryKey": 0, "dataType": 3, "isNullable": false, "isReadOnly": true, "isAutoGenerated": true, "isNeedOriginal": true, "maxLength": 1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "OrderDate", "isPrimaryKey": 0, "dataType": 7, "isNullable": false, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 8, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "DueDate", "isPrimaryKey": 0, "dataType": 7, "isNullable": false, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 8, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "ShipDate", "isPrimaryKey": 0, "dataType": 7, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 8, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "Status", "isPrimaryKey": 0, "dataType": 3, "isNullable": false, "isReadOnly": true, "isAutoGenerated": true, "isNeedOriginal": true, "maxLength": 1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "OnlineOrderFlag", "isPrimaryKey": 0, "dataType": 2, "isNullable": false, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "SalesOrderNumber", "isPrimaryKey": 0, "dataType": 1, "isNullable": false, "isReadOnly": true, "isAutoGenerated": true, "isNeedOriginal": true, "maxLength": 25, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "PurchaseOrderNumber", "isPrimaryKey": 0, "dataType": 1, "isNullable": true, "isReadOnly": true, "isAutoGenerated": true, "isNeedOriginal": true, "maxLength": 25, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "AccountNumber", "isPrimaryKey": 0, "dataType": 1, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 15, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "CustomerID", "isPrimaryKey": 0, "dataType": 3, "isNullable": false, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 4, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "ShipToAddressID", "isPrimaryKey": 0, "dataType": 3, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 4, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "BillToAddressID", "isPrimaryKey": 0, "dataType": 3, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 4, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "ShipMethod", "isPrimaryKey": 0, "dataType": 1, "isNullable": false, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 50, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "CreditCardApprovalCode", "isPrimaryKey": 0, "dataType": 1, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 15, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "SubTotal", "isPrimaryKey": 0, "dataType": 4, "isNullable": false, "isReadOnly": true, "isAutoGenerated": true, "isNeedOriginal": true, "maxLength": 8, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "TaxAmt", "isPrimaryKey": 0, "dataType": 4, "isNullable": false, "isReadOnly": true, "isAutoGenerated": true, "isNeedOriginal": true, "maxLength": 8, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "Freight", "isPrimaryKey": 0, "dataType": 4, "isNullable": false, "isReadOnly": true, "isAutoGenerated": true, "isNeedOriginal": true, "maxLength": 8, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "TotalDue", "isPrimaryKey": 0, "dataType": 4, "isNullable": false, "isReadOnly": true, "isAutoGenerated": true, "isNeedOriginal": true, "maxLength": 8, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "Comment", "isPrimaryKey": 0, "dataType": 1, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 0, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "rowguid", "isPrimaryKey": 0, "dataType": 9, "isNullable": false, "isReadOnly": true, "isAutoGenerated": true, "isNeedOriginal": true, "maxLength": 16, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "ModifiedDate", "isPrimaryKey": 0, "dataType": 6, "isNullable": false, "isReadOnly": true, "isAutoGenerated": true, "isNeedOriginal": true, "maxLength": 8, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "SalesOrderDetails", "isPrimaryKey": 0, "dataType": 0, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 3, "dependentOn": "", "nested": null }]);
        super(opts);
        this._createEntityType();
    }
    private _createEntityType(): void {
        //class expression
        this._entityType = class extends RIAPP.CollectionItem<dbMOD.EntityAspect<SalesOrderHeader, DbContext>> implements SalesOrderHeader {

            constructor(aspect: dbMOD.EntityAspect<SalesOrderHeader, DbContext>) {
                super(aspect);

            }
            toString() {
                return 'SalesOrderHeaderEntity';
            }
            get SalesOrderID(): number { return this._aspect._getFieldVal('SalesOrderID'); }
            get RevisionNumber(): number { return this._aspect._getFieldVal('RevisionNumber'); }
            get OrderDate(): Date { return this._aspect._getFieldVal('OrderDate'); }
            set OrderDate(v: Date) { this._aspect._setFieldVal('OrderDate', v); }
            get DueDate(): Date { return this._aspect._getFieldVal('DueDate'); }
            set DueDate(v: Date) { this._aspect._setFieldVal('DueDate', v); }
            get ShipDate(): Date { return this._aspect._getFieldVal('ShipDate'); }
            set ShipDate(v: Date) { this._aspect._setFieldVal('ShipDate', v); }
            get Status(): number { return this._aspect._getFieldVal('Status'); }
            get OnlineOrderFlag(): boolean { return this._aspect._getFieldVal('OnlineOrderFlag'); }
            set OnlineOrderFlag(v: boolean) { this._aspect._setFieldVal('OnlineOrderFlag', v); }
            get SalesOrderNumber(): string { return this._aspect._getFieldVal('SalesOrderNumber'); }
            get PurchaseOrderNumber(): string { return this._aspect._getFieldVal('PurchaseOrderNumber'); }
            get AccountNumber(): string { return this._aspect._getFieldVal('AccountNumber'); }
            set AccountNumber(v: string) { this._aspect._setFieldVal('AccountNumber', v); }
            get CustomerID(): number { return this._aspect._getFieldVal('CustomerID'); }
            set CustomerID(v: number) { this._aspect._setFieldVal('CustomerID', v); }
            get ShipToAddressID(): number { return this._aspect._getFieldVal('ShipToAddressID'); }
            set ShipToAddressID(v: number) { this._aspect._setFieldVal('ShipToAddressID', v); }
            get BillToAddressID(): number { return this._aspect._getFieldVal('BillToAddressID'); }
            set BillToAddressID(v: number) { this._aspect._setFieldVal('BillToAddressID', v); }
            get ShipMethod(): string { return this._aspect._getFieldVal('ShipMethod'); }
            set ShipMethod(v: string) { this._aspect._setFieldVal('ShipMethod', v); }
            get CreditCardApprovalCode(): string { return this._aspect._getFieldVal('CreditCardApprovalCode'); }
            set CreditCardApprovalCode(v: string) { this._aspect._setFieldVal('CreditCardApprovalCode', v); }
            get SubTotal(): number { return this._aspect._getFieldVal('SubTotal'); }
            get TaxAmt(): number { return this._aspect._getFieldVal('TaxAmt'); }
            get Freight(): number { return this._aspect._getFieldVal('Freight'); }
            get TotalDue(): number { return this._aspect._getFieldVal('TotalDue'); }
            get Comment(): string { return this._aspect._getFieldVal('Comment'); }
            set Comment(v: string) { this._aspect._setFieldVal('Comment', v); }
            get rowguid(): string { return this._aspect._getFieldVal('rowguid'); }
            get ModifiedDate(): Date { return this._aspect._getFieldVal('ModifiedDate'); }
            get SalesOrderDetails(): SalesOrderDetail[] { return this._aspect._getNavFieldVal('SalesOrderDetails'); }
        };
    }
    findEntity(salesOrderID: number): SalesOrderHeader {
        return this.findByPK(RIAPP.Utils.arr.fromList(arguments));
    }
    toString(): string {
        return 'SalesOrderHeaderDb';
    }
    createReadSalesOrderHeaderQuery(): dbMOD.DataQuery<SalesOrderHeader> {
        return this.createQuery('ReadSalesOrderHeader');
    }

}

export interface IAssocs {
    getOrdDetailsToOrder: () => dbMOD.Association;
    getOrdDetailsToProduct: () => dbMOD.Association;
}


export class DbSets extends dbMOD.DbSets {
    constructor(dbContext: DbContext) {
        super(dbContext);
        this._createDbSet("LookUpProduct", LookUpProductDb);
        this._createDbSet("Product", ProductDb);
        this._createDbSet("ProductCategory", ProductCategoryDb);
        this._createDbSet("ProductModel", ProductModelDb);
        this._createDbSet("SalesOrderDetail", SalesOrderDetailDb);
        this._createDbSet("SalesOrderHeader", SalesOrderHeaderDb);
    }
    get LookUpProduct() { return <LookUpProductDb>this.getDbSet("LookUpProduct"); }
    get Product() { return <ProductDb>this.getDbSet("Product"); }
    get ProductCategory() { return <ProductCategoryDb>this.getDbSet("ProductCategory"); }
    get ProductModel() { return <ProductModelDb>this.getDbSet("ProductModel"); }
    get SalesOrderDetail() { return <SalesOrderDetailDb>this.getDbSet("SalesOrderDetail"); }
    get SalesOrderHeader() { return <SalesOrderHeaderDb>this.getDbSet("SalesOrderHeader"); }
}

export class DbContext extends dbMOD.DbContext {
    protected _initDbSets() {
        super._initDbSets();
        this._dbSets = new DbSets(this);
        var associations = [{ "name": "OrdDetailsToOrder", "parentDbSetName": "SalesOrderHeader", "childDbSetName": "SalesOrderDetail", "childToParentName": "SalesOrderHeader", "parentToChildrenName": "SalesOrderDetails", "onDeleteAction": 1, "fieldRels": [{ "parentField": "SalesOrderID", "childField": "SalesOrderID" }] }, { "name": "OrdDetailsToProduct", "parentDbSetName": "Product", "childDbSetName": "SalesOrderDetail", "childToParentName": "Product", "parentToChildrenName": "SalesOrderDetails", "onDeleteAction": 0, "fieldRels": [{ "parentField": "ProductID", "childField": "ProductID" }] }];
        this._initAssociations(associations);
        var methods = [{ "methodName": "ReadProduct", "parameters": [{ "name": "param1", "dataType": 3, "isArray": true, "isNullable": false, "dateConversion": 0, "ordinal": 0 }, { "name": "param2", "dataType": 1, "isArray": false, "isNullable": false, "dateConversion": 0, "ordinal": 1 }], "methodResult": true, "isQuery": true }, { "methodName": "ReadProductByIds", "parameters": [{ "name": "productIDs", "dataType": 3, "isArray": true, "isNullable": false, "dateConversion": 0, "ordinal": 0 }], "methodResult": true, "isQuery": true }, { "methodName": "ReadProductCategory", "parameters": [], "methodResult": true, "isQuery": true }, { "methodName": "ReadProductLookUp", "parameters": [], "methodResult": true, "isQuery": true }, { "methodName": "ReadProductModel", "parameters": [], "methodResult": true, "isQuery": true }, { "methodName": "ReadSalesOrderDetail", "parameters": [], "methodResult": true, "isQuery": true }, { "methodName": "ReadSalesOrderHeader", "parameters": [], "methodResult": true, "isQuery": true }, { "methodName": "TestComplexInvoke", "parameters": [{ "name": "info", "dataType": 0, "isArray": false, "isNullable": false, "dateConversion": 0, "ordinal": 0 }, { "name": "keys", "dataType": 0, "isArray": true, "isNullable": false, "dateConversion": 0, "ordinal": 1 }], "methodResult": false, "isQuery": false }, { "methodName": "TestInvoke", "parameters": [{ "name": "param1", "dataType": 10, "isArray": false, "isNullable": false, "dateConversion": 0, "ordinal": 0 }, { "name": "param2", "dataType": 1, "isArray": false, "isNullable": false, "dateConversion": 0, "ordinal": 1 }], "methodResult": true, "isQuery": false }];
        this._initMethods(methods);
    }
    get associations() { return <IAssocs>this._assoc; }
    get dbSets() { return <DbSets>this._dbSets; }
    get serviceMethods() { return <ISvcMethods>this._svcMethods; }
}