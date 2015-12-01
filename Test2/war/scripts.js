function select( id )
{
	document.getElementById('btn2').addEventListener("click",clear1);
	var count = 0;
	$(".highlight").each(function()
	{
		if($(this).attr('id') == id )
		{
			var node2 = document.getElementById(id);
			node2.setAttribute("class" , "box")
			exit;
		}
		count++;
	});
	if ( count == 2 )
		return;
	var node = document.getElementById(id);
	var text = node.getAttribute("class");
	node.setAttribute("class" ,text+" highlight");
}


function clear1()
{
	document.getElementById('op').innerHTML = "";
	$(".highlight").each(function()
	{
		var id = $(this).attr('id');
		var node3 = document.getElementById(id);
		node3.setAttribute("class","box");
	});
}


function compute()
{
	var count = 0;
	var src;
	var target;
	document.getElementById("op").innerHTML = "";
	$(".highlight").each(function()
	{
		if(count == 0)
			src = $(this).attr('id');
		else
		{
			if(count == 1)
				target = $(this).attr('id');
		}
		count++;
	});
	if ( count != 2 )
		document.getElementById("op").innerHTML = "Please select any 2 nodes";
	else
	{
		var s = src.charAt(src.length - 1);
		var t = target.charAt(target.length - 1);
		src = s + "";
		target = t + "";
		$.post("register/Display.jsp",
    		    { sr: src , tr: target},
    		    function(data){
    		    	document.getElementById("op").innerHTML = data;
    		    	var element = document.getElementById("op");
    		    	var fulltext = element.innerText;
    		    	var arry = fulltext.split(" ");
    		    	var len = arry.length;
    		    	
    		    	disp1(arry[0]);
    		    	
    		    	for ( var i = 1; i < len - 1 ; i++)
    		    	{
    		    		disp2(arry[i], i);
    		    	}
    		    	
    		    });
	}
}

function disp1 (Str)
{
	var flag = false;
	var path = {};
	var c = 0;
	path[c] = Str.charAt(0);
	var dist = "";
	c++;
	
	for ( var i = 1; i < Str.length; i++)
	{
		if( Str.charAt(i) == '_' )
		{
			flag = true;
			continue;
		}
		if( flag == true )
		{
			dist += Str.charAt(i);
		}
		else
		{
			path[c] = Str.charAt(i);
			c++;
			var temp = "box" + Str.charAt(i);
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
	path[c] = Str.charAt(0);
	var dist = "";
	c++;
	var txt = "";
	if ( x == 1)
		txt += "</br>Other paths :"
	for ( var i = 1; i < Str.length; i++)
	{
		if( Str.charAt(i) == '_' )
		{
			flag = true;
			continue;
		}
		if( flag == true )
		{
			dist += Str.charAt(i);
		}
		else
		{
			path[c] = Str.charAt(i);
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
	Node.setAttribute("class" , "box highlight");
}
