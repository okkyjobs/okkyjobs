package com.Okk2.Okk2.Dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@NoArgsConstructor
@AllArgsConstructor
@Data
public class CMRespDto<T> {

	
	private int code;
	private String massage;
	private T data;
}
