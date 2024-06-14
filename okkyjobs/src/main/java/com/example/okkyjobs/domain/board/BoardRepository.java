package com.example.okkyjobs.domain.board;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.example.okkyjobs.web.dto.BoardDTO;


@Mapper
public interface BoardRepository {
	
	List<BoardDTO> selectAllBoards();
    BoardDTO selectBoardByCode(int boardCode);
    BoardDTO save(Board board);
    void updateLikeCode(BoardDTO boardDto);
    void updateDislikeCode(BoardDTO boardDto);
	Board toEntity(BoardDTO boardDto);
	BoardDTO toDto(BoardDTO savedBoard);
}
