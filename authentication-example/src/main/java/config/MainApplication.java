package config;

import java.util.Collections;
import java.util.HashSet;
import java.util.Set;

import javax.ws.rs.ApplicationPath;
import javax.ws.rs.core.Application;

import controller.LoginController;


@ApplicationPath("/")
public class MainApplication extends Application {
	
	
	private Set<Class<?>> classes;
	
	public MainApplication() {
		this.classes = new HashSet<>();
		this.classes.add(CorsRequestFilter.class);
		this.classes.add(CorsResponseFilter.class);
		this.classes.add(LoginController.class);
	}
	
	
    public Set<Class<?>> getClasses() {
        return Collections.unmodifiableSet(classes);
    }

}

