package com.example.okkyjobs.domain.board;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Board {
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
    
    
    public int getBoardCode() {
        return boardCode;
    }

    public void setBoardCode(int boardCode) {
        this.boardCode = boardCode;
    }

    public int getUserCode() {
        return userCode;
    }

    public void setUserCode(int userCode) {
        this.userCode = userCode;
    }

    public String getBoardTitle() {
        return boardTitle;
    }

    public void setBoardTitle(String boardTitle) {
        this.boardTitle = boardTitle;
    }

    public String getBoardText() {
        return boardText;
    }

    public void setBoardText(String boardText) {
        this.boardText = boardText;
    }

    public String getBoardTag() {
        return boardTag;
    }

    public void setBoardTag(String boardTag) {
        this.boardTag = boardTag;
    }

    public int getBoardView() {
        return boardView;
    }

    public void setBoardView(int boardView) {
        this.boardView = boardView;
    }

    public int getLikeCode() {
        return likeCode;
    }

    public void setLikeCode(int likeCode) {
        this.likeCode = likeCode;
    }
    
    public int getDislikeCode() {
    	return dislikeCode;
    }
    
    public void setDislikeCode(int dislikeCode) {
    	this.dislikeCode = dislikeCode;
    }

    public LocalDateTime getCreateDate() {
        return createDate;
    }

    public void setCreateDate(LocalDateTime createDate) {
        this.createDate = createDate;
    }

    public LocalDateTime getUpdateDate() {
        return updateDate;
    }

    public void setUpdateDate(LocalDateTime updateDate) {
        this.updateDate = updateDate;
    }

    public String getUserNickname() {
        return userNickname;
    }

    public void setUserNickname(String userNickname) {
        this.userNickname = userNickname;
    }
    
}

// 누락, 자료형 실수 있을 수도!!