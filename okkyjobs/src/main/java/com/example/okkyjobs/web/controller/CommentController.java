package com.example.okkyjobs.web.controller;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.okkyjobs.domain.board.Comment;
import com.example.okkyjobs.service.CommentService;
import com.example.okkyjobs.web.dto.CommentDTO;
import com.example.okkyjobs.web.dto.CommentResponse;

@RestController
public class CommentController {

    @Autowired
    private CommentService commentService;

    @PostMapping("/articles/{boardCode}/comment")
    public ResponseEntity<?> createComment(@ModelAttribute("commentDTO") CommentDTO commentDTO) {
    	System.out.println("1");
        boolean createdComment = commentService.createComment(commentDTO);
        System.out.println("2");
        return ResponseEntity.status(HttpStatus.CREATED).body(createdComment);
    }

    @GetMapping("/articles/{boardCode}/comments")
    public ResponseEntity<List<CommentResponse>> getCommentsByBoardCode(@PathVariable int boardCode) {
        List<CommentResponse> comments = commentService.getCommentsByBoardCode(boardCode);
        return new ResponseEntity<>(comments, HttpStatus.OK);
    }
}
