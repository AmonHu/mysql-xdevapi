export interface TableOrdering {
    orderBy(sortExprStr: string | Array<string>): TableOrdering;
}