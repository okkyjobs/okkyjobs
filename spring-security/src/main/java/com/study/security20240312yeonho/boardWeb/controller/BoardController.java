package com.study.security20240312yeonho.boardWeb.controller;


import java.util.List;
import java.util.stream.Collectors;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.study.security20240312yeonho.boardDomain.board.Board;
import com.study.security20240312yeonho.boardService.BoardService;
import com.study.security20240312yeonho.boardWeb.dto.BoardCreateRequest;
import com.study.security20240312yeonho.boardWeb.dto.BoardDTO;
import com.study.security20240312yeonho.boardWeb.dto.BoardResponse;



@RestController
public class BoardController {
	
    private final BoardService boardService;
    
    public BoardController(BoardService boardService) {
        this.boardService = boardService;
    }

    @PostMapping("/evalcom/new")
    public ResponseEntity<BoardResponse> createBoard(@RequestBody BoardCreateRequest request) {
        // 데이터베이스 연동 코드를 추가
        
        Board board = Board.builder()
                .boardTitle(request.getBoardTitle())
                .boardText(request.getBoardText())
                .boardTag(request.getBoardTag())
                // 기타 등등
                .build();
        
        // board를 데이터베이스에 저장하는 로직을 구현해야 함.
        
        boardService.createBoard(board);

        
        BoardResponse boardResponse = new BoardResponse(
                board.getBoardCode(),
                board.getUserCode(),
                board.getBoardTitle(),
                board.getBoardText(),
                board.getBoardTag(),
                board.getBoardView(),
                board.getLikeCode(),
                board.getDislikeCode(),
                board.getCreateDate(),
                board.getUpdateDate(),
                board.getUserNickname()
        );
        return ResponseEntity.status(HttpStatus.CREATED).body(boardResponse);

    }
    
    @GetMapping("/evalcom")
    public List<BoardResponse> getAllBoards() {
        List<BoardDTO> boardDtos = boardService.selectAllBoards();

        // 조회된 게시글 목록을 BoardResponse 객체 리스트로 변환
        return boardDtos.stream()
                .map(boardDto -> new BoardResponse(
                        boardDto.getBoardCode(),
                        boardDto.getUserCode(),
                        boardDto.getBoardTitle(),
                        boardDto.getBoardText(),
                        boardDto.getBoardTag(),
                        boardDto.getBoardView(),
                        boardDto.getLikeCode(),
                        boardDto.getDislikeCode(),
                        boardDto.getCreateDate(),
                        boardDto.getUpdateDate(),
                        boardDto.getUserNickname()
                ))
                .collect(Collectors.toList());
    }
    
    
    
