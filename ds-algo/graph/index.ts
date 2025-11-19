class Graph {
	private adjacencyList!:Map<number, number[]>;
	private adjacencyMatrix!:any;

	constructor(){
		this.adjacencyList = new Map();
	}

	setVertex(vertex: number){
		if(!this.adjacencyList.get(vertex)){
			this.adjacencyList.set(vertex, [])
		}
	}

	setEdge(vertex1:number, vertex2: number){
		const v1Edges = this.adjacencyList.get(vertex1);
		if(v1Edges)
			this.adjacencyList.set(vertex1, [...v1Edges, vertex2]);

		const v2Edges = this.adjacencyList.get(vertex2);
		if(v2Edges)
			this.adjacencyList.set(vertex2, [...v2Edges, vertex1]);
	}

	getEdges(vertex: number): number[] | undefined {
		return this.adjacencyList.get(vertex);
	}
}


const graph = new Graph();
graph.setVertex(5);
graph.setVertex(6);
graph.setEdge(5, 6);

console.log(graph.getEdges(5));
console.log(graph.getEdges(6));