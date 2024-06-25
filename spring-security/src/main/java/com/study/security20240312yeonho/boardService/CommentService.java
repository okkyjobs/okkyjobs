package com.study.security20240312yeonho.boardService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.study.security20240312yeonho.boardDomain.board.Comment;
import com.study.security20240312yeonho.boardDomain.board.CommentRepository;
import com.study.security20240312yeonho.boardWeb.dto.CommentDTO;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class CommentService {

    @Autowired
    private CommentRepository commentRepository;
    private Comment comment;
    private CommentDTO commentDto;
    
    public void createComment(Comment comment) {
        commentRepository.save(comment);
    }
    

//    public List<CommentResponse> getCommentsByBoardCode(int boardCode) {
//        List<Comment> comments = commentRepository.getCommentsByBoardCode(boardCode);
//        List<CommentResponse> commentResponses = new ArrayList<>();
//        for (Comment comment : comments) {
////            CommentDTO commentDTO = comment.toDTO();
////            CommentResponse commentResponse = new CommentResponse(commentDTO);
////            commentResponses.add(commentResponse);
//        }
//        return commentResponses;
//    }
}