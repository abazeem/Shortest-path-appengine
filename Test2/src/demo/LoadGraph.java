package demo;

public class LoadGraph {

	public Graph load(Graph graph)
	{		
		graph.insert(1,0,4);
		graph.insert(0,1,4);
		graph.insert(5,0,6);
		graph.insert(0,5,6);
		graph.insert(6,0,5);
		graph.insert(0,6,5);
		graph.insert(5,1,9);
		graph.insert(1,5,9);
		graph.insert(2,1,5);
		graph.insert(1,2,5);
		graph.insert(3,2,10);
		graph.insert(2,3,10);
		graph.insert(5,2,12);
		graph.insert(2,5,12);
		graph.insert(4,3,8);
		graph.insert(3,4,8);
		graph.insert(5,4,7);
		graph.insert(4,5,7);
		graph.insert(8,4,4);
		graph.insert(4,8,4);
		graph.insert(6,5,12);
		graph.insert(5,6,12);
		graph.insert(7,5,10);
		graph.insert(5,7,10);
		graph.insert(8,7,3);
		graph.insert(7,8,3);
		return graph;
	}
	
}
