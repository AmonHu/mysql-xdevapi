import {Result} from "../result/result";
import {DatabaseObject} from "../mixins/database-object";

export interface CollectionModify extends DatabaseObject {
    modify(expr: string): CollectionModify;

    arrayAppend(field: string, value: any): CollectionModify;

    arrayDelete(field: string): CollectionModify;

    arrayInsert(field: string, value: any): CollectionModify;

    execute(): Promise<Result>;

    patch(properties: any): CollectionModify;

    set(field: string, value: any): CollectionModify;

    unset(fields: Array<string>): CollectionModify;

    sort(sortCriteria: Array<string>): CollectionModify;

    limit(numberOfDocs: number): CollectionModify;

    bind(name: string, value: any): CollectionModify;
}