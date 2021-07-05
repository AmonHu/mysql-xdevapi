import {Result} from "../result/result";
import {ExprOrLiteral} from "../global";

export interface TableInsert {
    execute(): Result;

    values(exprOrLiteral: ExprOrLiteral): TableInsert;
}