import {Result} from "../result/result";
import {Binding} from "../mixins/binding";
import {TableOrdering} from "../mixins/table-ordering";
import {Limiting} from "../mixins/limiting";

export interface TableUpdate extends Binding, Limiting, TableOrdering {
    execute(): Result;

    set(field: string, expr: string): TableUpdate;
}