import {LockContention} from "../global";

export interface Locking {
    LockContention: LockContention;

    lockExclusive(mode?: LockContention): Locking;

    lockShared(mode?: LockContention): Locking;
}