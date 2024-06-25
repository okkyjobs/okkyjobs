package com.study.security20240312yeonho.boardDomain.board;

import lombok.Data;

@Data
public class LikeDislike {
    private int userCode;
    private int boardCode;
    private boolean isLiked;
    private boolean isDisliked;
//    private int likeCount;
//    private int dislikeCount;
    
//    public LikeDislike(int likeCount, int dislikeCount) {
//        this.likeCount = likeCount;
//        this.dislikeCount = dislikeCount;
//    }
//    
//    public int getLikeCount() {
//        return likeCount;
//    }
//
//    public void setLikeCount(int likeCount) {
//        this.likeCount = likeCount;
//    }
//
//    public int getDislikeCount() {
//        return dislikeCount;
//    }
//
//    public void setDislikeCount(int dislikeCount) {
//        this.dislikeCount = dislikeCount;
//    }
//    
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

    public void setLiked(boolean isLiked) {
        this.isLiked = isLiked;
    }

    public void setDisliked(boolean isDisliked) {
        this.isDisliked = isDisliked;
    }

    public boolean isLiked() {
        return isLiked;
    }

    public boolean isDisliked() {
        return isDisliked;
    }

}
