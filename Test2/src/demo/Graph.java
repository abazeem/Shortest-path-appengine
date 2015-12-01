package demo;

public class Graph {

	int val;
	Node2[] arr;
	
	public Graph(int v)
	{
		val = v;
		arr = new Node2[v];
	}
	
	public void insert(int val, int src, int dist)
	{
		if(arr[src] == null)
			arr[src] = new Node2(val,dist);
		else
		{
			Node2 last = arr[src];
			while(last.next!=null)
				last = last.next;
			last.next = new Node2(val,dist);
		}
	}
}
