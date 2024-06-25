package com.study.security20240312yeonho.boardWeb.dto;

import lombok.Data;

@Data
public class BoardCreateRequest {
	private String boardTitle;
	private String boardText;
	private String boardTag;

}
