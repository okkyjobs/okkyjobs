import logo from './logo.svg';
import './Login.css';
import axios from 'axios';
import { useState, useEffect, } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import NaverLogin2 from './NaverLogin2';
import GoogleLogin3 from './GoogleLogin3';


function Login() {

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
  const [profileImage, setProfileImage] = useState('');
  const [checkUsernameFlag, setCheckUsernameFlag] = useState(true);
  const [loginStatus, setLoginStatus] = useState(false);
  const [isDuplicateId, setIsDuplicateId] = useState(false);
  const [inputCount, setInputCount] = useState(0);
  const checkDuplicateId = (e) => {
    
    axios.get(`${baseUrl}/api/v1/auth/signup/validation/username?username=${e.target.value}`)
      .then(response => {
        setIsDuplicateId(!response.data.data);
      })
      .catch(error => {
        console.error('아이디 중복 검사 에러:', error);
      });
  };

  const handleIdChange = (e) => {
    setId(e.target.value);
    console.log(`${id}`);
    checkDuplicateId(e);
    onInputHandler(e);
  };
  
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    axios.get(`${baseUrl}/api/v1/auth/login?id=${id}&password=${password}`, { id, password })
      .then(response => {

        if (response.data) {
          setLoginStatus(true);
          console.log(response.data.user);
          setId(response.data.user.user_id);
          setPassword(response.data.user.user_password);
          setEmail(response.data.user.user_email);
          setName(response.data.user.user_name);
          setNickname(response.data.user.user_nickname);
          setWishtag(response.data.user.user_wishtag);
          setEmailAgree(response.data.user.user_email_agree);
          setType(response.data.user.user_type);
          setServiceAgree(response.data.user.service_agree);
          setPersonalInfoAgree(response.data.user.personal_info_agree);
          setProvider(response.data.user.user_provider);
          localStorage.setItem('user', JSON.stringify({ id: response.data.user.user_id, password : response.data.user.user_password, email: response.data.user.user_email, name : response.data.user.user_name, nickname : response.data.user.user_nickname, wishtag : response.data.user.user_wishtag, emailAgree : response.data.user.user_email_agree, type : response.data.user.user_type, serviceAgree :  response.data.user.service_agree, personalInfoAgree : response.data.user.personal_info_agree, provider : response.data.user.user_provider, profileImage : profileImage, checkUsernameFlag : checkUsernameFlag}));
          // const user = JSON.parse(localStorage.getItem('user'));
          // console.log(user);
          // alert("로그인 성공");
          navigate("/");
          } else {
            setLoginStatus(false);
        }
      })
      .catch(error => {
        console.error('로그인 에러:', error);
        setLoginStatus(false);
      });
  };


  const onInputHandler = (e) => {
    setInputCount(e.target.value.length);
  };

  return (
    <div className='App'>
      <div className='box'>
        <div className='center_box'>
           <div className='sign_in_logo'>
                <img className='logo' src={require('./logo.png')}/>
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

                  <GoogleLogin3></GoogleLogin3>

                    </div>
                  </button>
                  <NaverLogin2></NaverLogin2>


                  </div>
                  <div className='loginbox'>
                    <div className='loginbarfont-box'>
                      <div className='loginbarfont-box-line'>
                        <div className='login-line'></div>
                        <div className='loginbarfont'>OKKY 아이디로 로그인</div>
                        <div className='login-line'></div>
                      </div>


                    </div>
                  </div>
                  <div className='input-box'>
            <div className='id'>
              <span className='id-font'>아이디</span>
              <input value={id} type='text' minLength={4} maxLength={16}  onChange={handleIdChange} className='id-input'></input>
              <div className='id-info'>
                {inputCount <= 3 && <span className='duplicate-message'>아이디는 4자리 이상입니다.</span>}
              <p className='p-span-count'> 
            <span>{inputCount}</span>
            <span>/16 자</span>
          </p>
          </div>
            </div>
            <div className='password'>
              <span className='password-font'>비밀번호</span>
              <input value={password} type='password' onChange={handlePasswordChange} className='password-input'></input>
            </div>
          </div>
                  <div className='findc-box'>
                    <span className='findac'>계정찾기</span>
                  </div>
          {loginStatus === true && <Link to="/"><div className='login-but1'>
            <button type='submit' className='login-but-text1' onClick={handleLogin}>
              <span className='.sign-up-but2-font'>로그인</span>
            </button>
          </div></Link>}
              {loginStatus === false && <div className='login-but1'>
            <button type='submit' className='login-but-text1' onClick={handleLogin}>
              <span className='.sign-up-but2-font'>로그인</span>
            </button>
          </div>}
                  <div className='sign-up-box'>
                    <span className='sign-up-but1'>아직 회원이 아니신가요?   </span>
                    <a href='/signup'>
                    <span className='sign-up-but2'>회원가입</span>
                    </a>
                  </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
