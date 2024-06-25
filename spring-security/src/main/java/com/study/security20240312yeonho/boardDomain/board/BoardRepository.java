package com.study.security20240312yeonho.boardDomain.board;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.study.security20240312yeonho.boardWeb.dto.BoardDTO;




@Mapper
public interface BoardRepository {
	
	List<BoardDTO> selectAllBoards();
    BoardDTO selectBoardByCode(int boardCode);
    BoardDTO save(Board board);
    void updateLikeCode(BoardDTO boardDto);
    void updateDislikeCode(BoardDTO boardDto);
	Board toEntity(BoardDTO boardDto);
	BoardDTO toDto(BoardDTO savedBoard);
	BoardDTO updateBoardByCode(@Param("boardCode") int boardCode, @Param("boardTitle") String boardTitle, @Param("boardText") String boardText, @Param("boardTag") String boardTag);
//	int updateBoardByCode(int boardCode, String boardTitle, String boardText, String boardTag);
//	BoardDTO updateBoard(int boardCode, String boardTitle, String boardText, String boardTag);
}
