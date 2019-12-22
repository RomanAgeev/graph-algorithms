import { GraphVertexes } from "./graphVertexes";
import { LinkedList } from "./linkedList";

export class DirectedGraph<T> {
    private readonly _vertexes = new GraphVertexes<T>();
    private readonly _adges: LinkedList<number>[] = [];

    get count() {
        return this._vertexes.count;
    }

    addVertex(data: T): number {
        const id = this._vertexes.addVertex(data);
        this._adges[id] = new LinkedList<number>();
        return id;
    }

    getData(id: number): T {
        return this._vertexes.getData(id);
    }

    addEdge(source: number, target: number): void {
        this._adges[source].add(target);
    }

    getEdges(id: number): Iterable<number> {
        return this._adges[id];
    }
}
