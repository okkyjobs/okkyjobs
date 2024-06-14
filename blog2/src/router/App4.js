import './App4.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState, useRef, useEffect, useCallback } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


export default App4;


function QuillCustom() {
  const [value, setValue] = useState("");
  const quillRef = useRef(null);

return (

    <>
      <ReactQuill
        style={{ height: "320px", width: "870px",  marginLeft: "0%", marginTop: "0%"}}
        ref={quillRef}
        theme="snow"
        value={value}
        onChange={setValue}
        placeholder="내용을 입력하세요."
      />
    </>
   
    
  );
}

export const client = axios.create({
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,

});

const data = {
  project_introduce:"프로젝트 분야",
  work_style:"업무방식"
}





export const datas = async (_props) => {
  console.log("데이터 출력"+ JSON.stringify(data));
  try {
      const response = await axios.post('http://localhost:3000/okky/auth/project',JSON.stringify(data));
      
      console.log(response.data);
      alert("데이터 저장 성공" + data)
      // 추가적인 처리
  } catch (error) {
      console.error('데이터 저장:', error);
  }
};

export function TemporaryStorageForm() {
  const [inputValue, setInputValue] = useState('');

  // 컴포넌트가 마운트될 때 로컬스토리지에서 데이터를 불러오는 useEffect
  useEffect(() => {
    const savedValue = localStorage.getItem('temporaryInput');
    if (savedValue) {
      setInputValue(savedValue);
    }
  }, []);

  // 입력 값이 변경될 때마다 로컬스토리지에 저장하는 함수
  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    localStorage.setItem('temporaryInput', value);
  };

  // 폼 제출 시 로컬스토리지에서 데이터를 제거하는 함수
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('제출되었습니다: ' + inputValue);
    localStorage.removeItem('temporaryInput');
    setInputValue('');  // 제출 후 입력 필드 초기화
  };
}





