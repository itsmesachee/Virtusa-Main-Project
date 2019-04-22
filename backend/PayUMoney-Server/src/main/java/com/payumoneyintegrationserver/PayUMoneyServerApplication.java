package com.payumoneyintegrationserver;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@SpringBootApplication
public class PayUMoneyServerApplication extends SpringBootServletInitializer {

	private static Class applicationClass = PayUMoneyServerApplication.class;

	public static void main(String[] args) {
		SpringApplication.run(PayUMoneyServerApplication.class, args);
	}

	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
		return application.sources(applicationClass);
	}
}
