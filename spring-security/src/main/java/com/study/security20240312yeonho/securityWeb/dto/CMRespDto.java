package com.study.security20240312yeonho.securityWeb.dto;

import com.study.security20240312yeonho.securityDomain.user.User;

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
	private UsernameCheckReqDto usernameCheckReqDto;
	private User user;
}
