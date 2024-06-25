package com.study.security20240312yeonho.boardService;

//import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.study.security20240312yeonho.boardDomain.board.LikeDislike;
import com.study.security20240312yeonho.boardDomain.board.LikeDislikeRepository;



@Service
public class LikeDislikeService {
    private final LikeDislikeRepository likeDislikeRepository;

    public LikeDislikeService(LikeDislikeRepository likeDislikeRepository) {
        this.likeDislikeRepository = likeDislikeRepository;
    }

    private LikeDislike getOrCreateLikeDislike(int userCode, int boardCode) {
        LikeDislike likeDislike = likeDislikeRepository.findByUserCodeAndBoardCode(userCode, boardCode);
        if (likeDislike == null) {
            likeDislike = new LikeDislike();
            likeDislike.setUserCode(userCode);
            likeDislike.setBoardCode(boardCode);
        }
        return likeDislike;
    }

    public void toggleLike(int userCode, int boardCode) {
        LikeDislike likeDislike = getOrCreateLikeDislike(userCode, boardCode);
        likeDislike.setLiked(!likeDislike.isLiked());
        likeDislike.setDisliked(false);
        likeDislikeRepository.save(likeDislike);
    }

    public void toggleDislike(int userCode, int boardCode) {
        LikeDislike likeDislike = getOrCreateLikeDislike(userCode, boardCode);
        likeDislike.setDisliked(!likeDislike.isDisliked());
        likeDislike.setLiked(false);
        likeDislikeRepository.save(likeDislike);
    }

    public void deleteLikeDislike(int userCode, int boardCode) {
        likeDislikeRepository.deleteByUserCodeAndBoardCode(userCode, boardCode);
    }
    
//    private final LikeDislikeRepository likeDislikeRepository;
//
//    public LikeDislikeService(LikeDislikeRepository likeDislikeRepository) {
//        this.likeDislikeRepository = likeDislikeRepository;
//    }
//
//    public void toggleLike(int userCode, int boardCode) {
//        LikeDislike likeDislike = likeDislikeRepository.selectByUserCodeAndBoardCode(userCode, boardCode);
//
//        if (likeDislike == null) {
//            likeDislike = new LikeDislike();
//            likeDislike.setUserCode(userCode);
//            likeDislike.setBoardCode(boardCode);
//            likeDislike.setLikeStatus(true);
//            likeDislike.setDislikeStatus(false);
//            likeDislikeRepository.insert(likeDislike);
//        } else {
//            likeDislike.setLikeStatus(!likeDislike.getLikeStatus());
//            likeDislike.setDislikeStatus(false);
//            likeDislikeRepository.update(likeDislike);
//        }
//    }
//
//    public void toggleDislike(int userCode, int boardCode) {
//        LikeDislike likeDislike = likeDislikeRepository.selectByUserCodeAndBoardCode(userCode, boardCode);
//
//        if (likeDislike == null) {
//            likeDislike = new LikeDislike();
//            likeDislike.setUserCode(userCode);
//            likeDislike.setBoardCode(boardCode);
//            likeDislike.setLikeStatus(false);
//            likeDislike.setDislikeStatus(true);
//            likeDislikeRepository.insert(likeDislike);
//        } else {
//            likeDislike.setDislikeStatus(!likeDislike.getDislikeStatus());
//            likeDislike.setLikeStatus(false);
//            likeDislikeRepository.update(likeDislike);
//        }
//    }
}