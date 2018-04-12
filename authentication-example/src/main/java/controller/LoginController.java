package controller;



import java.security.Principal;

import javax.inject.Inject;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;

import bean.LoginBean;
import service.AuthenticationService;

@Path("/authenticate")
public class LoginController {

	@Inject
	AuthenticationService service;
	
	@GET
	@Path("/sayHello")
	public String sayHello(@Context HttpServletRequest request) throws ServletException {
		
		System.out.println("Rest fired");
		
		//service.authenticate();
		
		request.login("SFCC", "SFCC");
		Principal principal = request.getUserPrincipal();
		// GenericPrincipal genericPrincipal = request.getUserPrincipal();
		//org.apache.catalina.realm 
		
		
		return "<h1>Hello World</h1>";
	}

	@GET
	@Path("/user")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public LoginBean authenticate(LoginBean login) {

		System.out.println("Login : " + login.getName() + " ; " + login.getPassword());

		return new LoginBean();
	}

	// @GET
	// @Path("/")
	// @Produces({MediaType.TEXT_PLAIN})
	// public Response index() {
	// return Response
	// .status(200)
	// .header("Access-Control-Allow-Origin", "*")
	// .header("Access-Control-Allow-Credentials", "true")
	// .header("Access-Control-Allow-Headers",
	// "origin, content-type, accept, authorization")
	// .header("Access-Control-Allow-Methods",
	// "GET, POST, PUT, DELETE, OPTIONS, HEAD")
	// .entity("")
	// .build();
	// }
}
