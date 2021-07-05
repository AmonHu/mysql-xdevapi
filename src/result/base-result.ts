export interface BaseResult {
    getWarnings(): Array<Warning>;
    getWarningsCount(): number;
}

export interface Warning {
    level: number;
    code: number;
    msg: string;
}