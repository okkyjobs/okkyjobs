package com.example.okkyjobs.web.controller;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.okkyjobs.domain.board.Board;
import com.example.okkyjobs.domain.board.Comment;
import com.example.okkyjobs.service.CommentService;
import com.example.okkyjobs.web.dto.BoardResponse;
import com.example.okkyjobs.web.dto.CMRespDto;
import com.example.okkyjobs.web.dto.CommentCreateRequest;
import com.example.okkyjobs.web.dto.CommentDTO;
import com.example.okkyjobs.web.dto.CommentResponse;

@RestController
public class CommentController {

    @Autowired
    private CommentService commentService;

    @PostMapping("/articles/{boardCode}/comment")
    public ResponseEntity<?> createComment(@RequestBody CommentCreateRequest commentCreateRequest) {
        System.out.println(commentCreateRequest);

        Comment comment = Comment.builder()
        		
//        		.appliedCode(commentCreateRequest.getAppliedCode())
                .userCode(commentCreateRequest.getUserCode())
                .boardCode(commentCreateRequest.getBoardCode())
                .appliedText(commentCreateRequest.getAppliedText())
                .createDate(commentCreateRequest.getCreateDate())
                .updateDate(commentCreateRequest.getUpdateDate())
                .build();

        commentService.createComment(comment);

        CommentResponse commentResponse = new CommentResponse(
                comment.getAppliedCode(),
                comment.getUserCode(),
                comment.getBoardCode(),
                comment.getAppliedText(),
                comment.getCreateDate(),
                comment.getUpdateDate()
        );

        return ResponseEntity.ok().body(new CMRespDto<>(1, "댓글 성공", null));
    }


//    @GetMapping("/articles/{boardCode}/comments")
//    public ResponseEntity<List<CommentResponse>> getCommentsByBoardCode(@PathVariable int boardCode) {
//        List<CommentResponse> comments = commentService.getCommentsByBoardCode(boardCode);
//        return new ResponseEntity<>(comments, HttpStatus.OK);
//    }
}
