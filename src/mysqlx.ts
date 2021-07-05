const mysqlx = require('@mysql/xdevapi');
import {Session} from "./session";
import {Client} from "./client";
import {DataModel, URI} from "./global";

export interface PoolOptions {
    enabled?: boolean;
    maxSize?: number;
    maxIdleT?: number;
    queueTimeout?: number;
}

export interface ClientOptions {
    pooling?: PoolOptions;
    mode?: DataModel;
}

export interface ParserOptions {
    mode: DataModel;
}

export function getSession(connection: string | URI): Promise<Session> {
    return mysqlx.getSession(connection);
}

export function getVersion() {
    return mysqlx.getVersion();
}

export function getClient(connection: string | URI, options?: ClientOptions): Promise<Client> {
    return mysqlx.getClient(options);
}

export function expr(value: string, options?: ParserOptions) {
    return mysqlx.expr(value, options);
}