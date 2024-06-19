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

    useEffect(() => {
        console.log("네이버로그인");
		initializeNaverLogin()
		userAccessToken()
	}, [])

	return (
		<>

         <div ref={naverRef} id="naverIdLogin" />
			<button className='but-box' onClick={handleNaverLogin}>
                <div className='but-container' alt='navericon'>
                <img className='naver-pic' src={require('./img/naver.png')} />
                </div>
            </button>
		</>
	)
}

export default NaverLogin;