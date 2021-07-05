import {BaseResult} from "./base-result";


export interface Result extends BaseResult {
    getAffectedItemsCount(): number;

    getAffectedRowsCount(): number;

    getAutoIncrementValue(): number;

    getGeneratedIds(): Array<string>;
}

