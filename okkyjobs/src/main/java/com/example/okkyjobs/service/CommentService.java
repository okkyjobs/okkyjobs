package com.example.okkyjobs.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.okkyjobs.domain.board.Comment;
import com.example.okkyjobs.domain.board.CommentRepository;
import com.example.okkyjobs.web.dto.CommentDTO;
import com.example.okkyjobs.web.dto.CommentResponse;

import java.util.ArrayList;
import java.util.List;

@Service
public class CommentService {

    @Autowired
    private CommentRepository commentRepository;


    public boolean createComment(CommentDTO commentDTO) {
        Comment comment = Comment.from(commentDTO);
        Comment savedComment = commentRepository.createComment(comment);
        System.out.println(savedComment);
//        return new CommentResponse(savedComment);
        return true;
    }

    public List<CommentResponse> getCommentsByBoardCode(int boardCode) {
        List<Comment> comments = commentRepository.getCommentsByBoardCode(boardCode);
        List<CommentResponse> commentResponses = new ArrayList<>();
        for (Comment comment : comments) {
            CommentDTO commentDTO = comment.toDTO();
            CommentResponse commentResponse = new CommentResponse(commentDTO);
            commentResponses.add(commentResponse);
        }
        return commentResponses;
    }
}