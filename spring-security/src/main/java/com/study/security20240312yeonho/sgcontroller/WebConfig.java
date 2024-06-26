package com.study.security20240312yeonho.sgcontroller;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@EnableWebMvc
public class WebConfig implements WebMvcConfigurer {

	@Override
	public void addCorsMappings(CorsRegistry reg) {
		
		reg.addMapping("/**")
		   .allowedOrigins("http://localhost:3000")
		   .allowedMethods("OPTIOIN", "GET", "POST", "PUT", "DELETE");
	}
	
}
