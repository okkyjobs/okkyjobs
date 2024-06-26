package com.Okk2.Okk2.controller;

import java.util.HashMap;

import javax.naming.Binding;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.Okk2.Okk2.Dto.CMRespDto;
import com.Okk2.Okk2.Dto.officeInfoReqDto;
import com.Okk2.Okk2.mapper.Office_Mapper;
import com.Okk2.Okk2.service.officeService;

import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;

@RestController //컨트롤러랑 리스펜스 바디 합친거
@RequiredArgsConstructor
@RequestMapping("/api")
public class HomeController {
	
	private final officeService service;
	
	
	@PostMapping("/dataInput")
	public ResponseEntity<?> dataInput(@ModelAttribute("officeInfoReqDto") officeInfoReqDto officeInfoReqDto) {
	
		try {
			service.dataInputService(officeInfoReqDto);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	
		return ResponseEntity.ok().body(new CMRespDto<>(1, "성공", officeInfoReqDto));
	}

}
