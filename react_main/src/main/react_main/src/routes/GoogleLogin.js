import { jwtDecode } from "jwt-decode";
import { GoogleLogin } from '@react-oauth/google';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


function GoogleLogin2() {

  const navigate = useNavigate();
    
  const [usercode, setUsercode] = useState('');
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
    axios.get(`${baseUrl}/api/v1/auth/signup/validation/username?username=${e}`)
      .then(response => {
        console.log(response);
        setIsDuplicateId(response.data.data);
        if(!response.data.data){
          alert("이미 존재하는 계정입니다.")
          navigate("/signup")
        }
      })
      .catch(error => {
        console.error('아이디 중복 검사 에러:', error);
      });
  };

  return (
    <GoogleOAuthProvider clientId="746948307914-midde1q7s8btvfmr3lf80to82aut3vdi.apps.googleusercontent.com">
      <Link to="/signup/oauth2Google">
        <GoogleLogin
          onSuccess={(credentialResponse) => { checkDuplicateId(jwtDecode(credentialResponse.credential).aud.replace("-", "").split(".")[0].slice(0,16))
            const user = {
              usercode: usercode,
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
            console.log(user.id);
            console.log(jwtDecode(credentialResponse.credential));
            console.log(jwtDecode(credentialResponse.credential).picture);
            localStorage.setItem('user', JSON.stringify(user));
            console.log(user);
            navigate("/signup/oauth2Google");
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
      </Link>
    </GoogleOAuthProvider>
  );
}

export default GoogleLogin2;