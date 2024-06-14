import React from 'react'
import './TopicEvalcom.css';



function TopicEvalcom() {

    return (
        
      <div className='good-bad'>
        <div>
          <div className='good-bad-in'>
            <div className='topic-banner'>
              <div>
                <img src={require('./img/pattern_questions.png')}/>
              </div>
              <div>
              <span className='good-bad-tag-title'>태그내용</span>
              </div>
            </div>

        <div className='search'>
          <div className='search-left'>
            <div>
                <button className='topic-sequence-button' type='button'>
                    <img className='post-sequence-button-img' src={require('./img/list2.PNG')}/> 최신순</button>
            </div>
          </div>
          <div className='topic-search-middle'>
            <img src={require('./img/opserver.jpg')}/>
            <input className='topic-tag-search-input' type='input' placeholder=' 태그 목록 내에서 검색'></input>
          </div>
          <div className='search-right'>
            <span>1 / 1 페이지 </span>
            <img className='left-page-button' src={require('./img/left-page-button.jpg')}/>
            <img className='right-page-button' src={require('./img/right-page-button.jpg')}/>
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
            <a href='/articles/boardCode' className='blue-point'>'A 회사 다닌 분 여쭤볼 게 있어요'와 같은 게시물 제목 들어갈 곳</a>
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
    
        </div>
    
    </div>
    )
}

export default TopicEvalcom 
