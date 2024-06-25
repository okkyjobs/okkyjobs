package com.study.security20240312yeonho.boardWeb.dto;

import java.time.LocalDateTime;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
@AllArgsConstructor
public class CommentDTO {
    private int appliedCode;
    private int userCode;
    private int boardCode;
    private String appliedText;
    private LocalDateTime createDate;
    private LocalDateTime updateDate;
    
//    public CommentDTO(Comment comment) {
//    	this.appliedCode = comment.getAppliedCode();
//        this.userCode = comment.getUserCode();
//        this.boardCode = comment.getBoardCode();
//        this.appliedText = comment.getAppliedText();
//        this.createDate = comment.getCreateDate();
//        this.updateDate = comment.getUpdateDate();
//
//    }
    
}
