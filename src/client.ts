import {Session} from "./session";

export interface Client {
    close(): Promise<void>;

    getSession(): Promise<Session>;
}