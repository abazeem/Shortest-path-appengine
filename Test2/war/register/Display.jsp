<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ page import="java.util.List"%>
<%@ page import="demo.Graph"%>
<%@ page import="demo.ImgGraph"%>
<%@ page import="demo.LoadGraph"%>
<%@ page import="demo.Output"%>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<%@ page import="com.google.appengine.api.users.User" %>
<%@ page import="com.google.appengine.api.users.UserService" %>
<%@ page import="com.google.appengine.api.users.UserServiceFactory" %>

<%
	String SR = request.getParameter("sr");
	String TR = request.getParameter("tr");
	if(SR != "" && TR != "")
	{
//		int s = Integer.parseInt(SR);
//		int t = Integer.parseInt(TR);
		int nodes = 9;
		Graph graph = new Graph(nodes);
		LoadGraph loadg = new LoadGraph();
		graph = loadg.load(graph);
		ImgGraph obj = new ImgGraph();
		String result = obj.implement(graph, SR, TR);	
		out.println(result);
	}
	else
		out.println("");
%>