import {Result} from "../result/result";
import {DatabaseObject} from "../mixins/database-object";

export interface CollectionRemove extends DatabaseObject {
    execute(): Promise<Result>;

    sort(sortCriteria: Array<string>): CollectionRemove;

    limit(numberOfDocs: number): CollectionRemove;

    bind(name: string, value: any): CollectionRemove;
}