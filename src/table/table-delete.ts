import {Result} from "../result/result";
import {Binding} from "../mixins/binding";
import {Limiting} from "../mixins/limiting";
import {TableOrdering} from "../mixins/table-ordering";

export interface TableDelete extends Binding, Limiting, TableOrdering {
    execute(): Result;
}