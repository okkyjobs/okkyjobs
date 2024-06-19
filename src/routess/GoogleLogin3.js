import { jwtDecode } from "jwt-decode";
import { GoogleLogin } from '@react-oauth/google';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


function GoogleLogin3() {

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
  const [isDuplicateId, setIsDuplicateId] = useState(false);


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
          navigate('/signup/oauth2Google');
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



  useEffect(() => {
    localStorage.removeItem('userinfo');
    console.log("구글로그인");
    const userinfo = {
      id: id,
      password: "pororo1!!1",
      email: email,
      name: name,
      nickname: nickname,
      wishtag: wishtag,
      emailAgree: emailAgree,
      type: type,
      serviceAgree: serviceAgree,
      personalInfoAgree: personalInfoAgree,
      provider: "Google",
      profileImage: "",
      checkUsernameFlag: checkUsernameFlag,
    };
    localStorage.setItem('userinfo', JSON.stringify(userinfo));
  }, []);

  return (
    <GoogleOAuthProvider clientId="746948307914-midde1q7s8btvfmr3lf80to82aut3vdi.apps.googleusercontent.com">
        <GoogleLogin 
          onSuccess={(credentialResponse) => {   checkDuplicateId(jwtDecode(credentialResponse.credential).aud.replace("-", "").split(".")[0].slice(0,16))
            const userinfo = {
              id: jwtDecode(credentialResponse.credential).aud.replace("-", "").split(".")[0].slice(0,16),
              password: "pororo1!!1",
              email: jwtDecode(credentialResponse.credential).email,
              name: jwtDecode(credentialResponse.credential).name,
              nickname: nickname,
              wishtag: wishtag,
              emailAgree: emailAgree,
              type: type,
              serviceAgree: serviceAgree,
              personalInfoAgree: personalInfoAgree,
              provider: "Google",
              profileImage: jwtDecode(credentialResponse.credential).picture,
              checkUsernameFlag: checkUsernameFlag,
            };

            localStorage.setItem('userinfo', JSON.stringify(userinfo));
            console.log(userinfo);
            // {jwtDecode(credentialResponse.credential).aud.replace("-", "").split(".")[0].slice(0,16) === userinfo.id}
            navigate("/");
          }}
          onError={() => {
            console.log("Login Failed");
            
          }}
        >        
            </GoogleLogin>
    </GoogleOAuthProvider>
  );
}

export default GoogleLogin3;