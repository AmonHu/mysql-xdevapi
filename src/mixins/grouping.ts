export interface Grouping {
    groupBy(groupByExprStr: string | Array<string>): Grouping;

    having(expr: string): Grouping;
}