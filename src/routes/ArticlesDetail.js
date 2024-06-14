import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ArticlesDetail.css';
import { createComment } from '../api/apiService';
import { getAllBoards } from '../api/apiService';
import { getBoardByCode, saveLike, saveDislike, updateBoardView } from '../api/apiService';


function ArticlesDetail() {

  const { boardCode } = useParams();
  const { appliedCode } = useParams();
  // const userCode = 75;
  const { userCode } = useParams();
  const [board, setBoard] = useState(null);
  const [likeCount, setLikeCount] = useState(0);
  const [dislikeCount, setDislikeCount] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);
  const [viewCount, setViewCount] = useState(0);
  const [appliedText, setAppliedText] = useState("");
  // const [applyedText, setApplyedText] = useState('');


  useEffect(() => {
    const fetchBoard = async () => {
      try {
        const data = await getBoardByCode(boardCode);
        setBoard(data);
        setLikeCount(data.likeCount);
        setDislikeCount(data.dislikeCount);
        setIsLiked(data.isLiked);
        setIsDisliked(data.isDisliked);
        setViewCount(data.boardView);
      } catch (error) {
        console.error('Error fetching board data:', error);
      }
    };
    fetchBoard();
  }, [boardCode]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createComment(boardCode, {userCode : userCode, boardCode: boardCode, appliedText : appliedText });
      setAppliedText('');
      alert('댓글이 성공적으로 생성되었습니다.');
    } catch (error) {
      console.error('댓글 생성 중 오류 발생:', error);
      alert('댓글 생성에 실패했습니다.');
    }
  };

  useEffect(() => {
    console.log(appliedText);
  }, [handleSubmit]);


  const handleLike = async () => {
    try {
      if (!isLiked) {
        await saveLike(boardCode, true, false, userCode);
        setLikeCount(likeCount + 1);
        setIsLiked(true);
        setIsDisliked(false);
      } else {
        await saveLike(boardCode, false, false, userCode, true);
        setLikeCount(likeCount - 1);
        setIsLiked(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleDislike = async () => {
    try {
      if (!isDisliked) {
        await saveDislike(boardCode, false, true, userCode);
        setDislikeCount(dislikeCount + 1);
        setIsDisliked(true);
        setIsLiked(false);
      } else {
        await saveDislike(boardCode, false, false, userCode, true);
        setDislikeCount(dislikeCount - 1);
        setIsDisliked(false);
      }
    } catch (error) {
      console.error(error);
    }
  };



  const handleView = async () => {
    try {
      await updateBoardView(boardCode);
      setViewCount(viewCount + 1);
    } catch (error) {
      console.error('Error updating view count:', error);
    }
  };


  if (!board) {
    return <div>Loading...</div>;
  }



  


  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await createApplyed({
  //       applyedText
  //     });
  //     alert('댓글이 성공적으로 생성되었습니다.');
  //     // 폼 초기화
  //   } catch (error) {
  //     console.error('댓글 생성 중 오류 발생:', error);
  //     alert('댓글 생성에 실패했습니다.');
  //   }
  // };



  // const [boards, setBoards] = useState([]); // 게시글 목록 상태
  
  // useEffect(() => {
  //   const getBoards = async () => {
  //     const data = await getBoardByCode();
  //     console.log(data);
  //     setBoards(data); // 조회한 데이터로 상태 업데이트
  //   };
  //   getBoards();
  // }, []);


  // const { boardCode } = useParams();
  // const [board, setBoard] = useState(null);

  // useEffect(() => {
  //   const fetchBoard = async () => {
  //     const data = await getBoardByCode(boardCode);
  //     setBoard(data);
  //   };
  //   fetchBoard();
  // }, [boardCode]);

  // if (!board) {
  //   return <div>Loading...</div>;
  // }


    return (

      <form onSubmit={handleSubmit}>
      <div>
        
      <div className='posting'>
        <div>

        <div className='top'>

          <div className='top-above'>
            <div className='borderline'><a href='/evalcom'>좋은회사/나쁜회사</a></div>
            
          </div>

          <div key={board.boardCode}>
            
            <div className='top-profile'>
              <div className='top-a'>
                <a href='/users/userCode/articles'>
                    <div className='top-profile-img'>
                        <img src={require('./img/profile.jpg')}/>
                    </div>
                </a>
                
                <div className='top-profile-info'>
                  <a href='/users/userCode/articles'>
                    <div className='top-profile-info-name'>{board.userNickname}</div>
                  </a>
                  <div className='top-profile-info-date-view'>
                    <div className='top-profile-info-date'>{board.createDate} ·</div>
                    <div className='top-profile-info-view' onClick={handleView}>
                      <img src={require('./img/view-count.jpg')}/>
                      <span>{viewCount}</span>
                    </div>
                  </div>
                </div>
              </div>
              

              <div className='top-b'>
                <div className='option'>
                  <div className='share'>
                    <img src={require('./img/share.jpg')}/>
                  </div>
                  <div className='scrap'>
                    <img src={require('./img/scrap.jpg')}/>
                  </div>
                  <div className='modify'>
                    <img src={require('./img/modify.jpg')}/>
                  </div>
                </div>
              </div>

            </div>

            <div className='top-title'>{board.boardTitle}</div>
            <div className='top-content'>
              <span className='top-content-in'>{board.boardText}</span>
            </div>
            <div className='like-and-unlike'>
              <div className='like'>
                <img src={require('./img/like.jpg')} onClick={handleLike}/>
                <span className='like-count'>{board.likeCode}</span>
              </div>
              <div className='unlike'>
                <img src={require('./img/unlike.jpg')} onClick={handleDislike}/>
                <span className='unlike-count'>{board.dislikeCode}</span>  
              </div>
            </div>
          </div>



        </div>
        
        <div className='middle'>
          <div className='content-count'>6개의 댓글</div>
            <div className='comment-out-box'>
              <div className='my-profile'>
                <img src={require('./img/profile.jpg')}/>
              </div>
              <div>
                <textarea className='comment-in-box' type='input' value={appliedText}
            onChange={(e) => setAppliedText(e.target.value)} placeholder='주제에 대한 생각을 자유롭게 댓글로 표현해 주세요. 여러분의 다양한 의견을 기다립니다.'></textarea>
                <div className='write-comment'>
                  <button className='write-comment-button' type="submit">댓글 쓰기</button>
                </div>
              </div>
            </div>
          </div>


          <div className='bottom'>
            <div className='comment-profile'>
                <div className='comment-a'>
                  <div className='comment-profile-img'>
                    <img src={require('./img/profile2.jpg')}/>
                  </div>
                  
                  <div className='comment-profile-info'>
                    <div className='comment-profile-info-name'>박댓글</div>
                    <div className='comment-profile-info-date-view'>
                      <div className='comment-profile-info-date'>1일 전</div>
                    </div>
                  </div>
                </div>

                <div className='comment-b'>
                  <div className='comment-like-and-unlike'>
                    <div className='comment-like'>
                      <img src={require('./img/like.jpg')}/>
                      <span className='comment-like-count'>23</span>
                    </div>
                    <div className='comment-unlike'>
                      <img src={require('./img/unlike.jpg')}/>
                      <span className='comment-unlike-count'>3</span>  
                    </div>
                  </div>
                </div>

            </div>
            <div className='read-comment-box'>
              <span className='read-comment'>댓글 보여줄 곳</span>
            </div>

          </div>

          <div className='bottom-on'>
          <div className='bottom'>
            <div className='comment-profile'>
                <div className='comment-a'>
                  <div className='comment-profile-img'>
                    <img src={require('./img/profile2.jpg')}/>
                  </div>
                  
                  <div className='comment-profile-info'>
                    <div className='comment-profile-info-name'>박댓글</div>
                    <div className='comment-profile-info-date-view'>
                      <div className='comment-profile-info-date'>1일 전</div>
                    </div>
                  </div>
                </div>

                <div className='comment-b'>
                  <div className='comment-like-and-unlike'>
                    <div className='comment-like'>
                      <img src={require('./img/like.jpg')}/>
                      <span className='comment-like-count'>23</span>
                    </div>
                    <div className='comment-unlike'>
                      <img src={require('./img/unlike.jpg')}/>
                      <span className='comment-unlike-count'>3</span>  
                    </div>
                  </div>
                </div>

            </div>
            <div className='read-comment-box'>
              <span className='read-comment'>댓글 보여줄 곳</span>
            </div>

          </div>

          <div className='bottom'>
            <div className='comment-profile'>
                <div className='comment-a'>
                  <div className='comment-profile-img'>
                    <img src={require('./img/profile2.jpg')}/>
                  </div>
                  
                  <div className='comment-profile-info'>
                    <div className='comment-profile-info-name'>박댓글</div>
                    <div className='comment-profile-info-date-view'>
                      <div className='comment-profile-info-date'>1일 전</div>
                    </div>
                  </div>
                </div>

                <div className='comment-b'>
                  <div className='comment-like-and-unlike'>
                    <div className='comment-like'>
                      <img src={require('./img/like.jpg')}/>
                      <span className='comment-like-count'>23</span>
                    </div>
                    <div className='comment-unlike'>
                      <img src={require('./img/unlike.jpg')}/>
                      <span className='comment-unlike-count'>3</span>  
                    </div>
                  </div>
                </div>

            </div>
            <div className='read-comment-box'>
              <span className='read-comment'>댓글 보여줄 곳</span>
            </div>

          </div>

          <div className='bottom'>
            <div className='comment-profile'>
                <div className='comment-a'>
                  <div className='comment-profile-img'>
                    <img src={require('./img/profile2.jpg')}/>
                  </div>
                  
                  <div className='comment-profile-info'>
                    <div className='comment-profile-info-name'>박댓글</div>
                    <div className='comment-profile-info-date-view'>
                      <div className='comment-profile-info-date'>1일 전</div>
                    </div>
                  </div>
                </div>

                <div className='comment-b'>
                  <div className='comment-like-and-unlike'>
                    <div className='comment-like'>
                      <img src={require('./img/like.jpg')}/>
                      <span className='comment-like-count'>23</span>
                    </div>
                    <div className='comment-unlike'>
                      <img src={require('./img/unlike.jpg')}/>
                      <span className='comment-unlike-count'>3</span>  
                    </div>
                  </div>
                </div>

            </div>
            <div className='read-comment-box'>
              <span className='read-comment'>댓글 보여줄 곳</span>
            </div>

          </div>

          <div className='bottom'>
            <div className='comment-profile'>
                <div className='comment-a'>
                  <div className='comment-profile-img'>
                    <img src={require('./img/profile2.jpg')}/>
                  </div>
                  
                  <div className='comment-profile-info'>
                    <div className='comment-profile-info-name'>박댓글</div>
                    <div className='comment-profile-info-date-view'>
                      <div className='comment-profile-info-date'>1일 전</div>
                    </div>
                  </div>
                </div>

                <div className='comment-b'>
                  <div className='comment-like-and-unlike'>
                    <div className='comment-like'>
                      <img src={require('./img/like.jpg')}/>
                      <span className='comment-like-count'>23</span>
                    </div>
                    <div className='comment-unlike'>
                      <img src={require('./img/unlike.jpg')}/>
                      <span className='comment-unlike-count'>3</span>  
                    </div>
                  </div>
                </div>

            </div>
            <div className='read-comment-box'>
              <span className='read-comment'>댓글 보여줄 곳</span>
            </div>

          </div>

          <div className='bottom'>
            <div className='comment-profile'>
                <div className='comment-a'>
                  <div className='comment-profile-img'>
                    <img src={require('./img/profile2.jpg')}/>
                  </div>
                  
                  <div className='comment-profile-info'>
                    <div className='comment-profile-info-name'>박댓글</div>
                    <div className='comment-profile-info-date-view'>
                      <div className='comment-profile-info-date'>1일 전</div>
                    </div>
                  </div>
                </div>

                <div className='comment-b'>
                  <div className='comment-like-and-unlike'>
                    <div className='comment-like'>
                      <img src={require('./img/like.jpg')}/>
                      <span className='comment-like-count'>23</span>
                    </div>
                    <div className='comment-unlike'>
                      <img src={require('./img/unlike.jpg')}/>
                      <span className='comment-unlike-count'>3</span>  
                    </div>
                  </div>
                </div>

            </div>
            <div className='read-comment-box'>
              <span className='read-comment'>댓글 보여줄 곳</span>
            </div>

          </div>
          </div>

        </div>
      </div>
            </div>
            </form>


    )
}


export default ArticlesDetail