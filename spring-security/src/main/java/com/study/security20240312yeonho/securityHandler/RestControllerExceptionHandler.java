package com.study.security20240312yeonho.securityHandler;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestController;

import com.study.security20240312yeonho.securityHandler.exception.CustomValidationApiException;
import com.study.security20240312yeonho.securityWeb.dto.CMRespDto;



@RestController
@ControllerAdvice
public class RestControllerExceptionHandler {
	
	@ExceptionHandler(CustomValidationApiException.class)
	public ResponseEntity<?> validationApiException(CustomValidationApiException e) {
		return ResponseEntity.badRequest().body(new CMRespDto<>(-1, e.getMessage() + "hi", e.getErrorMap(),null,null));
	}
}









