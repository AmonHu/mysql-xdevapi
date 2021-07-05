import {Collection} from "./collection/collection";
import {DatabaseObject} from "./mixins/database-object";
import {Table} from "./table/table";
import {ValidationLevel} from "./global";

export interface Schema extends DatabaseObject{
    dropCollection(name:string): Promise<boolean>;

    existsInDatabase(): Promise<boolean>;

    getCollection(name: string): Collection;

    getCollectionAsTable(name:string): Table;

    getCollections(): Promise<Array<Collection>>;

    getName(): string;

    getTable(name:string): Table;

    getTables(): Promise<Array<Table>>;

    createCollection(name: string, options?: CreateCollectionOptions): Promise<Collection>;
}

export interface CreateCollectionOptions {
    reuseExisting: boolean;
    validation: SchemaValidationOptions;
}

export interface SchemaValidationOptions {
    schema: object;
    level: ValidationLevel;
}