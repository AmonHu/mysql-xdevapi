export interface Column {
    getCharacterSetName(): string;

    getCollationName(): string;

    getColumnLabel(): string;

    getColumnName(): string;

    getFractionalDigits(): number;

    getLength(): number;

    getSchemaName(): string;

    getTableLabel(): string;

    getTableName(): string;

    getType(): string;

    isNumberSigned(): boolean;

    isPadded(): string;
}