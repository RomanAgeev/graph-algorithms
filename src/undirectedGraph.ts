import { GraphVertexes } from "./graphVertexes";

export type UndirectedEdge = Readonly<{
    source: number,
    target: number,
    weight: number,
}>;

export class UndirectedGraph<T> {
    private readonly _vertexes = new GraphVertexes<T>();
    private readonly _edges: UndirectedEdge[] = [];

    get count(): number {
        return this._vertexes.count;
    }
    get vertexes(): Iterable<number> {
        return this._vertexes.ids;
    }
    get edges(): Iterable<UndirectedEdge> {
        return this._edges;
    }

    addVertex(data: T): number {
        return this._vertexes.addVertex(data);
    }

    getData(id: number): T {
        return this._vertexes.getData(id);
    }

    addEdge(source: number, target: number, weight: number): void {
        this._edges.push({ source, target, weight });
    }
}
