import { useEffect, useRef,useState, createContext} from 'react';
import "./NaverLogin.css";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


const NaverLogin2 = ({setUserInfo }) => {  

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
        axios.get(`${baseUrl}/api/v1/auth/signup/validation/username1?username=${e}`)
          .then(response => {
            console.log(response);
            console.log(response.data.data);
            setIsDuplicateId(response.data.data);
      
            // 중복 확인 결과에 따라 페이지 이동
            if (!response.data.data) {
              // 중복 아이디가 없는 경우 /signup 페이지로 이동
              console.log("아이디 x");
              navigate('/signup/oauth2Naver');
            } else {
              // 중복 아이디가 있는 경우 /signup/oauth2Google 페이지로 이동
              console.log("아이디 o");
              navigate('/');
            }
          })
          .catch(error => {
            console.error('아이디 중복 검사 에러:', error);
          });
      };
    


	const initializeNaverLogin = () => {
        localStorage.removeItem('userinfo');
        localStorage.setItem('userinfo', JSON.stringify({ id: id, password : password, email: email, name : name, nickname : nickname, wishtag : wishtag, emailAgree : emailAgree, type : type, serviceAgree :  serviceAgree, personalInfoAgree : personalInfoAgree, provider : "Naver", profileImage : profileImage, checkUsernameFlag : checkUsernameFlag}));

		const naverLogin = new naver.LoginWithNaverId({
			clientId: NAVER_CLIENT_ID,
			callbackUrl: NAVER_CALLBACK_URL,  
			isPopup: false,
			loginButton: { color: 'green', type: 3, height: 58 },
			callbackHandle: true,
		})
		naverLogin.init()
      
      naverLogin.getLoginStatus(async function (status) {
			if (status) {
                const userinfo = {
                Naver: naverLogin.user,
                id: naverLogin.user.id.replace(/-/, '').slice(0,16), // "-" 문자 제거
                password: "naverP11!!",
                email: naverLogin.user.email,
                name: naverLogin.user.name,
                nickname: naverLogin.user.nickname,
                wishtag: wishtag,
                emailAgree: emailAgree,
                type: type,
                serviceAgree: serviceAgree,
                personalInfoAgree: personalInfoAgree,
                provider: provider,
                checkUsernameFlag: checkUsernameFlag
                };
                localStorage.setItem('userinfo', JSON.stringify(userinfo));
                
                }
                })     
                }
                
	const userAccessToken = () => {
		window.location.href.includes('access_token') && getToken()
	}
	const getToken = () => {
		const token = window.location.href.split('=')[1].split('&')[0]
	}

	const handleNaverLogin = () => {
		naverRef.current.children[0].click()
	}
    const userinfo = JSON.parse(localStorage.getItem('userinfo'));

    useEffect(() => {
        console.log("네이버로그인2");
        // checkDuplicateId(userinfo.id);
		initializeNaverLogin()
		userAccessToken()
	}, [])

	return (
		<>

         <div ref={naverRef} id="naverIdLogin" />
			<button className='but-box' onClick={(e) => {{handleNaverLogin();checkDuplicateId(userinfo.id);}}}>
                <div className='but-container' alt='navericon'>
                <img className='naver-pic' src={require('./img/naver.png')} />
                </div>
            </button>
		</>
	)
}

export default NaverLogin2;