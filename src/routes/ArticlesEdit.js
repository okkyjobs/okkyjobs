import React from 'react'
import './evalcomNew.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { putArticle } from '../api/apiService';
import { useNavigate } from 'react-router-dom';


function ArticlesEdit() {
  const navigate = useNavigate();
  const { boardCode } = useParams();
  const [boardTitle, setBoardTitle] = useState('');
  const [boardTag, setBoardTag] = useState('');
  const [boardText, setBoardText] = useState('');

  useEffect(() => {
    const fetchBoardData = async () => {
      try {
        const boardData  = await putArticle(boardCode, { boardTitle, boardText, boardTag });
        setBoardTitle(boardData .boardTitle);
        setBoardTag(boardData .boardTag);
        setBoardText(boardData .boardText);
        navigate(`/articles/${boardCode}`);
      } catch (error) {
        console.error('Error fetching board data:', error);
      }
    };
    fetchBoardData();
  }, [boardCode]);

  const handleTitleChange = (e) => {setBoardTitle(e.target.value);};
    
  const handleTagChange = (e) => {setBoardTag(e.target.value);};

  const handleTextChange = (e) => {setBoardText(e.target.value);};

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await putArticle(boardCode, { boardTitle, boardText, boardTag });
      navigate(`/articles/${boardCode}`);
    } catch (error) {
      console.error('Error updating board:', error);
    }
  };

    return (
        
      <form onSubmit={handleSubmit} className='good-bad-post'>
      {/* <QuillCustom/> */}
      <div>
      </div>

      <div>
        <div className='main'>
          <div className='title'>
            <div className='title-title'>
              <span>제목<br/></span>
            </div>
            <input className='title-input' type='text' 
            value={boardTitle} onChange={handleTitleChange} required></input>
          </div>
          <div className='evalcom-new-tag'>
            <div className='title-tag'>
              <span>태그 -</span>
              <span className='title-tag-in'>내용을 대표하는 태그 3개 정도 입력해주세요.<br/></span>
            </div>
            <input className='tag-input' type='text'
            value={boardTag} onChange={handleTagChange} required></input>
          </div>
          <div className='content'>
            <div className='title-content'>
              <span>본문<br/></span>
            </div>
            <textarea className='content-input' type='text'
            value={boardText} onChange={handleTextChange} required></textarea>
          </div>
        </div>
        <div className='buttons'>
          <div className='cancel-button'>
            <button type="button" onClick={() => navigate('/evalcom')}>취소</button>
          </div>
          <div className='upload-button'>
            <button type="submit" >등록</button>
          </div>
          {/* <div className='upload-button'>
            <button type="submit" value={setBoardCode}
            onChange={(e) => setBoardCode(e.target.value)}>등록</button>
          </div> */}
        </div>
      </div>
    </form>
    )
}

export default ArticlesEdit