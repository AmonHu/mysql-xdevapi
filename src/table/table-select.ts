import {RowResult} from "../result/row-result";
import {TableOrdering} from "../mixins/table-ordering";
import {Skipping} from "../mixins/skipping";
import {Locking} from "../mixins/locking";
import {Grouping} from "../mixins/grouping";
import {Binding} from "../mixins/binding";

export interface TableSelect extends Binding,Grouping,Locking,Skipping,TableOrdering{
    execute(dataCursor?: any, metadataCursor?: any): RowResult;
}