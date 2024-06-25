package com.study.security20240312yeonho.boardWeb.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.study.security20240312yeonho.boardDomain.board.Comment;
import com.study.security20240312yeonho.boardService.CommentService;
import com.study.security20240312yeonho.boardWeb.dto.CMRespDto;
import com.study.security20240312yeonho.boardWeb.dto.CommentCreateRequest;
import com.study.security20240312yeonho.boardWeb.dto.CommentResponse;



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
