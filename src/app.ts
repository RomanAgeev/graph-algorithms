import { DirectedGraph } from "./directedGraph";
import { UndirectedGraph, UndirectedEdge } from "./undirectedGraph";
import bft from "./graphBFT";
import dft from "./graphDFT";
import kruskalMinSpanTree from "./kruskalMinSpanTree";

const graph = new UndirectedGraph<string>();

const idA = graph.addVertex("A");
const idB = graph.addVertex("B");
const idC = graph.addVertex("C");
const idD = graph.addVertex("D");
const idE = graph.addVertex("E");

graph.addEdge(idA, idD, 7);
graph.addEdge(idA, idB, 1);
graph.addEdge(idD, idE, 6);
graph.addEdge(idB, idC, 2);
graph.addEdge(idB, idE, 5);
graph.addEdge(idC, idE, 3);
graph.addEdge(idC, idD, 4);

const minSpanTree: UndirectedEdge[] = kruskalMinSpanTree(graph);
for (let { source, target, weight } of minSpanTree) {
    console.log(`${weight}: ${graph.getData(source)} - ${graph.getData(target)}`);
}

// const graph = new DirectedGraph<string>();

// const idA = graph.addVertex("A");
// const idB = graph.addVertex("B");
// const idC = graph.addVertex("C");
// const idD = graph.addVertex("D");
// const idE = graph.addVertex("E");

// graph.addEdge(idA, idA);
// graph.addEdge(idA, idB);
// graph.addEdge(idA, idD);
// graph.addEdge(idB, idC);
// graph.addEdge(idB, idE);
// graph.addEdge(idC, idB);
// graph.addEdge(idC, idE);
// graph.addEdge(idE, idD);

// console.log(bft(graph, idA));
// console.log(dft(graph, idA));