import { LinkedListNode } from "./linkedList";

export class Stack<T> {
    private _head: LinkedListNode<T> | null = null;

    get empty(): boolean {
        return this._head === null;
    }

    push(value: T): void {
        this._head = { value, next: this._head };
    }

    pop(): T | null {
        if (this.empty) {
            return null;
        }

        const value: T = this._head!.value;
        this._head = this._head!.next;
        return value;
    }

    peak(): T | null {
        if (this.empty) {
            return null;
        }
        return this._head!.value;
    }
}