function App4() {



  //  //만약 로컬 스토리지에 저장된 값이 있으면 로컬 스토리지에서 게시글 데이터 불러오기
  //   //만약 저장된 게시글이 없으면 [] 빈 배열 가지고 옴
  //   const savedPosts = JSON.parse(localStorage.getItem('posts')) || [];

  //   //게시글 목록관리
  //   const [posts,setPosts]=useState(savedPosts);

  //   //새로운 게시글 입력받기
  //   const [newPost,setNewPost]=useState('');

  //   //페이지가 로딩될 때 게시글이 업데이트 될 때 로컬 스토리지에 저장
  //   useEffect(()=>{
  //       localStorage.setItem('posts',JSON.stringify(posts));
  //   },[posts]);


  //   const addPost = () => {
  //     setPosts([...posts,newPost]);
  //     setNewPost('');

  //     //입력된 게시글을 로컬 스토리지에 저장
  //     //localStorage 밑에 Item과 setItem 존재함
  //     //'posts'키에 현재 게시글 목록과 새로운 게시글을 추가한 배열을 JSON 문자열로 변환해서 저장
  // localStorage.setItem('posts',JSON.stringify([...posts,newPost]));
  // }


  const imageinput = useRef();    
  
    
  const [selectedValue, setSelectedValue] = useState('');
  //프로젝트 분야 부분
  const [selectedValue2, setSelectedValue2] = useState('');

  const [selectedValue3, setSelectedValue3] = useState('');
  const [finalValue, setFinalValue] = useState('');
  //프로젝트명 부분
  const [selectedValue4, setSelectedValue4] = useState('');
  //프로젝트 소개 부분
  const [selectedValue5, setSelectedValue5] = useState('');
  const [selectedValue6, setSelectedValue6] = useState('');
  //직군 직무 부분
  const [selectedValue7, setSelectedValue7] = useState('');
  //직책 부분
  const [selectedValue8, setSelectedValue8] = useState('');
  //근무 조건 부분
  const [selectedValue9, setSelectedValue9] = useState('');
  //경력 부분
  const [selectedValue10, setSelectedValue10] = useState('');
  //캘린더 부분
  const [selectedValue11, setSelectedValue11] = useState('');
  //급여지급일 부분
  const [selectedValue12, setSelectedValue12] = useState('');
  //급여지급일 선택일 부분
  const [selectedValue13, setSelectedValue13] = useState('');
  //지원마감일 부분



  const [city, setCity] = useState('');
  const [district, setDistrict] = useState('');
  
  // 도시에 따른 구역 데이터
  const districtsByCity = {
    개발: ['백엔드개발','프론트엔드개발','모바일개발',
      '풀스택개발','임베디드개발','PC어플리케이션개발',
      'DBA','TA','AA','기타개발','퍼블리셔','QA'],
    기획: ['전략기획', '서비스기획', 'UI/UX 기획','사업기획','PM'],
    디자인: ['웹디자인', 'UI디자인', '디자인','모바일디자인','서비스디자인','UX디자인'],
    마케팅: ['영업', '마케팅', 'Growth Hacker','Digital Marketer','전략수석','MD'],
    기타: ['기타'],
  };
  
  // 도시 선택 시 상태 업데이트 및 구역 초기화
  const handleCityChange = (event) => {
    setCity(event.target.value);
    setDistrict('');
  };
  
  // 구역 선택 시 상태 업데이트
  const handleDistrictChange = (event) => {
    setDistrict(event.target.value);
  };


  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };



  const [sido, setSido] = useState('');
  const [sigungu, setSigungu] = useState('');
  const [dongs, setDongs] = useState([]);
  const [sidos, setSidos] = useState([]);
  const [sigungus, setSigungus] = useState([]);


  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const API_KEY = 'B3E2BC2A-D5BE-3961-ACA2-028371BD8BD8';

  const loadData = useCallback(async () => {
    try {
      const response = await axios.get(
        `https://api.odcloud.kr/api/15099285/v1/uddi:57e7fc08-b32c-482d-8dc7-ab02864a70b7?serviceKey=${API_KEY}&page=${page}&perPage=10&returnType=JSON`
      );
      const jsonRes = response.data.data;
      setItems((prev) => [...prev, ...jsonRes]);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  }, [page, API_KEY]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  // 시도 선택 시 시군구 목록 불러오기
  const handleSidoChange = async (event) => {
    const selectedSido = event.target.value;
    setSido(selectedSido);
    setSigungu('');
    setDongs([]);

    if (selectedSido) {
      try {
        const response = await axios.get(`https://api.publicdata.go.kr/openapi/service/rest/AddressService/getSiGunGuDongList`, {
          params: {
            serviceKey: API_KEY,
            type: 'json',
            numOfRows: 100,
            pageNo: 1,
            sido: selectedSido,
          },
        });
        setSigungus(response.data.response.body.items);
      } catch (error) {
        console.error('Error fetching sigungus:', error);
      }
    } else {
      setSigungus([]);
    }
  };

  // 시군구 선택 시 동 목록 불러오기
  const handleSigunguChange = async (event) => {
    const selectedSigungu = event.target.value;
    setSigungu(selectedSigungu);

    if (selectedSigungu) {
      try {
        const response = await axios.get(`https://api.publicdata.go.kr/openapi/service/rest/AddressService/getSiGunGuDongList`, {
          params: {
            serviceKey: API_KEY,
            type: 'json',
            numOfRows: 100,
            pageNo: 1,
            sido: sido,
            sigungu: selectedSigungu,
          },
        });
        setDongs(response.data.response.body.items);
      } catch (error) {
        console.error('Error fetching dongs:', error);
      }
    } else {
      setDongs([]);
    }
  };




  const handleSelectChange = (event) => {
    const value = event.target.value;
    setSelectedValue(value);
    console.log(event.target.value);
    
    axios.post('http://localhost:3000/okky/auth/project', { value })
      
      .then(response => {
        console.log('응답 데이터:', response.data);
      })
      .catch(error => {
        console.error('오류 발생:', error);
      });
    };

  const handleSelectChange2 = (event) => {
    const value = event.target.value;
    setSelectedValue2(value);
    console.log("업무방식"+event.target.value);
    
    axios.post('http://localhost:3000/okky/auth/project', { value })
      
      .then(response => {
        console.log('응답 데이터:', response.data);
      })
      .catch(error => {
        console.error('오류 발생:', error);
      });
    };

  const handleSelectChange3 = (event) => {
    

    const value = event.target.value;
    setSelectedValue3(value);
    console.log("프로젝트명"+event.target.value);
    
    axios.post('http://localhost:3000/okky/auth/project', { value })
      
      .then(response => {
        console.log('응답 데이터:', response.data);
      })
      .catch(error => {
        console.error('오류 발생:', error);
      });
    };

    const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
        setFinalValue(selectedValue3); // 최종 값 설정
        alert(`입력 완료: ${selectedValue3}`);
        // 필요한 추가 로직을 여기에 추가
      }
    };

    const handleSelectChange4 = (event) => {
    

      const value = event.target.value;
      setSelectedValue4(value);
      console.log("프로젝트 소개"+event.target.value);
      
      axios.post('http://localhost:3000/okky/auth/project', { value })
        
        .then(response => {
          console.log('응답 데이터:', response.data);
        })
        .catch(error => {
          console.error('오류 발생:', error);
        });
      };

    const handleSelectChange5 = (event) => {
    

      const value = event.target.value;
      setCity(value);
      console.log("직군"+event.target.value);
      
      axios.post('http://localhost:3000/okky/auth/project', value)
        
        .then(response => {
          console.log('응답 데이터:', response.data);
        })
        .catch(error => {
          console.error('오류 발생:', error);
        });
      };

    const handleSelectChange6 = (event) => {
    

      const value = event.target.value;
      setDistrict(value);
      console.log("직무"+event.target.value);
      
      axios.post('http://localhost:3000/okky/auth/project', value)
        
        .then(response => {
          console.log('응답 데이터:', response.data);
        })
        .catch(error => {
          console.error('오류 발생:', error);
        });
      };

    const handleSelectChange7 = (event) => {
    

      const value = event.target.value;
      setSelectedValue7(value);
      console.log("업무방식"+event.target.value);
      
      axios.post('http://localhost:3000/okky/auth/project', value)
        
        .then(response => {
          console.log('응답 데이터:', response.data);
        })
        .catch(error => {
          console.error('오류 발생:', error);
        });
      };

    const handleSelectChange8 = (event) => {
    

      const value = event.target.value;
      setSelectedValue8(value);
      console.log("업무방식"+event.target.value);
      
      axios.post('http://localhost:3000/okky/auth/project', value)
        
        .then(response => {
          console.log('응답 데이터:', response.data);
        })
        .catch(error => {
          console.error('오류 발생:', error);
        });
      };

    const handleSelectChange9 = (event) => {
    

      const value = event.target.value;
      setSelectedValue9(value);
      console.log("업무방식"+event.target.value);
      
      axios.post('http://localhost:3000/okky/auth/project', value)
        
        .then(response => {
          console.log('응답 데이터:', response.data);
        })
        .catch(error => {
          console.error('오류 발생:', error);
        });
      };

    const handleSelectChange10 = (event) => {
    

      const value = event.target.value;
      setSelectedValue10(value);
      console.log("업무방식"+event.target.value);
      
      axios.post('http://localhost:3000/okky/auth/project', value)
        
        .then(response => {
          console.log('응답 데이터:', response.data);
        })
        .catch(error => {
          console.error('오류 발생:', error);
        });
      };

    const handleSelectChange11 = (event) => {
    

      const value = event.target.value;
      setSelectedValue11(value);
      console.log("업무방식"+event.target.value);
      
      axios.post('http://localhost:3000/okky/auth/project', value)
        
        .then(response => {
          console.log('응답 데이터:', response.data);
        })
        .catch(error => {
          console.error('오류 발생:', error);
        });
      };

    const handleSelectChange12 = (event) => {
    

      const value = event.target.value;
      setSelectedValue12(value);
      console.log("업무방식"+event.target.value);
      
      axios.post('http://localhost:3000/okky/auth/project', value)
        
        .then(response => {
          console.log('응답 데이터:', response.data);
        })
        .catch(error => {
          console.error('오류 발생:', error);
        });
      };

      
    const handleSelectChange13 = (event) => {
    

      const value = event.target.value;
      setSelectedValue13(value);
      console.log("업무방식"+event.target.value);
      
      axios.post('http://localhost:3000/okky/auth/project', value)
        
        .then(response => {
          console.log('응답 데이터:', response.data);
        })
        .catch(error => {
          console.error('오류 발생:', error);
        });
      };

      

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
      <div>
      <h1>임시 저장 폼</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={inputValue} 
          onChange={handleChange} 
          placeholder="여기에 입력하세요"
        />
        <button type="submit">제출</button>
      </form>
      </div>
     </div>
      
