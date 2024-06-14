package com.example.okkyjobs.web.dto;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class LikeDislikeRespons {
    private int userCode;
    private int boardCode;
    private boolean isLiked;
    private boolean isDisliked;
    private int likeCount;
    private int dislikeCount;
}
