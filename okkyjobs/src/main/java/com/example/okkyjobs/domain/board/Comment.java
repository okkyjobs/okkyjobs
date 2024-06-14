package com.example.okkyjobs.domain.board;
import lombok.Data;

import java.time.LocalDateTime;

import com.example.okkyjobs.web.dto.CommentDTO;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Data
public class Comment {
    private int appliedCode;
    private int userCode;
    private int boardCode;
    private String appliedText;
    private LocalDateTime createDate;
    private LocalDateTime updateDate;
    

    public static Comment from(CommentDTO commentDTO) {
        Comment comment = new Comment();
        comment.setAppliedCode(commentDTO.getAppliedCode());
        comment.setUserCode(commentDTO.getUserCode());
        comment.setBoardCode(commentDTO.getBoardCode());
        comment.setAppliedText(commentDTO.getAppliedText());
        comment.setCreateDate(commentDTO.getCreateDate());
        comment.setUpdateDate(commentDTO.getUpdateDate());
        return comment;
    }

    public CommentDTO toDTO() {
        CommentDTO commentDTO = new CommentDTO();
        commentDTO.setAppliedCode(getAppliedCode());
        commentDTO.setUserCode(getUserCode());
        commentDTO.setBoardCode(getBoardCode());
        commentDTO.setAppliedText(getAppliedText());
        commentDTO.setCreateDate(getCreateDate());
        commentDTO.setUpdateDate(getUpdateDate());
        return commentDTO;
    }
}