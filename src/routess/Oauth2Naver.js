
import './Oauth2Naver.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import NaverLogin from './NaverLogin';


function Oauth2Naver() {

  const baseUrl = "http://localhost:3000";

  const navigate = useNavigate();

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

  const [check, isCheck] = useState(false);

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
      id, password, email, name, nickname, wishtag, emailAgree, type, serviceAgree, personalInfoAgree, provider , profileImage, checkUsernameFlag
      
    });

    localStorage.setItem('userinfo', JSON.stringify({ id: id, password : password, email: email, name : name, nickname : nickname, wishtag : wishtag, emailAgree : emailAgree, type : type, serviceAgree :  serviceAgree, personalInfoAgree : personalInfoAgree, provider : "Naver", profileImage : profileImage, checkUsernameFlag : checkUsernameFlag}));
        navigate('/oksignup');
    alert("서버에 보내고 서버가 다시 보낸 데이터\n" + JSON.stringify(response.data));
  } catch (err) {
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

// 데이터 불러오기
const userinfo = JSON.parse(localStorage.getItem('userinfo'));

// console.log(user);
    const setInfo = () => {
      const id2 = userinfo.id.replace(/-/, '');
      
      setId(id2);
      setEmail(userinfo.email);
      setName(userinfo.name);
      setProvider("Naver");
      setPassword("hoho1111!");
    }

    const [isDuplicateId, setIsDuplicateId] = useState(false);
  
    const checkDuplicateId = (e) => {
      axios.get(`${baseUrl}/api/v1/auth/signup/validation/username1?username=${e}`)
        .then(response => {
          console.log(response);
          setIsDuplicateId(response.data.data);
    
          // 중복 확인 결과에 따라 페이지 이동
          if (!response.data.data) {
            // 중복 아이디가 없는 경우 /signup 페이지로 이동
            navigate('/signup/oauth2Naver');
          } else {
            // 중복 아이디가 있는 경우 /signup/oauth2Google 페이지로 이동
            navigate('/');
          }
        })
        .catch(error => {
          console.error('아이디 중복 검사 에러:', error);
          
        });
    };

    useEffect(() => {
      console.log(userinfo.id);
      checkDuplicateId(userinfo.id);
    },[])

    const [submitCheck, isSubmitCheck] = useState(true);


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
                    NAVER 계정을 이용한 회원가입
                    </span>
                </div>
                <div>
                  <span className='introduce'>
                    OKKY는 소프트웨어 개발자를 위한 지식공유 플랫폼입니다.
                  </span>
                </div>
                <div className='login-box'>
                  
                </div>
                <div className='logo_box3'>
                <button type='button' className='but-box'>
                    
                    <div className='but-container'>
                  <span className='naver-login-span'>NAVER LOGIN</span>
                      <span className='zero-box'><NaverLogin></NaverLogin></span>
                    </div>
                  </button>
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
                  <button  type='submit'  className='sign-up-but' onClick={setInfo}>
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

export default Oauth2Naver;
