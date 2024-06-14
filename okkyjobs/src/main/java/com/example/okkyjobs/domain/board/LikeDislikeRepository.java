package com.example.okkyjobs.domain.board;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface LikeDislikeRepository {
    LikeDislike findByUserCodeAndBoardCode(int userCode, int boardCode);
    void save(LikeDislike likeDislike);
    void deleteByUserCodeAndBoardCode(int userCode, int boardCode);


//    LikeDislike selectByUserCodeAndBoardCode(int userCode, int boardCode);
//    void insert(LikeDislike likeDislike);
//    void update(LikeDislike likeDislike);
}
