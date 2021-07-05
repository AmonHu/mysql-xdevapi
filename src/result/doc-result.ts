export interface DocResult {
    fetchAll(): Array<object>;

    fetchOne(): object;

    toArray(): Array<object>;
}