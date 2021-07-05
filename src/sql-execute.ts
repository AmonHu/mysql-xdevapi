import {SqlResult} from "./result/sql-result";

export interface SqlExecute {
    bind(values: string | Array<string>): SqlExecute;

    execute(rowcb: any, metacb: any): SqlResult;

}

