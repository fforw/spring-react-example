package com.github.fforw.springreact.config;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.support.SpringBootServletInitializer;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan({
 "com.github.fforw.springreact.config",
 "com.github.fforw.springreact.service"
})
public class ExampleApplication
	extends SpringBootServletInitializer
{

	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
		return application.sources(ExampleApplication.class);
	}

	public static void main(String[] args) {
		SpringApplication.run(ExampleApplication.class, args);
	}
}
