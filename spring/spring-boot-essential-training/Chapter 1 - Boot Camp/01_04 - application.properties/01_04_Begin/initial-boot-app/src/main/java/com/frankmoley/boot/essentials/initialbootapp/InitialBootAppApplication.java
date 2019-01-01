package com.frankmoley.boot.essentials.initialbootapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
public class InitialBootAppApplication {

	public static void main(String[] args) {
		SpringApplication.run(InitialBootAppApplication.class, args);
	}

	/* Don't embed controllers in your main application in practice! */
	@RestController
	@RequestMapping("/api")
	public class ApiController {

		@GetMapping("/greeting")
		public String getGreeting() {
			return "Hello World from the API";
		}
	}
}
