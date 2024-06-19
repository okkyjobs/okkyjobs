package com.example.okkyjobs.web.dto;

import java.time.LocalDateTime;

import com.example.okkyjobs.domain.board.Comment;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CommentResponse {
    private int appliedCode;
    private int userCode;
    private int boardCode;
    private String appliedText;
    private LocalDateTime createDate;
    private LocalDateTime updateDate;

    public CommentResponse(CommentDTO commentDTO) {
        this.appliedCode = commentDTO.getAppliedCode();
        this.userCode = commentDTO.getUserCode();
        this.boardCode = commentDTO.getBoardCode();
        this.appliedText = commentDTO.getAppliedText();
        this.createDate = commentDTO.getCreateDate();
        this.updateDate = commentDTO.getUpdateDate();
    }
    


//	public CommentResponse(Comment savedComment) {
//		// TODO Auto-generated constructor stub
//	}
}
