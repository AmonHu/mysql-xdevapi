import {Schema} from "../schema";
import {DocumentOrJSON, SearchConditionStr} from '../global'
import {DatabaseObject} from "../mixins/database-object";
import {CollectionAdd} from "./collection-add";
import {CollectionFind} from "./collection-find";
import {CollectionModify} from "./collection-modify";
import {CollectionRemove} from "./collection-remove";
import {Result} from "../result/result";

export interface Collection extends DatabaseObject {
    add(expr: DocumentOrJSON | Array<DocumentOrJSON>): CollectionAdd;

    addOrReplaceOne(id: string, data: object): Promise<Result>;

    count(): Promise<number>;

    createIndex(name: string, constraint: IndexDefinition): Promise<boolean>;

    existsInDatabase(): Promise<boolean>;

    dropIndex(name: string): Promise<boolean>;

    find(expr: SearchConditionStr): CollectionFind;

    getName(): string;

    getOne(id: string): Promise<object>;

    getSchema(): Schema;

    inspect(): object;

    modify(expr: SearchConditionStr): CollectionModify;

    remove(expr: SearchConditionStr): CollectionRemove;

    removeOne(id: string): Promise<Result>;

    replaceOne(id: string, data: object): Promise<Result>;
}

export interface FieldDefinition {
    field: string;
    type: string;
    required?: boolean;
    options?: number;
    srid?: number;
}

export interface IndexDefinition {
    type: string;
    fields: Array<FieldDefinition>;
}