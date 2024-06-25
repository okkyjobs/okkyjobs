package com.study.security20240312yeonho.boardWeb.controller;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.study.security20240312yeonho.boardService.LikeDislikeService;
import com.study.security20240312yeonho.boardWeb.dto.LikeDislikeCreateRequest;



//import com.example.okkyjobs.service.LikeDisLikeService;

@RestController
@RequestMapping("/articles/{boardCode}")
public class LikeDislikeController {
    private final LikeDislikeService likeDislikeService;

    public LikeDislikeController(LikeDislikeService likeDislikeService) {
        this.likeDislikeService = likeDislikeService;
    }

    @PostMapping("/like")
    public void toggleLike(@PathVariable("boardCode") int boardCode, @RequestBody LikeDislikeCreateRequest request) {
        likeDislikeService.toggleLike(request.getUserCode(), boardCode);
    }

    @PostMapping("/dislike")
    public void toggleDislike(@PathVariable("boardCode") int boardCode, @RequestBody LikeDislikeCreateRequest request) {
        likeDislikeService.toggleDislike(request.getUserCode(), boardCode);
    }

    @DeleteMapping("/like")
    public void deleteLike(@PathVariable("boardCode") int boardCode, @RequestBody LikeDislikeCreateRequest request) {
        likeDislikeService.deleteLikeDislike(request.getUserCode(), boardCode);
    }

    @DeleteMapping("/dislike")
    public void deleteDislike(@PathVariable("boardCode") int boardCode, @RequestBody LikeDislikeCreateRequest request) {
        likeDislikeService.deleteLikeDislike(request.getUserCode(), boardCode);
    }    
    //-----------------------------------------------//
//
//    private final BoardRepository boardRepository;
//    private final LikeDislikeRepository likeDislikeRepository;
//
//    public LikeDislikeController(BoardRepository boardRepository, LikeDislikeRepository likeDislikeRepository) {
//        this.boardRepository = boardRepository;
//        this.likeDislikeRepository = likeDislikeRepository;
//    }
//	
//	@PostMapping("/like")
//	public ResponseEntity<BoardDTO> like(@PathVariable int boardCode) {
//	    BoardDTO boardDto = boardRepository.selectBoardByCode(boardCode);
//	    if (boardDto == null) {
//	        return ResponseEntity.notFound().build();
//	    }
//	    boardDto.setLikeCode(boardDto.getLikeCode() + 1);
//	    BoardDTO savedBoard = boardRepository.save(boardRepository.toEntity(boardDto));
//	    return ResponseEntity.ok(boardRepository.toDto(savedBoard));
//	}
//	
//	@PostMapping("/dislike")
//	public ResponseEntity<BoardDTO> dislike(@PathVariable int boardCode) {
//		BoardDTO boardDto = boardRepository.selectBoardByCode(boardCode);
//	    if (boardDto == null) {
//	        return ResponseEntity.notFound().build();
//	    }
//	    boardDto.setDislikeCode(boardDto.getDislikeCode() + 1);
//	    BoardDTO savedBoard = boardRepository.save(boardRepository.toEntity(boardDto));
//	    return ResponseEntity.ok(boardRepository.toDto(savedBoard));
//	}
}