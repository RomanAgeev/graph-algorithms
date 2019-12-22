import { LinkedListNode } from "./linkedList";

export class Queue<T> {
    private _head: LinkedListNode<T> | null = null;
    private _tail: LinkedListNode<T> | null = null;

    get empty(): boolean {
        return this._head === null || this._tail === null;
    }

    enqueue(value: T): void {
        const node: LinkedListNode<T> = { value, next: null };
        
        if (this.empty) {
            this._head = this._tail = node;
            return;
        }

        this._tail!.next = node;
        this._tail = node;
    }

    dequeue(): T | null {
        if (this.empty) {
            return null;
        }
        
        const value = this._head!.value;
        this._head = this._head!.next;
        if (this._head === null) {
            this._tail = null;
        }        
        return value;
    }
}