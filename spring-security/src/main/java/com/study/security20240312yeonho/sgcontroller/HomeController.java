package com.study.security20240312yeonho.sgcontroller;

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

import com.study.security20240312yeonho.sgDto.CMRespDto;
import com.study.security20240312yeonho.sgservice.officeService;
import com.study.security20240312yeonho.sgservice.officeServiceImpl;

import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;

@RestController //컨트롤러랑 리스펜스 바디 합친거
@RequiredArgsConstructor
@RequestMapping("/api")
public class HomeController {
	
	private final officeService officeService;
	
	
	@PostMapping("/dataInput")
	public ResponseEntity<?> dataInput(@ModelAttribute("officeInfoReqDto") com.study.security20240312yeonho.sgDto.officeInfoReqDto officeInfoReqDto) {
	
		try {
			officeService.dataInputService(officeInfoReqDto);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	
		return ResponseEntity.ok().body(new CMRespDto<>(1, "성공", officeServiceDto));
	}

}