    @GetMapping("/articles/{boardCode}")
    public ResponseEntity<BoardResponse> getBoardByCode(@PathVariable("boardCode") int boardCode) {
        BoardDTO boardDTO = boardService.selectBoardByCode(boardCode);

        BoardResponse boardResponse = new BoardResponse(
                boardDTO.getBoardCode(),
                boardDTO.getUserCode(),
                boardDTO.getBoardTitle(),
                boardDTO.getBoardText(),
                boardDTO.getBoardTag(),
                boardDTO.getBoardView(),
                boardDTO.getLikeCode(),
                boardDTO.getDislikeCode(),
                boardDTO.getCreateDate(),
                boardDTO.getUpdateDate(),
                boardDTO.getUserNickname()
//                boardDTO.getCommentCount()
        );

        return ResponseEntity.ok(boardResponse);
    }
    
    
    @PutMapping("/articles/{boardCode}/edit")
    public ResponseEntity<BoardDTO> updateBoard(@PathVariable("boardCode") int boardCode, @RequestBody BoardDTO updatedBoard) {
        BoardDTO boardDTO = boardService.updateBoard(boardCode, updatedBoard);
        if (boardDTO == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(boardDTO);
    }
    
//    @PutMapping("/articles/{boardCode}/edit")
//    public ResponseEntity<BoardResponse> updateBoard(@PathVariable("boardCode") int boardCode, @RequestBody BoardUpdateRequest request) {
//        Board board = Board.builder()
//                .boardCode(boardCode)
//                .boardTitle(request.getBoardTitle())
//                .boardText(request.getBoardText())
//                .boardTag(request.getBoardTag())
//                .build();
//
//        boardService.updateBoard(board);
//
//        BoardDTO updatedBoardDTO = boardService.selectBoardByCode(boardCode);
//        BoardResponse updatedBoardResponse = new BoardResponse(
//                updatedBoardDTO.getBoardCode(),
//                updatedBoardDTO.getUserCode(),
//                updatedBoardDTO.getBoardTitle(),
//                updatedBoardDTO.getBoardText(),
//                updatedBoardDTO.getBoardTag(),
//                updatedBoardDTO.getBoardView(),
//                updatedBoardDTO.getLikeCode(),
//                updatedBoardDTO.getDislikeCode(),
//                updatedBoardDTO.getCreateDate(),
//                updatedBoardDTO.getUpdateDate(),
//                updatedBoardDTO.getUserNickname()
//        );
//
//        return ResponseEntity.ok(updatedBoardResponse);
//    }

//
//    @PutMapping("/articles/{boardCode}")
//    public ResponseEntity<BoardResponse> updateBoardDislike(@PathVariable("boardCode") int boardCode, @RequestParam("userCode") int userCode, @RequestParam("isCancel") boolean isCancel) {
//        BoardDTO boardDTO = boardService.updateBoardDislike(boardCode, userCode, isCancel);
//
//        BoardResponse boardResponse = new BoardResponse(
//                boardDTO.getBoardCode(),
//                boardDTO.getUserCode(),
//                boardDTO.getBoardTitle(),
//                boardDTO.getBoardText(),
//                boardDTO.getBoardTag(),
//                boardDTO.getBoardView(),
//                boardDTO.getLikeCode(),
//                boardDTO.getDislikeCode(),
//                boardDTO.getCreateDate(),
//                boardDTO.getUpdateDate(),
//                boardDTO.getUserNickname()
//        );
//
//        return ResponseEntity.ok(boardResponse);
//    }
    
//    @GetMapping("/articles/{boardCode}")
//    public ResponseEntity<BoardResponse> getBoardByCode(@PathVariable int boardCode) {
//        BoardDTO boardDto = boardService.selectBoardByCode(boardCode);
//        if (boardDto != null) {
//            BoardResponse boardResponse = new BoardResponse(
//                    boardDto.getBoardCode(),
//                    boardDto.getUserCode(),
//                    boardDto.getBoardTitle(),
//                    boardDto.getBoardText(),
//                    boardDto.getBoardTag(),
//                    boardDto.getBoardView(),
//                    boardDto.getLikeCode(),
//                    boardDto.getCreateDate(),
//                    boardDto.getUpdateDate(),
//                    boardDto.getUserNickname()
//            );
//            return ResponseEntity.ok(boardResponse);
//        } else {
//            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
//        }
//    }
    
//    @GetMapping("/articles/{boardCode}")
//    public List<BoardResponse> getBoardByCode() {
//    	List<BoardDTO> boardDtos = boardService.selectAllBoards();
//    	
//    	// 조회된 게시글 목록을 BoardResponse 객체 리스트로 변환
//    	return boardDtos.stream()
//    			.map(boardDto -> new BoardResponse(
//    					boardDto.getBoardCode(),
//    					boardDto.getUserCode(),
//    					boardDto.getBoardTitle(),
//    					boardDto.getBoardText(),
//    					boardDto.getBoardTag(),
//    					boardDto.getBoardView(),
//    					boardDto.getLikeCode(),
//    					boardDto.getCreateDate(),
//    					boardDto.getUpdateDate(),
//    					boardDto.getUserNickname()
//    					))
//    			.collect(Collectors.toList());
//    }
    
    

//    @GetMapping("/articles/{boardCode}")
//    public ResponseEntity<BoardResponse> getBoardByCode(@PathVariable int boardCode) {
//        BoardDTO boardDto = boardService.selectBoardByCode(boardCode);
//        if (boardDto != null) {
//            BoardResponse boardResponse = new BoardResponse(
//                    boardDto.getBoardCode(),
//                    boardDto.getUserCode(),
//                    boardDto.getBoardTitle(),
//                    boardDto.getBoardText(),
//                    boardDto.getBoardTag(),
//                    boardDto.getBoardView(),
//                    boardDto.getLikeCode(),
//                    boardDto.getCreateDate(),
//                    boardDto.getUpdateDate(),
//                    boardDto.getUserNickname()
//            );
//            return ResponseEntity.ok(boardResponse);
//        } else {
//            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
//        }
//    }
}