import logo from './logo.svg';
import './App.css';
import { useState, useRef, useEffect } from 'react';
import { Route, Routes, Link, BrowserRouter, json } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import App1 from './router/App1'
import App3 from './router/App3'
import App4 from './router/App4'
import App5 from './router/App5'
import App6 from './router/App6'
import App7 from './router/App7'
import App8 from './router/App8'
import App10 from './router/App10'
import App11 from './router/App11'
import axios from 'axios';

function QuillCustom() {
  const [value, setValue] = useState("");
  const quillRef = useRef(null);


  
return (
    
    <>
      <ReactQuill
        style={{ height: "200px", width: "500px",  marginLeft: "30%", marginTop: "10%"}}
        ref={quillRef}
        theme="snow"
        value={value}
        onChange={setValue}
        placeholder="내용을 입력하세요."
      />
      <button>저장</button>
    </>
   
    
  );
}
export const client = axios.create({
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,

});

const data = {
  //intern_Type:"1",
 project_Introduce:"개발",
  // project_Name:"개발",
  // work_Style:"개발",
  // min_Career:"0",
  // max_Career:"0",
  // school_Career:"0",
  // min_pay:"0",
  // max_pay:"0",
  // working_Period:"0",
  // start_Day:"2024-06-12",
  // money_Month:"2024-06-12",
  // money_Day:"2024-06-12",
  // incruit_End:"2024-06-12",
  // having_Skill:"개발",
  // incruit_Tag:"개발",
  // incruit_Detail:"개발",
  // incruit_view:"0",
  // share_Url:"개발",
  // like_Count:"0"

};

// export const datas = async (_props) => {
//   console.log("데이터 출력"+ JSON.stringify(data));
//   try {
//       const response = await axios.post('http://localhost:3000/okky/auth/project',JSON.stringify(data));
      
//       console.log(response.data);
//       alert("데이터 저장 성공" + data)
//       // 추가적인 처리
//   } catch (error) {
//       console.error('데이터 저장:', error);
//   }
// };



function App() {
    
  
  

  const modules = {
    toolbar: [
      [{ font: [] }],
      [{ size: ["small", false, "large", "huge"] }], // custom dropdown
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ color: [] }, { background: [] }], // dropdown with defaults from theme
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  };

  const formats = [
    "font",
    "size",
    "header",
    "color",
    "background",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];

  
  
  return (
    
    
    
    <div className="App">
        <div>


      {/* <QuillCustom></QuillCustom> */}
      
      <div>
      </div>
     </div>
      

      <Routes>
        <Route path='/recruits/1500559' element = {<App1></App1>}></Route>
        <Route path='/recruits/drafts' element = {<App3></App3>}></Route>
        <Route path='/recruits/drafts/:1' element = {<App11></App11>}></Route>
        <Route path='/recruits/contract/new' element = {<App4></App4>}></Route>
        <Route path='/recruits/1502138' element = {<App5></App5>}></Route>
        <Route path='/recruits/fulltime/new' element = {<App6></App6>}></Route>
        <Route path='/fulltime' element = {<App7></App7>}></Route>
        <Route path='/contract' element = {<App8></App8>}></Route>
        <Route path='/recruits/contract/draft-completion' element = {<App10></App10>}></Route>
        <Route path='*' element = {<div>페이지를 사용할 수 없습니다.</div>}></Route>
      </Routes>
          
      
        
    
    </div>
  );
}



export default App;