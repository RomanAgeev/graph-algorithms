type Vertex<T> = {
    readonly id: number,
    data: T,
};

export class GraphVertexes<T> {
    private _idCounter = 0;
    private readonly _vertexes: Vertex<T>[] = [];

    get count() {
        return this._vertexes.length;
    }
    get ids(): Iterable<number> {
        return this._vertexes.map(vertex => vertex.id);
    }

    addVertex(data: T): number {
        const id = this._idCounter++;
        const vertex: Vertex<T> = { id, data };
        this._vertexes[id] = vertex;
        return id;
    }

    getData(id: number): T {
        return this._vertexes[id].data;
    }
}