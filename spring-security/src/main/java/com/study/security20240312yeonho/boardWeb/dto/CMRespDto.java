package com.study.security20240312yeonho.boardWeb.dto;

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
}
