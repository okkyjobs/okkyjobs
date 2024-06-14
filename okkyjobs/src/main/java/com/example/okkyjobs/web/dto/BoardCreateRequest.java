package com.example.okkyjobs.web.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class BoardCreateRequest {
	private String boardTitle;
	private String boardText;
	private String boardTag;

}
