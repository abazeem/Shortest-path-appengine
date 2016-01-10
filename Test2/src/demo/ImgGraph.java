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
	
	public String implement(Graph graph, String str1, String str2)
	{
		ArrayList<Integer> inputs = new ArrayList<Integer>();
		int src = (int) str2.charAt(0) - 48;
		int target = (int) str2.charAt(str2.length()-1) - 48;
		for(int i = 0; i< str1.length(); i++)
			inputs.add((int)str1.charAt(i) - 48);
		int nodes = 9;
		Output output= null;
		boolean[] visited = new boolean[nodes];
		visited[src] = true;
		ArrayList<Integer> list = new ArrayList<Integer>();
		list.add(src);
		output = DFS(graph,visited,src,target,list, 0,output, inputs);
		if(output == null)
			return "";
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
	
	public static Output DFS(Graph graph, boolean[] visited, int src , int target, ArrayList<Integer> List, int dist, Output output, ArrayList<Integer> inputs)
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
					output = DFS(graph,visited,x.val,target,List,dist,output,inputs);
				}
				x = x.next;
			}
		}
		else
		{
			boolean flag = false;
			for(int i = 0; i< inputs.size(); i++)
			{
				if(List.contains(inputs.get(i)))
					flag = true;
				else
				{
					flag = false;
					break;
				}
			}
			if(output == null && flag)
				output = new Output(dist,List);
			else
			{
				if(flag)
				{
					Output last = output;
					while(last.next!=null)
						last = last.next;
					last.next = new Output(dist,List);
					return output;
				}
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
