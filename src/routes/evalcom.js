import React from 'react'
import './evalcom.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
// import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { getAllBoards } from '../api/apiService';
import { createBoard } from '../api/apiService';
import { getBoardByCode } from '../api/apiService';



function Evalcom() {

  const [boards, setBoards] = useState([]); // 게시글 목록 상태

  useEffect(() => {
    const fetchBoards = async () => {
      const data = await getAllBoards();
      setBoards(data); // 조회한 데이터로 상태 업데이트
      console.log(data);
    };
    fetchBoards();
  }, []);
  
  
  // useEffect(() => {
  //   const getBoards = async () => {
  //     const data = await getBoardByCode();
  //     console.log(data);
  //     setBoards(data); // 조회한 데이터로 상태 업데이트
  //   };
  //   getBoards();
  // }, []);


    return (
        
      <div className='good-bad'>
        <div>
          <div className='good-bad-in'>
            <div className='banner'>
              <img src={require('./img/banner.jpg')}></img>
            </div>

        <div className='search'>
          <div className='search-left'>
            <div>
                <a href='/evalcom/new'>
                <button className='post-button' type='button'><img className='post-button-img' src={require('./img/post-button.jpg')}/>작성하기</button>
                </a>
            </div>
            <div>
                <button className='post-sequence-button' type='button'>
                    <img className='post-sequence-button-img' src={require('./img/list2.PNG')}/> 최신순</button>
            </div>
          </div>
          <div className='search-middle'>
            <img src={require('./img/opserver.jpg')}/>
            <input className='search-input' type='input' placeholder=' 좋은회사/나쁜회사 내에서 검색'></input>
          </div>
          <div className='search-right'>
            <span>1 / 32 페이지 </span>
            <img className='left-page-button' src={require('./img/left-page-button.jpg')}/>
            <img className='right-page-button' src={require('./img/right-page-button.jpg')}/>
          </div>
        </div>


        {/* <div className='post-main'>
          <div className='post-main-top'>
        {boards.map((board, index) => ( // boards 배열을 맵핑하여 화면에 표시
          <div key={index} className='post'>
            <a href={`/users/${boards.userCode}/articles`} className='blue-point'>확인용용{boards.user_nickname}
            <img className='post-profile' src={require('./img/profile.jpg')}/></a>
            <div className='post-main-middle'>
              <a href={`/articles/${boards.boardCode}`} className='blue-point'>{boards.board_title}</a>
            </div>
            <div className='good-bad-tag'>
              <a href={`/topics/${boards.board_tag}`} className='blue-point'>#{boards.board_tag}</a>
            </div>
            <div className='read-information'>
              <img className='view' src={require('./img/view-count.jpg')}/>
              <span className='view-count'>{boards.board_view}</span>
              <img className='comment' src={require('./img/comment-count.jpg')}/>
              <span className='comment-count'>{boards.commentCount}</span>
              <img className='good' src={require('./img/good-count.jpg')}/>
              <span className='good-count'>{boards.like_code}</span>
            </div>
          </div>
        ))}
        </div>
      </div> */}


      {boards.map((boards) => (
        <div key={boards.boardCode} className='post-main'>
          <div className='post-main-top'>
            <a href={`/users/${boards.userCode}/articles`}>
              <img className='post-profile' src={require('./img/profile.jpg')}/>
            </a>
            <a href={`/users/${boards.userCode}/articles`} className='blue-point'>{boards.userNickname}</a>
            <span>· {boards.createDate}</span>
          </div>
          <div className='post-main-middle'>
            <a href={`/articles/${boards.boardCode}`} className='blue-point'>{boards.boardTitle}</a>
          </div>
          <div className='post-main-bottom'>
            <div className='good-bad-tag'>
              <a href={`/topics/${boards.boardTag}`} className='blue-point'>#{boards.boardTag}</a>
            </div>
            <div className='read-information'>
              <img className='view' src={require('./img/view-count.jpg')}/>
              <span className='view-count'>{boards.boardView}</span>
              <img className='comment' src={require('./img/comment-count.jpg')}/>
              <span className='comment-count'>{boards.commentCount}</span>
              <img className='good' src={require('./img/good-count.jpg')}/>
              <span className='good-count'>{boards.likeCode}</span>
            </div>
          </div>
        </div>
      ))}



        <div className='post-main'>
          <div className='post-main-top'>
            <a href='/users/userCode/articles'>
              <img className='post-profile' src={require('./img/profile.jpg')}/>
            </a>
            <a href='/users/userCode/articles' className='blue-point'>김홍시</a>
            <span>· N일 전</span>
          </div>
          <div className='post-main-middle'>
            <a href='/articles/1491557' className='blue-point'>'A 회사 다닌 분 여쭤볼 게 있어요'와 같은 게시물 제목 들어갈 곳</a>
          </div>
          <div className='post-main-bottom'>
            <div className='good-bad-tag'>
              <a href='/topics/태그내용categoryCode=evalcom' className='blue-point'>#태그내용</a>
            </div>
            <div className='read-information'>
              <img className='view' src={require('./img/view-count.jpg')}/>
              <span className='view-count'>184</span>
              <img className='comment' src={require('./img/comment-count.jpg')}/>
              <span className='comment-count'>2</span>
              <img className='good' src={require('./img/good-count.jpg')}/>
              <span className='good-count'>3</span>
            </div>
          </div>
        </div>



        <div className='post-main'>
          <div className='post-main-top'>
            <a href='/users/userCode/articles'>
              <img className='post-profile' src={require('./img/profile.jpg')}/>
            </a>
            <a href='/users/userCode/articles' className='blue-point'>김홍시</a>
            <span>· N일 전</span>
          </div>
          <div className='post-main-middle'>
            <a href='/articles/1491557' className='blue-point'>'A 회사 다닌 분 여쭤볼 게 있어요'와 같은 게시물 제목 들어갈 곳</a>
          </div>
          <div className='post-main-bottom'>
            <div className='good-bad-tag'>
              <a href='/topics/태그내용categoryCode=evalcom' className='blue-point'>#태그내용</a>
            </div>
            <div className='read-information'>
              <img className='view' src={require('./img/view-count.jpg')}/>
              <span className='view-count'>184</span>
              <img className='comment' src={require('./img/comment-count.jpg')}/>
              <span className='comment-count'>2</span>
              <img className='good' src={require('./img/good-count.jpg')}/>
              <span className='good-count'>3</span>
            </div>
          </div>
        </div>



        <div className='post-main'>
          <div className='post-main-top'>
            <a href='/users/userCode/articles'>
              <img className='post-profile' src={require('./img/profile.jpg')}/>
            </a>
            <a href='/users/userCode/articles' className='blue-point'>김홍시</a>
            <span>· N일 전</span>
          </div>
          <div className='post-main-middle'>
            <a href='/articles/1491557' className='blue-point'>'A 회사 다닌 분 여쭤볼 게 있어요'와 같은 게시물 제목 들어갈 곳</a>
          </div>
          <div className='post-main-bottom'>
            <div className='good-bad-tag'>
              <a href='/topics/태그내용categoryCode=evalcom' className='blue-point'>#태그내용</a>
            </div>
            <div className='read-information'>
              <img className='view' src={require('./img/view-count.jpg')}/>
              <span className='view-count'>184</span>
              <img className='comment' src={require('./img/comment-count.jpg')}/>
              <span className='comment-count'>2</span>
              <img className='good' src={require('./img/good-count.jpg')}/>
              <span className='good-count'>3</span>
            </div>
          </div>
        </div>
      </div>

      <div className='page-previous-next'>
        <div className='previous'>
          <span>←  Previous</span>
        </div>

        <div className='page-num'>
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>5</span>
          <span className='dot'>···</span>
          <span>32</span>
        </div>

        <div className='next'>
          <span>Next →</span>
        </div>

      </div>

    </div>
    {/* <Routes>
        <Route path='/evalcom/new' element={<EvalcomNew/>}/>
    </Routes> */}
    </div>
    )
}

export default Evalcom