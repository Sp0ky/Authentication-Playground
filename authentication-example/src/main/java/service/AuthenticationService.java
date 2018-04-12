package service;

import java.security.Principal;

import javax.annotation.Resource;
import javax.ejb.SessionContext;
import javax.ejb.Stateless;

@Stateless
public class AuthenticationService {

	// Inject the Session Context
	@Resource
	private SessionContext ctx;
	
	
	public void authenticate() {
		
		ctx.getEnvironment();
		
//		ctx.get 
//		System.out.println(principal.toString());
	}
	
	
	
}
