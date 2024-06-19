import React from 'react'
import './evalcomNew.css';
// import { useState, useRef } from 'react-quill';
// import 'react-quill/dist/quill.snow.css';
// import ReactQuill from 'react-quill';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { createBoard } from '../api/apiService';
import { useNavigate } from 'react-router-dom';


// function QuillCustom() {
//   const [value, setValue] = useState("");
//   const quillRef = useRef(null);
// return (
//     <>
//       <ReactQuill
//         style={{ height: "200px", width: "500px",  marginLeft: "30%", marginTop: "10%"}}
//         ref={quillRef}
//         theme="snow"
//         value={value}
//         onChange={setValue}
//         placeholder="내용을 입력하세요."
//       />
//       <button>저장</button>
//     </>
//   );
// }


function EvalcomNew() {
  const navigate = useNavigate();
  // const [boardCode, setBoardCode] = useState('');
  const [boardTitle, setBoardTitle] = useState('');
  const [boardTag, setBoardTag] = useState('');
  const [boardText, setBoardText] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createBoard({
        // boardCode,
        boardTitle,
        boardTag,
        boardText,
      });
      navigate('/evalcom');
      alert('게시물이 성공적으로 생성되었습니다.');
    } catch (error) {
      console.error('게시판 생성 중 오류 발생:', error);
      alert('게시물 생성에 실패했습니다.');
    }
  };


  // const modules = {
  //   toolbar: [
  //     [{ font: [] }],
  //     [{ size: ["small", false, "large", "huge"] }], // custom dropdown
  //     [{ header: [1, 2, 3, 4, 5, 6, false] }],
  //     [{ color: [] }, { background: [] }], // dropdown with defaults from theme
  //     ["bold", "italic", "underline", "strike", "blockquote"],
  //     [
  //       { list: "ordered" },
  //       { list: "bullet" },
  //       { indent: "-1" },
  //       { indent: "+1" },
  //     ],
  //     ["link", "image"],
  //     ["clean"],
  //   ],
  // };

  // const formats = [
  //   "font",
  //   "size",
  //   "header",
  //   "color",
  //   "background",
  //   "bold",
  //   "italic",
  //   "underline",
  //   "strike",
  //   "blockquote",
  //   "list",
  //   "bullet",
  //   "indent",
  //   "link",
  //   "image",
  // ];

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
            <input className='title-input' type='input' placeholder=' 제목을 입력해주세요.'
            value={boardTitle}
            onChange={(e) => setBoardTitle(e.target.value)}></input>
          </div>
          <div className='evalcom-new-tag'>
            <div className='title-tag'>
              <span>태그 -</span>
              <span className='title-tag-in'>내용을 대표하는 태그 3개 정도 입력해주세요.<br/></span>
            </div>
            <input className='tag-input' type='input' placeholder=' 태그를 입력해주세요.'
            value={boardTag}
            onChange={(e) => setBoardTag(e.target.value)}></input>
          </div>
          <div className='content'>
            <div className='title-content'>
              <span>본문<br/></span>
            </div>
            <textarea className='content-input' type='input' placeholder=' 내용을 입력해주세요.'
            value={boardText}
            onChange={(e) => setBoardText(e.target.value)}></textarea>
          </div>
        </div>
        <div className='buttons'>
          <div className='cancel-button'>
            <button type="button" onClick={() => navigate('/evalcom')}>취소</button>
          </div>
          <div className='upload-button'>
            <button type="submit">등록</button>
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

export default EvalcomNew