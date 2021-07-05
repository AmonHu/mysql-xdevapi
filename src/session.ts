import {Schema} from "./schema";
import {SqlExecute} from "./sql-execute";

export interface Session {
    createSchema(schema: string): Promise<Schema>

    dropSchema(name: string): Promise<boolean>;

    executeSql(sql: string, args?: any): SqlExecute;

    getDefaultSchema(): Schema;

    getSchema(name: string): Schema;

    getSchemas(): Array<Schema>;

    releaseSavepoint(name?: string): Promise<any>;

    rollback(): Promise<boolean>;

    rollbackTo(name?: string): Promise<any>;

    setSavepoint(name?: string): Promise<string>;

    sql(sql: string): SqlExecute;

    startTransaction(): Promise<boolean>;

    close(): Promise<void>;
}
