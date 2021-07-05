import {DatabaseObject} from "../mixins/database-object";
import {DocResult} from "../result/doc-result";

export interface CollectionFind extends DatabaseObject {
    fields(projections: Array<string> | string): CollectionFind;

    groupBy(fields: Array<string>): CollectionFind;

    having(condition: string): CollectionFind;

    sort(sortCriteria: Array<string>): CollectionFind;

    limit(numberOfDocs: number): CollectionFind;

    skip(numberOfDocs: number): CollectionFind;

    offset(numberOfDocs: number): CollectionFind;

    lockShared(lockContention: string): CollectionFind;

    lockExclusive(lockContention: string): CollectionFind;

    bind(name: string, value: any): CollectionFind;

    execute(): Promise<DocResult>;
}