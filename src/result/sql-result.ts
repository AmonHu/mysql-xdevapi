import {RowResult} from "./row-result";

export interface SqlResult extends RowResult {
    getAutoIncrementValue(): number;

    hasData(): boolean;

    toArray(): Array<object>;
}