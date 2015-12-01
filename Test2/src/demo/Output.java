package demo;
import java.util.ArrayList;

public class Output {

	int dist;
	int[] List;
	Output next;
	
	public Output(int d, ArrayList<Integer> list)
	{
		dist = d;
		List = new int[list.size()];
		for(int i = 0; i< list.size(); i++)
			List[i] = list.get(i);
		next = null;
	}
}
