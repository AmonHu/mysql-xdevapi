export interface Limiting {
    limit(count: number, offset?: number): Limiting;
}