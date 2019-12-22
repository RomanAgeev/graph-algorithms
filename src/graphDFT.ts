import { DirectedGraph } from "./directedGraph";
import { Stack } from "./stack";

export default function<T>(graph: DirectedGraph<T>, start: number): T[] {
    const visited: boolean[] = [];

    const stack = new Stack<number>();
    stack.push(start);

    const result: T[] = [];

    while(!stack.empty) {
        const id = stack.pop()!;

        if (visited[id]) {
            continue;
        }

        result.push(graph.getData(id));
        visited[id] = true;

        for (let adj of graph.getEdges(id)) {
            stack.push(adj);
        }
    }

    return result;
}