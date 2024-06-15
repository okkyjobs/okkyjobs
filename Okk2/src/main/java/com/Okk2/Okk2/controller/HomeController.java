package com.Okk2.Okk2.controller;

import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.Okk2.Okk2.mapper.Office_Mapper;

@RestController
public class HomeController {
	
	@Autowired
	private Office_Mapper mapper;
	
	@PostMapping("/Okky2/office_code")
	public String join(@RequestParam HashMap<String, Object> map) {
		mapper.join(map);
		return "/Okky3_1";
	}    //1 
	
	

}
