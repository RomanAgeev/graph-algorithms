import { DirectedGraph } from "./directedGraph";
import { Queue } from "./queue";

export default function<T>(graph: DirectedGraph<T>, start: number): T[] {
    const visited: boolean[] = [];

    const queue = new Queue<number>();
    queue.enqueue(start);

    const result: T[] = [];

    while (!queue.empty) {
        const id = queue.dequeue()!;

        if (visited[id]) {
            continue;
        }

        result.push(graph.getData(id))
        visited[id] = true;

        for (let adj of graph.getEdges(id)) {
            queue.enqueue(adj);
        }
    }

    return result;
} 