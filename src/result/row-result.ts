import {Column} from "../column";
import {BaseResult} from "./base-result";

export interface RowResult extends BaseResult{
    fetchAll(): Array<any>;

    fetchOne(): Array<any>;

    getAffectedItemsCount(): number;

    getColumns(): Array<Column>;

    getResults(): Array<Array<any>>;

    nextResult(): boolean;

    toArray(): Array<any>;
}