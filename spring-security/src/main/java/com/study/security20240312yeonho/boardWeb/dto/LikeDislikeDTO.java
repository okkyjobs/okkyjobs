package com.study.security20240312yeonho.boardWeb.dto;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class LikeDislikeDTO {
    private int userCode;
    private int boardCode;
    private boolean isLiked;
    private boolean isDisliked;
    private int likeCount;
    private int dislikeCount;


    public LikeDislikeDTO(int userCode, int boardCode, boolean isLiked, boolean isDisliked, int likeCount, int dislikeCount) {
        this.userCode = userCode;
        this.boardCode = boardCode;
        this.isLiked = isLiked;
        this.isDisliked = isDisliked;
        this.likeCount = likeCount;
        this.dislikeCount = dislikeCount;
    }

    public int getUserCode() {
        return userCode;
    }

    public void setUserCode(int userCode) {
        this.userCode = userCode;
    }

    public int getBoardCode() {
        return boardCode;
    }

    public void setBoardCode(int boardCode) {
        this.boardCode = boardCode;
    }

    public boolean isLiked() {
        return isLiked;
    }

    public void setLiked(boolean liked) {
        isLiked = liked;
    }

    public boolean isDisliked() {
        return isDisliked;
    }

    public void setDisliked(boolean disliked) {
        isDisliked = disliked;
    }

    public int getLikeCount() {
        return likeCount;
    }

    public void setLikeCount(int likeCount) {
        this.likeCount = likeCount;
    }

    public int getDislikeCount() {
        return dislikeCount;
    }

    public void setDislikeCount(int dislikeCount) {
        this.dislikeCount = dislikeCount;
    }
}