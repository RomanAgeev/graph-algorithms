import { UndirectedGraph, UndirectedEdge } from "./undirectedGraph";

type Subset = {
    parent: number,
    rank: number,
};

export default function<T>(graph: UndirectedGraph<T>): UndirectedEdge[] {
    const edges: UndirectedEdge[] = [...graph.edges];

    edges.sort((a, b) => {
        if (a.weight > b.weight) {
            return 1
        }
        if (a.weight < b.weight) {
            return -1
        }
        return 0;
    });

    const subsets: Subset[] = [];
    for (let vertex of graph.vertexes) {
        subsets[vertex] = { parent: vertex, rank: 0 };
    }

    const findParent = (vertex: number): number => {
        if (subsets[vertex].parent != vertex) {
            subsets[vertex].parent = findParent(subsets[vertex].parent);
        }
        return subsets[vertex].parent;
    };

    const unionSubsets = (vertex1: number, vertex2: number): void => {
        const parent1: number = findParent(vertex1);
        const parent2: number = findParent(vertex2);

        if (subsets[parent1].rank < subsets[parent2].rank) {
            subsets[parent1].parent = parent2;
        } else if (subsets[parent1].rank > subsets[parent2].rank) {
            subsets[parent2].parent = parent1;
        } else {
            subsets[parent2].parent = parent1;
            subsets[parent1].rank++;
        }
    };

    const result: UndirectedEdge[] = [];

    for (let edge of edges) {
        const parSource: number = findParent(edge.source);
        const parTarget: number = findParent(edge.target);

        if (parSource != parTarget) {
            unionSubsets(parSource, parTarget);
            result.push(edge);
            if (result.length === graph.count - 1) {
                break;
            }
        }
    }
    return result;
}