<div className='App4-_next_'>
          <header className='App4-header-box'>
            <nav aria-label='Global' className='App4-nav-box'>
              <div className='App4-nav-div1'>
                <div className='App4-head-first-box'>
                  <a className='App4-head-logo-box' href='/'>
                    <span className='App4-head-logo-span'>OKKY Jobs</span>
                    <img className='App4-head-logo' alt='OKKY Logo' src={require('./img/logo4.PNG')}/>
                  </a>
                  <div className='head-words-box space-x-7'>
                    <div className='shrink-0'>
                      <a className='App4-words-box1' href='/contract'>계약직</a>
                    </div>
                    <div className='shrink-1'>
                      <a className='App4-words-box1' href='/fulltime'>정규직</a>
                    </div>
                    <div className='shrink-1'>
                      <a className='App4-words-box1' href='/talents'>Talent</a>
                    </div>
                    <div className='shrink-1'>
                      <a className='App4-words-box1' href='/evalcom'>좋은회사/나쁜회사</a>
                    </div>
                    
                  </div>
                </div>
                <div className='App4-head-second-box'>
                  <div className='App4-head-second-box1'>
                    <a href='/products/01010301'>
                      <button className='App4-buyForShow'>열람권 구매</button>
                    </a>
                    <a href='/products/01010101'>
                      <button className='App4-buyForShow'>등록권 구매</button>
                    </a>
                  </div>
                </div>
                <div className='App4-head-third-box'>
                  <a href='/recruits/drafts'>
                    <button className='company-but'>
                      <img className='company-pic' src={require('./img/company.png')}></img>
                      <span className='company'>구인등록</span>  
                    </button>
                  </a>
                </div>
                <div className='App4-head-forth-box'>
                  <button type='button' aria-haspopup='true' aria-expanded='false'  className='App4-profile-but'>
                    <span className='App4-head-profile-span'>Open user menu</span>
                    <span className='App4-head-profile'>
                      <img className='App4-profile-part' alt='프로필 사진' src={require('./img/profile.png')}/>
                    </span>
                  </button>
                </div>
              </div>
            </nav>
          </header>
              <div className='App4-navbar'>
                <p>0</p>
              </div>
      </div>

      

      <div className='App4-header'>
        <div className='App4-header-intern'>
          <span>계약직 포지션 등록</span>
        </div>
        <div className='App4-header-board'>
          <div className='App4-header-light'>
          <img className='App4-light' src={require('./img/light.png')}></img>
          </div>
          <div> 
            <p>포지션 등록 전 <span className='App4-okky-text'>OKKY Jobs 운영 규칙</span>을 읽어보시고, <span>한 개의 채용 공고</span>에 <span>하나의 포지션만</span> 등록해 주세요!</p>
          </div>
        </div>
      </div>

      <div className='App4-ceo'>
        <div>
          <h2>0.대표 이미지</h2>
        </div>
      </div>

      <div className='App4-pattern-box'>
        <div className='App4-pattrn-text'>
          <div className='App4-upload-text'>
            <h2>직접 업로드</h2>
          </div>
          <div className='App4-p-text'>
            <h2>0/20</h2>
          </div>
        </div>
        <div className='App4-pattern-board'>
          <input type='file' ref={imageinput}></input>
         <img className='App4-plus' src={require('./img/plus.png')}></img>
        </div>
      </div>

      <div className='App4-upload'>
        <div>
          <p>· 업로드 가능한 이미지 형식은 BMP, JPG, JPEG, PNG, WEBP 입니다.</p>
          <p>· 업로드 가능한 이미지 용량은 최대 1MB 입니다.</p>
          <p>· 선정적, 폭력적, 차별적인 이미지 또는 기업/포지션과 관련 없는 이미지를 등록하는 경우 별도의 고지 없이 포지션이 삭제될 수 있습니다.</p>
        </div>
      </div>

      <div className='App4-project-info'>
        <div className='App4-project-text1'>
          <p>1.프로젝트 정보</p>
        </div>
        
        <div className='App4-project-text2'>
          <p>프로젝트 분야<span>*</span></p>
        </div>
        <label>
            <div className='App4-type-select'>
              {/* <select className='App4-type-a' onChange={handleSelect} value={Selected}>
                {selectList.map((item) => (
                  <option value={item} key={item}>
                    {item}
                  </option>
                ))};
              </select>
              <hr />
              <p>
                
                Selected: <b>{Selected}</b>
              </p> */}
               <select onChange={handleSelectChange} value={selectedValue}>
                <option value="">선택하세요</option>
                <option value="type1">금융</option>
                <option value="type2">제조</option>
                <option value="type3">공공</option>
                <option value="type4">인터넷/서비스</option>
                <option value="type5">커머스/쇼핑</option>
                <option value="type6">통신</option>
                <option value="type7">게임</option>
                <option value="type8">유통</option>
                <option value="type9">물류</option>
                <option value="type10">교육</option>
                <option value="type11">의료</option>
                <option value="type12">방송</option>
              </select>
            </div>
          </label>
      </div>

      <div>
        <div className='App4-job-type'>
          <p>업무방식<span>*</span></p>
        </div>
        
        <div className='App4-job-check1'>
          <div>
            <input type='radio' name='style' checked onClick={handleSelectChange2} value={setSelectedValue2}></input>
            
          </div>
          <div className='App4-si-text'>
            <p>SI</p>
          </div>
          <div>
            <input type='radio' name='style' onClick={handleSelectChange2} value={setSelectedValue2}></input>
          </div>
          <div className='App4-sm-text'>
            <p>SM</p>
          </div>
          <div>
          <input type='radio' name='style'onClick={handleSelectChange2} value={setSelectedValue2}></input>
          </div>
          <div className='App4-job-move'>
            <p>SI</p>
            <img className='App4-' src={require('./img/pagemove-copy.png')}></img>
            <p>SM</p>
          </div>
        </div>
          
        <div className='App4-project-name'>
          <div className='App4-pj-all'>
            <div className='App4-pj-text'>
              <span>프로젝트명*</span>
            </div>
            <div>
              <p>0/255</p>
            </div>
          </div>
          <div className='App4-pj-board'>
            <input type='text' onChange={handleSelectChange3} onKeyDown={handleKeyDown} value={selectedValue3} ></input>
          </div>
        </div>

        <div className='App4-project-introduce'>
          <div className='App4-pj-all'>
            <div className='App4-pj-intro'>
              <p>프로젝트 소개*</p>
              <img className='App4-question' src={require('./img/question.PNG')}></img>
            </div>
            <div>
              <p>0/20000</p>
            </div>
          </div>
          <div className='App4-intro-board'> 
            <input type='text' onChange={handleSelectChange4} value={selectedValue4}></input>
          </div>
        </div>

          <div className='App4-position-text'>
            <span>2.포지션 정보</span>
          </div>

        <div className='App4-position-info'>

          <div className='App4-job-all'>
            <div>
              <p>직군<span>*</span></p>
            </div>
          <label>
            <div className='App4-position-type'>
            <select value={city} onChange={handleSelectChange5}>
        <option value="">직군을 선택해주세요</option>
        {Object.keys(districtsByCity).map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>
            </div>
          </label>
            
            
          </div>

          <div className='App4-job-second'>
            <div>
              <p>주요직무<span>*</span></p>
            </div>
            <label>
            <div className='App4-position-style'>
            <select value={district} onChange={handleSelectChange6} >
        <option value="">주요 직무를 선택해주세요</option>
        {city &&
          districtsByCity[city].map((district) => (
            <option key={district} value={district}>
              {district}
            </option>
          ))}
      </select>
            </div>
          </label>
          </div>

          </div>

          <div className='App4-job-duty'>
            <div>
              <p>직책<span>*</span></p>
            </div>
            
            <div className='App4-job-check2'>
              <div className='App4-job-pm'>
                <input type='radio' name='work' checked value={setSelectedValue7} onClick={handleSelectChange7}></input>
              </div>
              <div>
                <h2>PM</h2>
              </div>
              <div>
                <input type='radio' name='work' value={setSelectedValue7} onClick={handleSelectChange7}></input>
              </div>
              <div className='App4-pl-text'>
                <h2>PL</h2>
              </div>
              <div>
                <input type='radio' name='work' value={setSelectedValue7} onClick={handleSelectChange7}></input>
              </div>
              <div className='App4-reder-text'>
                <h2>팀장</h2>
              </div>
              <div>
                <input type='radio' name='work' value={setSelectedValue7} onClick={handleSelectChange7}></input>
              </div>
              <div className='App4-member-text'>
                <h2>팀원</h2>
              </div>
            </div>
          </div>

          <div className='App4-job-condition'>
            <div>
              <p>근무조건<span>*</span></p>
            </div>
            
            <div className='App4-condition-check'>
              <div>
                <input type='radio' name='job' checked value={setSelectedValue8} onClick={handleSelectChange8}></input>
              </div>
              <div>
                <h2>상근</h2>
              </div>
              <div>
                <input type='radio' name='job' value={setSelectedValue8} onClick={handleSelectChange8}></input>
              </div>
              <div>
                <h2>재택</h2>
              </div>
              <div>
                <input type='radio' name='job' value={setSelectedValue8} onClick={handleSelectChange8}></input>
              </div>
              <div>
                <h2>협의</h2>
              </div>
            </div>
          </div>
      </div>

      <div className='App4-career'>
        <div className='App4-min-career'>
          <div className='App4-career-text'>
            <h2>경력*</h2>
          </div>
          <label>
            <div className='App4-career-board'>
              <select className='App4-board-a' value={setSelectedValue9} onChange={handleSelectChange9}>
                <option value=''>최소경력을 선택해주세요.</option>
                <option value='1'>무관</option>
                <option value='2'>신입</option>
                <option value='3'>1년이상</option>
                <option value='4'>2년이상</option>
                <option value='5'>3년이상</option>
                <option value='6'>4년이상</option>
                <option value='7'>5년이상</option>
                <option value='8'>6년이상</option>
                <option value='9'>7년이상</option>
                <option value='10'>8년이상</option>
                <option value='11'>9년이상</option>
                <option value='12'>10년이상</option>
                <option value='13'>11년이상</option>
                <option value='14'>12년이상</option>
                <option value='15'>13년이상</option>
                <option value='16'>14년이상</option>
                <option value='17'>15년이상</option>
              </select>
            </div>
          </label>
        </div>

        <div className='App4-school-abilty'>
          <div className='App4-school-ab'>
            <div className='App4-school-text'>
              <h2>학력*</h2>
            </div>
            <label>
            <div className='App4-school-board'>
              <select value={setSelectedValue9} onChange={handleSelectChange9}>
                <option value='0'>학력을 선택해주세요.</option>
                <option value='18'>무관</option>
                <option value='19'>고졸이상</option>
                <option value='20'>전문학사 이상</option>
                <option value='21'>학사 이상</option>
                <option value='22'>석사 이상</option>
                <option value='23'>박사 이상</option>
              </select>
            </div>
          </label>
          </div>
        </div>

      </div>

          <div className='App4-pay'>
            <h2>급여*</h2>
          </div>
      <div className='App4-pay-day'>
        <div className='App4-pay-input'>
          <div className='App4-pay-month'>
            <input type='text' placeholder='최소' className='App4-pay-min'></input>
            <h2 className='App4-pay-text1'>만 ~</h2>
          </div>
          <div className='App4-pay-date'>
            <input type='text' className='App4-pay-max' placeholder='최대'></input>
            <h2 className='App4-pay-text2'>만</h2>
          </div>
        </div>

        <div className='App4-working'>
          <div className='App4-workday'>
            <div className='App4-work-finish'>
              <h2>근무기간<span>*</span></h2>
            </div>
            <div className='App4-work-month'>
              <input type='text' className='App4-work-d' placeholder='12'></input>
              <h2 className='App4-job-text'>개월</h2>
            </div>
            <div className='App4-work-date'>
              <h2 className='App4-working-day'>근무시작일<span>*</span></h2>
              <input type='date' className='App4-date' value={setSelectedValue10} onChange={handleSelectChange10}></input>
            </div>
          </div>
        </div>

        <select value={sido} onChange={handleSidoChange}>
        <option value="">시도를 선택하세요</option>
        {sidos.map((sido) => (
          <option key={sido.code} value={sido.name}>
            {sido.name}
          </option>
        ))}
      </select>

      <select value={sigungu} onChange={handleSigunguChange} disabled={!sido}>
        <option value="">시군구를 선택하세요</option>
        {sigungus.map((sigungu) => (
          <option key={sigungu.code} value={sigungu.name}>
            {sigungu.name}
          </option>
        ))}
      </select>

      <select disabled={!sigungu}>
        <option value="">동을 선택하세요</option>
        {dongs.map((dong) => (
          <option key={dong.code} value={dong.name}>
            {dong.name}
          </option>
        ))}
      </select>


      <div>
      {loading ? <p>Loading...</p> : <ul>{items.map((item, index) => <li key={index}>{JSON.stringify(item)}</li>)}</ul>}
    </div>

        <div className='App4-pay-in'>
          <div>
            <p>급여지급일<span>*</span></p>
          </div>
          <div className='App4-end-date'>
            <span>지원마감일(등록일로부터 최대 30일까지)*</span>
          </div>
        </div>
       
        <div className='App4-pay-intext'>
          <label>
              <div className='App4-money-month'>
                <select className='App4-' value={setSelectedValue11} onChange={handleSelectChange11}>
                  <option value='1'>매월/익월</option>
                  <option value='1'>매월</option>
                  <option value='2'>익월</option>
                </select>
              </div>
            </label>
            <label>
              <div className='App4-money-day'>
                <select className='App4-' value={setSelectedValue12} onChange={handleSelectChange12}>
                  <option value='1'>일</option>
                  <option value='1'>1일</option>
                  <option value='2'>2일</option>
                  <option value='3'>3일</option>
                  <option value='4'>4일</option>
                  <option value='5'>5일</option>
                  <option value='6'>6일</option>
                  <option value='7'>7일</option>
                  <option value='8'>8일</option>
                  <option value='9'>9일</option>
                  <option value='10'>10일</option>
                  <option value='11'>11일</option>
                  <option value='12'>12일</option>
                  <option value='13'>13일</option>
                  <option value='14'>14일</option>
                  <option value='15'>15일</option>
                  <option value='16'>16일</option>
                  <option value='17'>17일</option>
                  <option value='18'>18일</option>
                  <option value='19'>19일</option>
                  <option value='20'>20일</option>
                  <option value='21'>21일</option>
                  <option value='22'>22일</option>
                  <option value='23'>23일</option>
                  <option value='24'>24일</option>
                  <option value='25'>25일</option>
                  <option value='26'>26일</option>
                  <option value='27'>27일</option>
                  <option value='28'>28일</option>
                  <option value='29'>29일</option>
                  <option value='30'>30일</option>
                  <option value='31'>31일</option>
                </select>
              </div>
            </label>
          <div className='App4-money-date'>
            <input type='date' value={setSelectedValue13} onChange={handleSelectChange13}></input>
          </div>
        </div>

        <div className='App4-skill'>
          <div className='App4-save-skill'>
            <p>보유스킬<span>*</span></p>
          </div>
          <div className='App4-tag'>
            <label>
              <div className='App4-vertical'>
                  {/* <input type='text' placeholder='스킬 태그를 입력해주세요'></input> */}
                  <input  
                    type="text" 
                    value={inputValue} 
                    onChange={handleChange} 
                    placeholder="텍스트를 입력하세요" 
      />
              </div>
            </label>
          </div>
          <div className='App4-skill-text'>
            <span>보유스킬은 최대 5개까지 입력 가능합니다.</span>
          </div>
        </div>
        
          <div className='App4-area'>
            <h2>근무지*</h2>
          </div>

        <div className='App4-area-board'>
          <label>
              <div className='App4-special'>
                <select>
                  <option value='1'>시도를 선택해주세요.</option>
                  <option value='1'>서울</option>
                  <option value='2'>부산</option>
                  <option value='3'>대구</option>
                  <option value='4'>인천</option>
                  <option value='5'>광주</option>
                  <option value='6'>대전</option>
                  <option value='7'>울산</option>
                  <option value='8'>세종</option>
                  <option value='9'>강원</option>
                  <option value='10'>경기</option>
                  <option value='11'>경남</option>
                  <option value='12'>경북</option>
                  <option value='13'>전남</option>
                  <option value='14'>전북</option>
                  <option value='15'>충남</option>
                  <option value='16'>충북</option>
                  <option value='17'>제주</option>
                </select>
              </div>
            </label>
            <label>
              <div className='App4-gu'>
                <select>
                  <option value='1'>시도를 선택해주세요.</option>
                </select>
              </div>
            </label>
            <label>
              <div className='App4-dong'>
                <select>
                  <option value='1'>동/읍을 선택해주세요.</option>
                </select>
              </div>
            </label>
        </div>

        <div className='App4-detail'>
          <div className='App4-detail-info'>
            <span>상세정보</span>
          </div>
          
          <div className='App4-detail-text'>
            <QuillCustom></QuillCustom>
          </div>
        </div>

        <div className='App4-manager'>
          <div>
            <h2>3.담당자 정보</h2>
          </div>
        </div>

        {/* <h1>게시팡</h1>
            <div>
                <textarea placeholder="계약직" value={newPost} onChange={(e)=>setNewPost(e.target.value)}>
                </textarea>
                <button onClick={addPost}>게시글 추가</button>
                <h2>게시글 목록</h2>
                <ul>
                    {posts.map((post,index)=>(
                         <li key={index}>{post}게시글</li>
                    ))}
                </ul>
       
            </div> */}
        
        <div className='App4-manager-text'>
          <div className='App4-manager-all'>
            <div className='App4-ma-name'>
              <p>담당자명<span>*</span></p>
            </div>
            <div className='App4-ma-phone'>
              <p>전화번호<span>*</span></p>
            </div>
            <div className='App4-ma-email'>
              <p>이메일<span>*</span></p>
            </div>
          </div>
        </div>

        <div>
          <div className='App4-ma-inputbar'>
            <div className='App4-ma-input1'>
              <input type='text'></input>
            </div>
            <div className='App4-ma-input2'>
              <input type='text'></input>
            </div>
            <div className='App4-ma-input3'>
              <input type='text'></input>
            </div>
          </div>
        </div>

        <div className='App4-bottom-bar'>
          <h2>0</h2>
        </div>

        <div className='App4-cancle'>
          <div>
            <Link to='/recruits/drafts'><button className='App4-cancle-button'>취소</button></Link>
          </div>
            <div className='App4-one-button'>
            <Link to='/recruits/contract/draft-completion'><button className='App4-save-button'>임시 저장</button></Link>
            </div>
            <div className='App4-two-button'>
            <button className='App4-input-button'>바로 등록</button>
            </div>
        </div>

        <div className='App4-ticket'>
          <div className='App4-ticket-copy'>
            <span>등록권 적용</span>
          </div>
          <div className='App4-pay-ticket'>
            <img className='App4-' src={require('./img/payimg.png')}></img>
            <p>등록권 1회 사용 / 잔여: <span>0</span>개</p>
          </div>
          <div className='App4-ticket-text1'>
            <p>포지션을 OKKY 회원들에게 노출하려면 <span>등록권</span>이 필요합니다. 작성하신 포지션은 임시저장 후 <span>회사정보 {'>'} 계약직 채용 포지션 관리</span> 에서 등록권을 사용하여 채용 포지션을 노출할 수 있습니다.</p>
          </div>
          <div className='App4-ticket-text2'>
            <p>또는, 아래 <span>구매하기</span> 버튼을 통해 등록권 구매 페이지로 이동하실 수 있습니다. 작성 중인 글은 자동으로 임시저장 됩니다.

            </p>
          </div>
          <div className='App4-ticket-pay'>
            <Link to='/products/01010101' className='name'>
            <button>구매하기</button>
            </Link>
          </div>
        </div>

      </div>

      <div className='App4-footer'>
                <div className='App4-cat'>
                    <img className='App4-footer-cat' src={require('./img/cat.png')}/>
                </div>
                <div className='App4-footer-bar'>
                    <button type='button'>1</button>
                </div>
              </div>

              <div className='App4-footer2'>
                <div className='App4-footer-logo'>
                    <img className='App4-ok-logo' src={require('./img/okkylogo.png')}/>
                    <h2>All That Developer</h2>
                    <div>
                    <img className='App4-facebook' src={require('./img/facebook.png')}/>
                    </div>
                    <div>
                    <img className='App4-youtube' src={require('./img/youtube.png')}/>
                    </div>
                    <div>
                    <img className='App4-email' src={require('./img/email.png')}/>
                    </div>

                </div>
              </div>
              <div className='App4-footer-middle'>
                <div className='App4-footer-btn'>
                  <div className='App4-button-one'>
                  <button>회사소개</button>
                  </div>
                  <div className='App4-button-two'>
                  <button>공지사항</button>
                  </div>
                  <div className='App4-button-three'>
                  <button>FAQ</button>
                  </div>
                  <div className='App4-button-four'>
                  <button>통합 서비스 이용약관</button>
                  </div>
                  <div className='App4-button-five'>
                  <button>개인정보 처리방침</button>
                  </div>
                </div>
              </div>


                <div className='App4-footer-text'>
                <div className='App4-text-one'>
                <div>상호명:(주)오키코리아|대표명:노상범, 장기진</div>
                </div>
                <div className='App4-text-two'>
                <div>사업자등록번호: 592-87-02037 | 통신판매업신고번호: 제 2022-서울강남-04742호 | 직업정보 제공사업 신고번호: J1200020230009</div>
                </div>
                <div className='App4-text-three'>
                <div>주소: 서울 강남구 봉은사로 303 TGL경복빌딩 502호 (06103) | 고객센터 : jobs@okky.kr (영업시간 평일 10:00~17:00) 주말 · 공휴일 휴무</div>
                </div>
                <div className='App4-text-four'>
                <div>© 2024 (주)오키코리아, Inc. All rights reserved.</div>
                </div>
                </div>

                <div className='App4-last-footer'>
                <div className='App4-sponse'>
                  <h2>SPONSORED BY</h2>
                </div>
                <div>
                <img className='App4-iname' src={require('./img/inames.png')}/>
                </div>
                <div>
                <img className='App4-ncloud' src={require('./img/ncloud.png')}/>
                </div>
                </div>
    </div>
  );
}

