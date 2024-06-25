package com.study.security20240312yeonho.boardService;


import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.study.security20240312yeonho.boardDomain.board.Board;
import com.study.security20240312yeonho.boardDomain.board.BoardRepository;
import com.study.security20240312yeonho.boardWeb.dto.BoardDTO;



@Service
public class BoardService {

    private final BoardRepository boardRepository;
    
//    private BoardDTO board;
    
    
    @Autowired
    public BoardService(BoardRepository boardRepository) {
        this.boardRepository = boardRepository;
    }

    public void createBoard(Board board) {
        // 일단 boardRepository의 save 메소드 호출
        boardRepository.save(board);
    }

    public List<BoardDTO> selectAllBoards() {
        return boardRepository.selectAllBoards();
    }

    public BoardDTO selectBoardByCode(int boardCode) {
        return boardRepository.selectBoardByCode(boardCode);
    }
    
    
    
    
    public BoardDTO updateBoard(int boardCode, BoardDTO updatedBoard) {
        BoardDTO updatedBoardDto = boardRepository.updateBoardByCode(boardCode, updatedBoard.getBoardTitle(), updatedBoard.getBoardText(), updatedBoard.getBoardTag());
        if (updatedBoardDto == null) {
            return null;
        }
        return updatedBoardDto;
    }

    
    

//    public void toggleLike(int boardCode) {
//        BoardDTO boardDto = boardRepository.selectBoardByCode(boardCode);
//
//        // 좋아요 처리 로직
//        if (boardDto.getLikeCode() == 0) {
//        	boardDto.setLikeCode(1); // 좋아요 추가
//        } else {
//        	boardDto.setLikeCode(boardDto.getLikeCode() + 1); // 좋아요 취소
//        }
//        
//        boardRepository.updateLikeCode(boardDto);
//
//    }
//
//    public void toggleDislike(int boardCode) {
//    	BoardDTO boardDto = boardRepository.selectBoardByCode(boardCode);
//
//        if (boardDto.getDislikeCode() == 0) {
//        	boardDto.setDislikeCode(1);
//        } else {
//        	boardDto.setDislikeCode(boardDto.getDislikeCode() + 1);
//        }
//
//        boardRepository.updateDislikeCode(boardDto);
//    }
//    
//    public List<BoardDTO> selectBoardByCode(int boardCode) {
//    	return boardRepository.selectBoardByCode();
//    }
    
//    public BoardDTO selectBoardByCode(int boardCode) {
//        // 보드 코드를 사용하여 BoardDTO 객체를 조회하는 로직을 구현합니다.
//        // 예시로, DAO를 호출하는 코드를 작성할 수 있습니다.
//        return boardDAO.selectBoardByCode(boardCode);
//    }
    
//    public List<BoardDTO> selectAllBoards() {
//    	// BoardRepository가 List<BoardDTO> selectAllBoards(); 일 때는 아래 줄에 에러 안 났음
//        List<Board> boards = boardRepository.selectAllBoards();
////        return boards.stream()
////        		.filter(board -> board != null)
////        		.map(board -> {
////            BoardDto dto = new BoardDto();
////            dto.setBoardCode(board.getBoardCode());
////            dto.setUserCode(board.getUserCode());
////            dto.setBoardTitle(board.getBoardTitle());
////            dto.setBoardText(board.getBoardText());
////            dto.setBoardTag(board.getBoardTag());
////            dto.setBoardView(board.getBoardView());
////            dto.setLikeCode(board.getLikeCode());
////            dto.setCreateDate(board.getCreateDate());
////            dto.setUpdateDate(board.getUpdateDate());
////            dto.setUserNickname(board.getUserNickname());
////            return dto;
////        }).collect(Collectors.toList());
//        
//        // 아래 4줄로 간소화
//        
//        
//        return boards.stream()
//                .filter(board -> board != null)
//                .map(BoardDTO::new)
//                .collect(Collectors.toList());
//    }
}