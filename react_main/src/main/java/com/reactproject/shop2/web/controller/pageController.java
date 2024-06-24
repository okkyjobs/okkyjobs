package com.reactproject.shop2.web.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.reactproject.shop2.web.dto.CMRespDto;
import com.reactproject.shop2.web.dto.PostReqDto;

@RestController
@RequestMapping("/api")
public class pageController {
	
	@GetMapping("/hello")
	public String hello() {
		return "hi";
	}
	
	@GetMapping("/data")
	public ResponseEntity<?> data(){
		
		List<Map<String, Object>> shoesArray = new ArrayList<Map<String, Object>>();
		Map<String, Object> shoesMap1 = new HashMap<String, Object>();
		Map<String, Object> shoesMap2 = new HashMap<String, Object>();
		Map<String, Object> shoesMap3 = new HashMap<String, Object>();
		
		shoesMap1.put("id", 3);
		shoesMap1.put("title", "Green Shoes");
		shoesMap1.put("content", "only 5 inches");
		shoesMap1.put("price", 120000);
		
		shoesMap2.put("id", 4);
		shoesMap2.put("title", "Pink Shoes");
		shoesMap2.put("content", "only 6 inches");
		shoesMap2.put("price", 130000);
		
		shoesMap3.put("id", 5);
		shoesMap3.put("title", "Black Shoes");
		shoesMap3.put("content", "only 7 inches");
		shoesMap3.put("price", 140000);
		
		shoesArray.add(shoesMap1);
		shoesArray.add(shoesMap2);
		shoesArray.add(shoesMap3);
		
		return ResponseEntity.ok().body(new CMRespDto<>(1, "success", "test"));
	}
	
	@PostMapping("/postData")
	public ResponseEntity<?> postData(@RequestBody PostReqDto postReqDto){
		System.out.println(postReqDto);
		return ResponseEntity.ok().body(new CMRespDto<>(1, "success", postReqDto));
		
	}
}
