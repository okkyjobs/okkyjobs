
import './Signup.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import NaverLogin from './NaverLogin';
import GoogleLogin2 from './GoogleLogin';

function Signup() {

  const [isDuplicateId, setIsDuplicateId] = useState(true);
  const [inputCount, setInputCount] = useState(0);
  const [passwordCount, setPasswordCount] = useState(0);

  const checkDuplicateId = (e) => {
    axios.get(`${baseUrl}/api/v1/auth/signup/validation/username?username=${e.target.value}`)
      .then(response => {
        console.log(response);
        console.log(response.data.data);
        if(response.data.data){ // 만약 회원 아이디를 사용할 수 있으면 -> true
            setIsDuplicateId(response.data.data); // setIsDuplicateId -> true 아이디 사용 허가
        }else{
          console.log("setIsDuplicateId : false, 중복된 아이디 사용불가");
          setIsDuplicateId(response.data.data);
        }
      })
      .catch(error => {
        console.error('아이디 중복 검사 에러:', error);
      });
  };

  const onInputHandler = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'id':
        setId(value);
        setInputCount(value.length);
        break;
      case 'password':
        setPassword(value);
        setPasswordCount(value.length);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'name':
        setName(value);
        break;
      case 'nickname':
        setNickname(value);
        break;
      case 'wishtag':
        setWishtag(value);
        break;
      default:
        break;
    }
  };

  const navigate = useNavigate();

  const baseUrl = "http://localhost:3000";

  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');
  const [wishtag, setWishtag] = useState('');
  const [emailAgree, setEmailAgree] = useState(0);
  const [type, setType] = useState(0);
  const [serviceAgree, setServiceAgree] = useState(0);
  const [personalInfoAgree, setPersonalInfoAgree] = useState(0);
  const [provider, setProvider] = useState('');
  const [checkUsernameFlag, setCheckUsernameFlag] = useState(true);

  const [idError, setIdError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [nicknameError, setNicknameError] = useState(false);
  const [wishtagError, setWishtagError] = useState(false);
  
  const [check, isCheck] = useState(false);

  const [submitCheck, isSubmitCheck] = useState(true);

  const setting = () => {
    isCheck(!check);
  };
  
  useEffect(() => {
    const valueToUpdate = check ? 1 : 0;
    setEmailAgree(valueToUpdate);
  }, [check]);




const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await axios.post(baseUrl + "/api/v1/auth/signup", {
      id, password, email, name, nickname, wishtag, emailAgree, type, serviceAgree, personalInfoAgree ,provider, checkUsernameFlag
    });
    localStorage.setItem('user', JSON.stringify({id: id, password : password, email: email, name : name, nickname : nickname, wishtag : wishtag, emailAgree : emailAgree, type : type, serviceAgree :  serviceAgree, personalInfoAgree : personalInfoAgree, provider : provider, checkUsernameFlag : checkUsernameFlag}));
    alert("회원가입 성공!")
    navigate("/oksignup")
    // alert("서버에 보내고 서버가 다시 보낸 데이터\n" + JSON.stringify(response.data));
    } catch (err) {
      // alert("이미 존재하는 아이디 입니다.");
      alert("모든 정보를 기입해주세요.");
      
      isSubmitCheck(false);
      console.log(submitCheck);
      console.log(err);
      
      }
};

const dataList = [
  {id:1, name:'chk1', text:'통합 서비스 이용약관', isChk:false, link:"/legal/terms", setdata: 'serviceAgree'},
  {id:2, name:'chk2', text:'개인정보 처리방침', isChk:false, link: "/legal/privacy", setdata: 'personalInfoAgree'},
]

const [data1, setData1] = useState(dataList)

const changeInput = (e) => {
    const {name, checked} = e.target
    const valueToUpdate = checked ? 1 : 0

    if( name === 'all') {
        setData1(data1.map(item => {
          if(item.setdata === 'serviceAgree') setServiceAgree(valueToUpdate);
          if(item.setdata === 'personalInfoAgree') setPersonalInfoAgree(valueToUpdate);
           
            return {
                ...item,
                isChk: checked
            }
        }))
    } else {
      setData1(data1.map(item => {
        if(item.name === name) {
          if(item.setdata === 'serviceAgree') setServiceAgree(valueToUpdate);
          if(item.setdata === 'personalInfoAgree') setPersonalInfoAgree(valueToUpdate);
          return {...item, isChk: checked};
      } else {
          return item;
      }
      }))
    }
}
// console.log(idError);

