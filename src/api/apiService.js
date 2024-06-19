import axios from 'axios';

export const createBoard = async (boardData) => {
    try {
        const response = await axios.post('http://localhost:8000/evalcom/new', boardData);
        console.log(response.data);
    } catch (error) {
        console.error('게시판 생성 중 오류 발생:', error);
    }
};

export const putArticle = async (boardCode, { boardTitle, boardText, boardTag }) => {
  try {
    const response = await axios.put(`http://localhost:8000/articles/${boardCode}/edit`, { boardTitle, boardText, boardTag });
    return response.data;
  } catch (error) {
    console.error('게시글 수정 중 오류 발생:', error);
    throw error;
  }
};

export const createComment = async (boardCode, commentData) => {
  try {
    const response = await axios.post(`http://localhost:8000/articles/${boardCode}/comment`, commentData, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response.data;
  } catch (error) {
    console.error('댓글 생성 중 오류 발생:', error);
    throw error;
  }
};


// export const getAllComments = async (boardCode, commentData) => {
//   try {
//     const response = await axios.get(`http://localhost:8000/articles/${boardCode}`, commentData);
//     return response.data;
//   } catch (error) {
//     console.error('${boardCode}로 게시글의 댓글 목록 조회 중 오류 발생: ', error);
//   }
// };



export const getAllBoards = async () => {
    try {
      const response = await axios.get('http://localhost:8000/evalcom');
      return response.data;
    } catch (error) {
      console.error('게시글 목록 조회 중 오류 발생:', error);
    }
};


export const getBoardByCode = async (boardCode) => {
    try {
        const response = await axios.get(`http://localhost:8000/articles/${boardCode}`);
        return response.data;
    } catch (error) {
        console.error(`게시글 코드 ${boardCode}로 조회 중 오류 발생:`, error);
    }
};


export const saveLike = async (boardCode, isLiked, isDisliked, userCode, isCancel = false) => {
  try {
    const data = {
      boardCode,
      isLiked,
      isDisliked,
      userCode
    };

    if (isCancel) {
      const response = await axios.delete(`http://localhost:8000/articles/${boardCode}/like`, { data });
      return response.data;
    } else {
      const response = await axios.post(`http://localhost:8000/articles/${boardCode}/like`, data);
      return response.data;
    }
  } catch (error) {
    console.error('Error updating like count:', error);
    throw error;
  }
};

export const saveDislike = async (boardCode, isLiked, isDisliked, userCode, isCancel = false) => {
  try {
    const data = {
      boardCode,
      isLiked,
      isDisliked,
      userCode
    };

    if (isCancel) {
      const response = await axios.delete(`http://localhost:8000/articles/${boardCode}/dislike`, { data });
      return response.data;
    } else {
      const response = await axios.post(`http://localhost:8000/articles/${boardCode}/dislike`, data);
      return response.data;
    }
  } catch (error) {
    console.error('Error updating dislike count:', error);
    throw error;
  }
};

//   // 밑에는 6월 13일까지 원래 썻던 거
// export const updateBoardLike = async (boardData, boardCode, isCancel = false) => {
//     try {
//       if (isCancel) {
//         const response = await axios.delete(`http://localhost:8000/articles/${boardCode}/like`, boardData);
//         return response.data;
//       } else {
//         const response = await axios.post(`http://localhost:8000/articles/${boardCode}/like`, boardData );
//         return response.data;
//       }
//     } catch (error) {
//       console.error('Error updating like count:', error);
//       throw error;
//     }
//   };


//   // 밑에는 6월 13일까지 원래 썻던 거
//   export const updateBoardDislike = async (boardData, boardCode, isCancel = false) => {
//     try {
//       if (isCancel) {
//         const response = await axios.delete(`http://localhost:8000/articles/${boardCode}/dislike`, boardData);
//         return response.data;
//       } else {
//         const response = await axios.post(`http://localhost:8000/articles/${boardCode}/dislike`, boardData);
//         return response.data;

//       }
//     } catch (error) {
//       console.error('Error updating dislike count:', error);
//       throw error;
//     }
//   };


// export const updateBoardLike = async (boardCode, isCancel = false) => {
//     // 좋아요 API 구현
//     try {
//       // 좋아요 API 호출 로직 작성
//       const response = await axios.get(`http://localhost:8000/articles/${boardCode}`, { isCancel });
//       return response.data;
//     } catch (error) {
//       console.error('Error updating like count:', error);
//       throw error;
//     }
//   };
  
//   export const updateBoardDislike = async (boardCode, isCancel = false) => {
//     // 싫어요 API 구현
//     try {
//       // 싫어요 API 호출 로직 작성
//       const response = await axios.get(`http://localhost:8000/articles/${boardCode}`, { isCancel });
//       return response.data;
//     } catch (error) {
//       console.error('Error updating dislike count:', error);
//       throw error;
//     }
//   };
  
  export const updateBoardView = async (boardCode) => {
    // 조회수 API 구현
    try {
      // 조회수 API 호출 로직 작성
      const response = await axios.get(`http://localhost:8000/articles/${boardCode}`);
      return response.data;
    } catch (error) {
      console.error('Error updating view count:', error);
      throw error;
    }
  };
