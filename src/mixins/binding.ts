export interface Binding {
    bind(parameter: string | object, value?: string): Binding;
}