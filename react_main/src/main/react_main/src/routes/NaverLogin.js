import { useEffect, useRef,useState, createContext} from 'react';
import "./NaverLogin.css";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


const NaverLogin = ({setUserInfo }) => {  

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
    const [Nprofile_image, setNprofile_image] = useState('');
    const [userInfo1, setUserInfo1] = useState({});
    const naverRef = useRef();
    
	const { naver } = window
	const NAVER_CLIENT_ID = "lgWAUl7JCwT3BHu8WSXu"; // 발급 받은 Client ID 입력 
	const NAVER_CALLBACK_URL = "http://localhost:3000/signup/oauth2Naver"; // 작성했던 Callback URL 입력
    const [isDuplicateId, setIsDuplicateId] = useState(false);


    const navigate = useNavigate();

    const baseUrl = "http://localhost:3000";
  
    const checkDuplicateId = (e) => {
      axios.get(`${baseUrl}/api/v1/auth/signup/validation/username?username=${e}`)
        .then(response => {
          console.log(response);
          setIsDuplicateId(response.data.data);
          navigate("/signup/oauth2Naver");
        })
        .catch(error => {
          console.error('아이디 중복 검사 에러:', error);
          alert("이미 존재하는 계정입니다.")
          navigate("/signup")
        });
    };

    
      // const initializeNaverLogin = () => {
      //   const naverLogin = new naver.LoginWithNaverId({
      //     clientId: NAVER_CLIENT_ID,
      //     callbackUrl: NAVER_CALLBACK_URL,
      //     isPopup: false,
      //     loginButton: { color: 'green', type: 3, height: 58 },
      //     callbackHandle: true,
      //   });
      //   naverLogin.init();
    
      //   naverLogin.getLoginStatus(async function (status) {
      //     if (status) {
      //       const user = {
      //         id: naverLogin.user.id.replace(/-/, '').slice(0, 16), // "-" 문자 제거
      //         password: "naverP11!!",
      //         email: naverLogin.user.email,
      //         name: naverLogin.user.name,
      //         nickname: naverLogin.user.nickname,
      //         wishtag: wishtag,
      //         emailAgree: emailAgree,
      //         type: type,
      //         serviceAgree: serviceAgree,
      //         personalInfoAgree: personalInfoAgree,
      //         provider: "NAVER",
      //         checkUsernameFlag: checkUsernameFlag
      //       };
      //       localStorage.setItem('user', JSON.stringify(user)); //user storage에다가 저장하기
      //       const user1 = JSON.parse(localStorage.getItem('user')); //user storage에다가 저장하기
      //       console.log(user1);
      //     }
      //   });
      // }

      const initializeNaverLogin = () => {
        const naverLogin = new naver.LoginWithNaverId({
          clientId: NAVER_CLIENT_ID,
          callbackUrl: NAVER_CALLBACK_URL,
              // 팝업창으로 로그인을 진행할 것인지?           
          isPopup: false,
              // 버튼 타입 ( 색상, 타입, 크기 변경 가능 )
          loginButton: { color: 'green', type: 3, height: 58 },
          callbackHandle: true,
        })
        naverLogin.init()
    
               // 선언된 naverLogin 을 이용하여 유저 (사용자) 정보를 불러오는데  
               // 함수 내부에서 naverLogin을 선언하였기에 지역변수처리가 되어  
               // userinfo 정보를 추출하는 것은 지역변수와 같은 함수에서 진행주어야한다.
        
               // 아래와 같이 로그인한 유저 ( 사용자 ) 정보를 직접 접근하여 추출가능하다.
               // 이때, 데이터는 첫 연동시 정보 동의한 데이터만 추출 가능하다.
        
               // 백엔드 개발자가 정보를 전달해준다면 아래 요기! 라고 작성된 부분까지는 
               // 코드 생략이 가능하다.  
          
          naverLogin.getLoginStatus(async function (status) {
          if (status) {
            console.log("성공")
                  // 아래처럼 선택하여 추출이 가능하고, 
            console.log(naverLogin.user)
            const userid = naverLogin.user.getEmail()
            const username = naverLogin.user.getName()
            const user = {
              id: naverLogin.user.id.replace(/-/, '').slice(0, 16), // "-" 문자 제거
              password: "naverP11!!",
              email: naverLogin.user.email,
              name: naverLogin.user.name,
              nickname: naverLogin.user.nickname,
              wishtag: wishtag,
              emailAgree: emailAgree,
              type: type,
              serviceAgree: serviceAgree,
              personalInfoAgree: personalInfoAgree,
              provider: "NAVER",
              checkUsernameFlag: checkUsernameFlag
            };
            localStorage.setItem('user', JSON.stringify(user)); //user storage에다가 저장하기
            window.location.href.includes('access_token') && getToken()
            naverRef.current.children[0].click()
          }
        })     
                // 요기!
      }

	    const userAccessToken = () => {

	}
        
      	const getToken = () => {
		const token = window.location.href.split('=')[1].split('&')[0]
             // console.log, alert 창을 통해 어스코드가 잘 추출 되는지 확인하자! 
        		
             // 이후 로컬 스토리지 또는 state에 저장하여 사용하자!   
                // localStorage.setItem('access_token', token)
		        // setGetToken(token)
	}

    
      const handleNaverLogin = () => {

      }
    
      // useEffect(() => {
      //   initializeNaverLogin()
      //   userAccessToken()
      // }, [])
    
      return (
        <>
          <div ref={naverRef} id="naverIdLogin" />
          <button className='but-box' onClick={initializeNaverLogin}>
            <div className='but-container' alt='navericon'>
              <img className='naver-pic' src={require('./img/naver.png')} />
            </div>
          </button>
        </>
        
      )
}

export default NaverLogin;