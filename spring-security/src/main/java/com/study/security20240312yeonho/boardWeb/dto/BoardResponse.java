package com.study.security20240312yeonho.boardWeb.dto;
import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class BoardResponse {
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

}
