import {Session} from "../session";

export interface DatabaseObject {
    getSession(): Session;
}