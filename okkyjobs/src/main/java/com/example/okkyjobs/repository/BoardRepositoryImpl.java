//package com.example.okkyjobs.repository;
//
//import java.util.List;
//
//import org.springframework.context.annotation.Primary;
//import org.springframework.jdbc.core.JdbcTemplate;
//import org.springframework.stereotype.Repository;
//
//import com.example.okkyjobs.domain.board.Board;
//import com.example.okkyjobs.domain.board.BoardRepository;
//import com.example.okkyjobs.web.dto.BoardDTO;
//
//@Repository
//@Primary
//public class BoardRepositoryImpl implements BoardRepository {
//    private final JdbcTemplate jdbcTemplate;
//
//    public BoardRepositoryImpl(JdbcTemplate jdbcTemplate) {
//        this.jdbcTemplate = jdbcTemplate;
//    }
//
//    @Override
//    public int addLike(int boardCode, int userCode) {
//        return jdbcTemplate.update(
//            "INSERT INTO like_list (board_code, user_code) VALUES (?, ?)" +
//            "ON DUPLICATE KEY UPDATE user_code = ?" +
//            "DELETE FROM dislike_list WHERE board_code = ? AND user_code = ?",
//            boardCode, userCode, userCode, boardCode, userCode
//        );
//    }
//
//    @Override
//    public int addDislike(int boardCode, int userCode) {
//        return jdbcTemplate.update(
//            "INSERT INTO dislike_list (board_code, user_code) VALUES (?, ?)" +
//            "ON DUPLICATE KEY UPDATE user_code = ?" +
//            "DELETE FROM like_list WHERE board_code = ? AND user_code = ?",
//            boardCode, userCode, userCode, boardCode, userCode
//        );
//    }
//
//    @Override
//    public int toggleLike(int boardCode, int userCode) {
//        return jdbcTemplate.update(
//            "DELETE FROM like_list WHERE board_code = ? AND user_code = ?" +
//            "INSERT INTO like_list (board_code, user_code) VALUES (?, ?)" +
//            "ON DUPLICATE KEY UPDATE user_code = ?",
//            boardCode, userCode, boardCode, userCode, userCode
//        );
//    }
//
//    @Override
//    public int toggleDislike(int boardCode, int userCode) {
//        return jdbcTemplate.update(
//            "DELETE FROM dislike_list WHERE board_code = ? AND user_code = ?" +
//            "INSERT INTO dislike_list (board_code, user_code) VALUES (?, ?)" +
//            "ON DUPLICATE KEY UPDATE user_code = ?",
//            boardCode, userCode, boardCode, userCode, userCode
//        );
//    }
//
//	@Override
//	public List<BoardDTO> selectAllBoards() {
//		// TODO Auto-generated method stub
//		return null;
//	}
//
//	@Override
//	public BoardDTO selectBoardByCode(int boardCode) {
//		// TODO Auto-generated method stub
//		return null;
//	}
//
//	@Override
//	public void save(Board board) {
//		// TODO Auto-generated method stub
//		
//	}
//}