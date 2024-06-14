package com.example.okkyjobs;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan(basePackages = "com.example.okkyjobs.domain.board")
public class OkkyjobsApplication {

	public static void main(String[] args) {
		SpringApplication.run(OkkyjobsApplication.class, args);
	}

}
