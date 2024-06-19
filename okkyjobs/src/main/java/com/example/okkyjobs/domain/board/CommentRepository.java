package com.example.okkyjobs.domain.board;


import java.util.List;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface CommentRepository {
	Comment createComment(Comment comment);
    List<Comment> getCommentsByBoardCode(int boardCode);
}