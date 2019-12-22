export type LinkedListNode<T> = {
    value: T,
    next: LinkedListNode<T> | null,
};

export class LinkedList<T> implements Iterable<T> {
    private _head: LinkedListNode<T> | null = null;

    get head(): LinkedListNode<T> | null {
        return this._head;
    }

    get empty(): boolean {
        return this._head === null;
    }

    [Symbol.iterator](): Iterator<T> {
        let pointer: LinkedListNode<T> | null = this._head;

        return {
            next(): IteratorResult<T> {
                if (pointer === null) {
                    return {
                        done: true,
                        value: null,
                    }
                }
                
                const { value, next } = pointer;
                pointer = next;
                return {
                    done: false,
                    value
                }
            }
        };
    }

    add(value: T): void {
        this._head = { value, next: this._head };
    }
}