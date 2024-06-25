package com.study.security20240312yeonho.boardDomain.board;


import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.study.security20240312yeonho.boardWeb.dto.CommentDTO;



@Mapper
public interface CommentRepository {
    boolean createComment() throws Exception;
    List<Comment> getCommentsByBoardCode(int boardCode);
    CommentDTO save(Comment comment);
}