// useEffect(() => {
//   localStorage.removeItem('user')
//   if(submitCheck){
//     if(isDuplicateId){
//       setIdError(false);
//     }else{
//       setIdError(true);
//     }
//   }
// }, []);

  return (
    <div className='App'>
      <div className='box'>
        <div className='center_box'>
           <div className='sign_in_logo'>
                <Link to="/">
                  <img className='logo' src={require('./logo.png')}/>
                </Link>
            </div>
            <div className='center'>
                <div className='welcome-box'>
                    <span className='welcome'>
                    OKKY에 오신것을 환영합니다.
                    </span>
                </div>
                <div>
                  <span className='introduce'>
                    OKKY는 소프트웨어 개발자를 위한 지식공유 플랫폼입니다.
                  </span>
                </div>
                <div className='login-box'>
                  <span className='login'>
                  SNS 로그인
                  </span>
                </div>
                <div className='logo_box3'>
                
                  <button type='button' className='but-box'>
                    
                    <div className='but-container'>
                      <GoogleLogin2></GoogleLogin2>
                      
                    </div>
                  </button>
                    <NaverLogin></NaverLogin>

                  </div>
                  
                  <div className='loginbox'>
                    <div className='loginbarfont-box'>
                      <div className='loginbarfont-box-line'>
                        <div className='signup-line'></div>
                        <div className='loginbarfont'>회원가입에 필요한 기본정보를 입력해주세요</div>
                        <div className='signup-line'></div>
                      </div>

                    </div>
                  </div>
                  <div className='input-box'>
                    <div onSubmit={handleSubmit} className='id'>
                      <span className='id-font'>아이디</span>
                      <input name='id' minLength={4} maxLength={16}  onChange={(e) => {checkDuplicateId(e);onInputHandler(e);}} placeholder='4-15자 이내로 입력해주세요' type='text' className='id-input'></input>
                      <div className='id-info'>
                      {/* (!submitCheck && ((id === "") && <span className='duplicate-message'>아이디를 입력해주세요</span>)) && */}
                      {/* 아이디를 입력하지 않고, 회원가입 버튼을 누르면 submitCheck가 false되면서 위 문구 발생 */}
                      {!submitCheck && ((inputCount >=3) && !isDuplicateId && <span className='duplicate-message'>이미 사용 중인 아이디입니다.</span>)}
                      {!submitCheck && (!isDuplicateId || ((inputCount) <= 3 && <span className='duplicate-message'>아이디는 최소 4자 이상 입력하세요.</span>))}
                      {/* {
                        submitCheck  
                          ? (   // 만약 submitcheck가 true면
                            (inputCount >= 4 && !isDuplicateId) // 만약 모든 조건
                              ? null
                              : (isDuplicateId
                                ? <span className='duplicate-message'>이미 사용 중인 아이디입니다.</span>
                                : <span className='duplicate-message'>아이디는 최소 4자 이상 입력하세요.</span>)
                          )
                          : (  // 만약 submitcheck가 false면
                            isDuplicateId
                              ? null
                              : <span className='duplicate-message'>아이디는 최소 4자 이상 입력하세요.</span>
                          )
                      } */}
                      {/* {((!submitCheck && isDuplicateId) && (inputCount) <= 3) && <span className='duplicate-message'>아이디는 최소 4자 이상 입력하세요.</span>} */}
                      {/* //모든 정보가 기입되었으면 id중복검사 체크 */}
                      {/* {submitCheck ? (isDuplicateId ? null : <span className='duplicate-message'>이미 사용 중인 아이디입니다.</span>)
                          : ((inputCount >= 4) && !isDuplicateId
                              ? null
                              : <span className='duplicate-message'>아이디는 최소 4자 이상 입력하세요.</span>)
                      } */}

                      {/* {!submitCheck && (inputCount >= 3) ? (!isDuplicateId && <span className='duplicate-message'>이미 사용 중인 아이디입니다.</span>) : <span className='duplicate-message'>아이디는 최소 4자 이상 입력하세요.</span>} */}
                      {/* {
                        !submitCheck && (inputCount >= 4)
                          ? !isDuplicateId
                            ? null
                            : <span className='duplicate-message'>이미 사용 중인 아이디입니다.</span>
                          : <span className='duplicate-message'>아이디는 최소 4자 이상 입력하세요.</span>
                      } */}
                      {/* 아이디를 입력 시, 이미 있는 아이디라면 위 문구 발생*/}
                        <p className='p-span-count'> 
                          <span>{inputCount}</span>
                          <span>/16 자</span>
                        </p>
                    </div>
                    </div>
                    <div onSubmit={handleSubmit} className='password'>
                      <span className='password-font'>비밀번호</span>
                      <input value={password} onChange={(e) => {setPassword(e.target.value)}} placeholder='최소 8자 이상(알파벳, 숫자 필수)' type='password' className='password-input'></input>
                      {!submitCheck && !isDuplicateId || ((passwordCount) <= 8 && <span className='duplicate-message'>비밀번호는 최소 8자 이상 입력하세요.</span>)}
                      {!submitCheck && ((password === "") && <span className='duplicate-message'>알파벳, 숫자를 조합한 비밀번호를 입력하세요.</span>)}
                    </div>
                    <div onSubmit={handleSubmit} className='password'>
                      <span className='password-font'>이메일</span>
                      <input onChange={(e) => {setEmail(e.target.value)}} placeholder='munchkin@okky.kr' type='text' className='password-input'></input>
                      {!submitCheck && ((email === "") && <span className='duplicate-message'>이메일을 입력해주세요</span>)}
                    </div>
                    <div onSubmit={handleSubmit} className='password'>
                      <span className='password-font'>실명</span>
                      <input onChange={(e) => {setName(e.target.value)}} placeholder='홍길동' type='text' className='password-input'></input>
                      {!submitCheck && ((name === "") && <span className='duplicate-message'>이름을 입력해주세요</span>)}
                    </div>
                    <div onSubmit={handleSubmit} className='password'>
                      <span className='password-font'>닉네임</span>
                      <input onChange={(e) => {setNickname(e.target.value)}} placeholder='별명을 알파벳, 한글, 숫자를 20자 이하로 입력해주세요.' type='text' className='password-input'></input>
                      {!submitCheck && ((nickname === "") && <span className='duplicate-message'>닉네임을 입력해주세요</span>)}
                    </div>
                  </div>
                  <div className='tag-font-box'>
                    <div className='tag-font'>관심태그</div>
                    <div className='tag-font2'>이 정보는 OKKY와 커뮤니티에 의해 만들어진 정보들로 개인 맞춤 정보를 제공하기 위해 사용됩니다.</div>
                  </div>
                  <div className='tags-box'>
                    <div onSubmit={handleSubmit} className='password'>
                        <span className='password-font'>태그</span>
                        <input onChange={(e) => {setWishtag(e.target.value)}} placeholder='태그를 입력해주세요.' type='text' className='password-input'></input>
                        {!submitCheck && ((wishtag === "") && <span className='duplicate-message'>태그를 입력해주세요</span>)}
                    </div>
                  </div>


                  <div className='email-box-2'>
                    <div className='email-container'>
                      <div className='email-font'>이메일 수신동의</div>
                      <button onClick={setting} type='button' tabIndex='0' className={check ? "under-but1-box1" : "under-but1-box2"}>
                        <div onClick={setting} className={check ? 'move-ball1' : 'move-ball2'}>
                        <span onClick={setting} aria-hidden='true' className={check ? 'under-but1-span1' : 'under-but1-span2'}></span>
                        </div>
                      </button>
                    </div>
                    <div className='email-font2'>OKKY에서 주최하는 다양한 이벤트, 정보성 뉴스레터 및 광고 수신여부를 설정할 수 있습니다.</div>
                    {!submitCheck && ((!check) && <div className='div-left'><span className='duplicate-message'>이메일 수신동의가 필요합니다.</span></div>)}
                  </div>

                  <div className='agree-box'>
                    <div className='agree-font'>약관동의</div>

                    <div className='all-agree-box'>
                      <div className='all-agree-container'>    
                        <input className='all-agree-check' type="checkbox" name="all" onChange={changeInput} 
                        checked={
                            data1.filter(item => item.isChk !== true).length < 1
                            
                            }/>
                        <label className='all-agree-font'>
                          <span className='all-agree-font1'>전체동의</span>
                          <span className='all-agree-font2'>전체동의를 선택하시면 아래의 모든 약관에 동의하게 됩니다.</span>
                        </label>
                      </div>
                      <div className='all-agree-container2'>
                      {
                        data1.map( item => 
                          <p className='all-agree-container-box' key={item.id}>
                            <div>
                              <div className='all-agree-container-box'>
                              <input className='all-agree-check' type="checkbox" name={item.name} checked={item.isChk} onChange={changeInput}/>
                              <label className='all-agree-font'><span className='all-agree-font1'>{item.text}</span><span className='all-agree-font3'><Link to={item.link}>보기</Link></span></label>
                              </div>
                              <div>
                           {!submitCheck && ((!item.isChk) && <div className='div-left'><span className='duplicate-message'>{item.text} 동의가 필요합니다.</span></div>)}
                           </div>
                           </div>
                          </p>
                          )
                      }
            </div>
                    </div>
                  </div>

                  <div>로봇어쩌고</div>
                  <form onSubmit={handleSubmit}>
                  <button  type='submit'  className='sign-up-but'>
                    <div className='sign-up-but-text'><span className='sign1-up-but2-font'>회원가입</span></div>
                  </button>
                  </form>



                  <div className='sign-up-box'>
                    <span className='sign-up-but1'>아직 회원이 아니신가요?</span>
                    <Link to="/signin" className='sign-up-but2'>로그인</Link>
                  </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
