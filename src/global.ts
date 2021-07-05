export type DocumentOrJSON = object | string;

export type SearchConditionStr = string;

export type ExprOrLiteral = string | Array<string>;

export const enum LockContention {
    NOWAIT = 1,
    SKIP_LOCKED = 2,
}

export const enum DataModel {
    TABLE = 1,
    DOCUMENT = 2,
}

export const enum ValidationLevel {
    OFF = 'off',
    STRICT = 'strict',
}

export interface TLSOptions {
    ca: string;
    crl: string;
    versions: Array<string>;
}

export interface URI {
    host: string;
    port: number;
    user: string;
    password: string;
    auth: string;
    tls: TLSOptions;
    connectTimeout: number;
    connectionAttributes: Object;
}