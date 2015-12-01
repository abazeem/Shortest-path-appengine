package demo;
import java.util.*;
public class ImgGraph {
	
	int count;
	ArrayList<Integer> List;
	
	public ImgGraph()
	{
		count = 0;
		List = new ArrayList<Integer>();
	}
	
	public String implement(Graph graph, int src, int target)
	{
		int nodes = 9;
		Output output= null;
		boolean[] visited = new boolean[nodes];
		visited[src] = true;
		ArrayList<Integer> list = new ArrayList<Integer>();
		list.add(src);
		output = DFS(graph,visited,src,target,list, 0,output);
		int min = 1000;
		Output Min = null;
		Output head = output;
		while(head!= null)
		{
			if(head.dist < min)
			{
				min = head.dist;
				Min = head;
			}
			head = head.next;
		}
		String result = disp(Min);
		result = disp2(output, Min, result);
		return result;
	}
	
	public static Output DFS(Graph graph, boolean[] visited, int src , int target, ArrayList<Integer> List, int dist, Output output)
	{
		if( src != target)
		{
			int sub = 0;
			Node2 x = graph.arr[src];
			while(x!=null)
			{	
				dist = dist - sub;
				sub = 0;
				int size = List.size();
				for(int i = size-1; i>=0;i--)
				{
					if(List.get(i) == src)
						break;
					else
						List.remove(List.get(i));
				}
				int n = visited.length;
				visited = new boolean[n];
				
				for(int i = 0; i< n; i++)
				{
					for(int j = 0; j < List.size(); j++)
					{
						if(List.get(j) == i)
						{
							visited[i] = true;
							break;
						}
					}
				}
				
				if(!visited[x.val] || x.val == target)
				{
					visited[x.val] = true;
					List.add(x.val);
					sub = x.dist;
					dist = dist + x.dist;	
					output = DFS(graph,visited,x.val,target,List,dist,output);
				}
				x = x.next;
			}
		}
		else
		{
//			Iterator<Integer> it = List.iterator();
//			while(it.hasNext())
//			{
//				System.out.print(it.next());
//			}
//			System.out.println("");
//			System.out.println(dist);
			if(output == null)
				output = new Output(dist,List);
			else
			{
				Output last = output;
				while(last.next!=null)
					last = last.next;
				last.next = new Output(dist,List);
				return output;
			}
		}
		return output;
	}
	
	public String disp(Output Min)
	{
		int[] arr = Min.List;
		String result = "";
		for(int i = 0; i < arr.length; i++)
		{
			String temp = Integer.toString(arr[i]);
			result = result + temp;
		}
		result += "_";
		result += Integer.toString(Min.dist);
		return result;
	}
	
	public String disp2(Output output, Output min, String res)
	{
		while(output != null)
		{
			if(output != min)
				res += " " + disp(output);
			output = output.next;
		}
		return res;
	}
}
