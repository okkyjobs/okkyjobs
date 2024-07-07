package com.study.security20240312yeonho.securityWeb.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class CMRespDto<T> {
	
	private int code;
	private String message;
	private T data;
	private T usernameCheckReqDto;
	private T user;
}
