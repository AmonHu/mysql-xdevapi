import {BaseResult} from "../result/base-result";
import {DatabaseObject} from "../mixins/database-object";

export interface CollectionAdd extends DatabaseObject {
    add(input: any | Array<any>): CollectionAdd;

    execute(): Promise<BaseResult>;
}