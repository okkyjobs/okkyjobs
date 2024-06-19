package com.example.okkyjobs.domain.board;


import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.example.okkyjobs.web.dto.BoardDTO;
import com.example.okkyjobs.web.dto.CommentDTO;

@Mapper
public interface CommentRepository {
    boolean createComment() throws Exception;
    List<Comment> getCommentsByBoardCode(int boardCode);
    CommentDTO save(Comment comment);
}