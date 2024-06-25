package com.study.security20240312yeonho.boardWeb.dto;

import java.time.LocalDateTime;

import com.study.security20240312yeonho.boardDomain.board.Board;

import lombok.NoArgsConstructor;
import lombok.Data;

@Data
@NoArgsConstructor
public class BoardDTO {
    
    private int boardCode;
    private int userCode;
    private String boardTitle;
    private String boardText;
    private String boardTag;
    private int boardView;
    private int likeCode;
    private int dislikeCode;
    private LocalDateTime createDate;
    private LocalDateTime updateDate;
    private String userNickname;
//    private int commentCount;
    
    public String getUserNickname() {
        return userNickname;
    }

    public void setUserNickname(String userNickname) {
        this.userNickname = userNickname;
    }

    public BoardDTO(Board board) {
        this.boardCode = board.getBoardCode();
        this.userCode = board.getUserCode();
        this.boardTitle = board.getBoardTitle();
        this.boardText = board.getBoardText();
        this.boardTag = board.getBoardTag();
        this.boardView = board.getBoardView();
        this.likeCode = board.getLikeCode();
        this.dislikeCode = board.getDislikeCode();
        this.createDate = board.getCreateDate();
        this.updateDate = board.getUpdateDate();
        this.userNickname = board.getUserNickname();
//        this.commentCount = board.getCommentCount();
    }
}