package com.example.okkyjobs.web.dto;
import java.time.LocalDateTime;

import lombok.Data;


@Data
public class CommentCreateRequest {
	private int appliedCode;
    private int userCode;
    private int boardCode;
    private String appliedText;
    private LocalDateTime createDate;
    private LocalDateTime updateDate;
}
