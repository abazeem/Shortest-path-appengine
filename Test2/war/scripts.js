function select( id )
{
	document.getElementById('btn2').addEventListener("click",clear1);
	var count = 0;
	$(".highlight2").each(function()
	{
		if($(this).attr('id') == id )
		{
			var node2 = document.getElementById(id);
			node2.setAttribute("class" , "box")
			return;
		}
		count++;
	});
	if(count < 2)
	{
		var node = document.getElementById(id);
		var text = node.getAttribute("class");
		node.setAttribute("class" ,text+" highlight2");
		if(count == 1)
			document.getElementById('text2').innerHTML = "<h3>Select the connecting nodes</h3>";
	}
	else
	{
		
		var node2 = document.getElementById(id);
		var text2 = node2.getAttribute("class");
		node2.setAttribute("class",text2 + " highlight");
	}
}


function clear1()
{
	var id;
	var node3;
	document.getElementById('op').innerHTML = "";
	$(".highlight").each(function()
	{
		id = $(this).attr('id');
		node3 = document.getElementById(id);
		node3.setAttribute("class","box");
	});
	$(".highlight2").each(function()
	{
		id = $(this).attr('id');
		node3 = document.getElementById(id);
		node3.setAttribute("class","box");
	});
	document.getElementById('text2').innerHTML = "<h3>Select source and destination</h3>"
}


function compute()
{
		var count = 0;
		var s = "";
		var textid;
		var t = "";
		document.getElementById("op").innerHTML = "";
		$(".highlight").each(function()
		{
			textid = $(this).attr('id');
			s+= textid.charAt(textid.length - 1);
		});
		$(".highlight2").each(function()
		{
			textid = $(this).attr('id');
			t+= textid.charAt(textid.length - 1);
		});
//	if ( count != 2 )
//		document.getElementById("op").innerHTML = "Please select any 2 nodes";
//	else
	//{
		$.post("register/Display.jsp",
    		    { sr: s, tr : t},
    		    function(data){
    		    	document.getElementById("op").innerHTML = data;
    		    	data = document.getElementById("op").innerText;
    		    	if(data == "")
    		    	{
    		    		document.getElementById('op').innerText = "No path found";
    		    		var id;
    		    		var node3;
    		    		$(".highlight").each(function()
    		    		{
    		    			id = $(this).attr('id');
    		    			node3 = document.getElementById(id);
    		    			node3.setAttribute("class","box");
    		    		});
    		    		$(".highlight2").each(function()
    		    		{
    		    			id = $(this).attr('id');
    		    			node3 = document.getElementById(id);
    		    			node3.setAttribute("class","box");
    		    		});
    		    		return;
    		    	}
    		    	
    		    	var element = document.getElementById("op");
    		    	var fulltext = element.innerText;
    		    	if(!fulltext)
    		    		fulltext = element.textContent;
    		    	fulltext = fulltext.toString();
    		    	var arry = fulltext.split(" ");
    		    	var len = arry.length;
    		    	
    		    	disp1(arry[0]);
    		    	
    		    	for ( var i = 1; i < len - 1 ; i++)
    		    	{
    		    		disp2(arry[i], i);
    		    	}
    		    	
    		    });
//	}
}

function disp1 (Str)
{
	var flag = false;
	var path = {};
	var c = 0;
	var temp5 = Str.charAt(0);
	path[c] = temp5;
	var dist = "";
	c++;
	
	for ( var i = 1; i < Str.length; i++)
	{
		temp5 = Str.charAt(i);
		if( temp5 == '_' )
		{
			flag = true;
			continue;
		}
		if( flag == true )
		{
			dist += temp5;
		}
		else
		{
			var temp2 = temp5;
			path[c] = temp2;
			c++;
			var temp = "box" + temp2;
			mark(temp);
		}
	}
	var txt = "Shortest path is " + path[0];
	for(var j = 1 ; j < c; j++ )
	{
		txt += " --> " + path[j];
	}
	txt += " Distance " + dist;
	document.getElementById("op").innerHTML = txt;
}

function disp2(Str , x)
{
	var flag = false;
	var path = {};
	var c = 0;
	var temp3 = Str.charAt(0);
	path[c] = temp3;
	var dist = "";
	c++;
	var txt = "";
	if ( x == 1)
		txt += "</br>Other paths :"
	for ( var i = 1; i < Str.length; i++)
	{
		var temp4 = Str.charAt(i);
		if( temp4 == '_' )
		{
			flag = true;
			continue;
		}
		if( flag == true )
		{
			dist += temp4;
		}
		else
		{
			path[c] = temp4;
			c++;
		}
	}
	txt += "</br>" + path[0];
	for(var j = 1 ; j < c; j++ )
	{
		txt += " --> " + path[j];
	}
	txt += " Distance " + dist;
	var temp = document.getElementById("op").innerHTML;
	document.getElementById("op").innerHTML = temp + txt;
}

function mark (id)
{
	var Node = document.getElementById(id);
	var getClass = Node.getAttribute("class");
	if(getClass.indexOf("highlight2") == -1)
		Node.setAttribute("class" , "box highlight");
}
