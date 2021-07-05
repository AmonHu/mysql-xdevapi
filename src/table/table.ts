import {Schema} from "../schema";
import {DatabaseObject} from "../mixins/database-object";
import {SearchConditionStr} from "src/global";
import {TableDelete} from "./table-delete";
import {TableInsert} from "./table-insert";
import {TableSelect} from "./table-select";
import {TableUpdate} from "./table-update";

export interface Table extends DatabaseObject {
    count(): Promise<number>;

    delete(expr?: SearchConditionStr): TableDelete;

    existsInDatabase(): Promise<boolean>;

    getName(): string;

    getSchema(): Schema;

    insert(fields: string | Array<string>): TableInsert;

    inspect(): object;

    isView(): Promise<boolean>;

    select(expr?: string | Array<string>): TableSelect;

    update(expr?: string): TableUpdate;
}
