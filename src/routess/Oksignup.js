import { Link, Outlet } from 'react-router-dom';
import './Oksignup.css'
import { useEffect, useState } from 'react';

function Oksignup(){  


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

  useEffect(() => {
  const storedUserinfo = JSON.parse(localStorage.getItem('userinfo'));
  if (storedUserinfo) {
    setId(storedUserinfo.id);
    setPassword(storedUserinfo.password);
    setEmail(storedUserinfo.email);
    setName(storedUserinfo.name);
    setNickname(storedUserinfo.nickname || ''); // 초기값 설정
    setWishtag(storedUserinfo.wishtag || ''); // 초기값 설정
    setEmailAgree(storedUserinfo.emailAgree || 0); // 초기값 설정
    setType(storedUserinfo.type || 0); // 초기값 설정
    setServiceAgree(storedUserinfo.serviceAgree || 0); // 초기값 설정
    setPersonalInfoAgree(storedUserinfo.personalInfoAgree || 0); // 초기값 설정
    setProvider(storedUserinfo.provider || '');
    setCheckUsernameFlag(storedUserinfo.checkUsernameFlag || true); // 초기값 설정
    console.log(storedUserinfo);
  }
}, []);

  const userinfo = JSON.parse(localStorage.getItem('userinfo'));
  console.log(userinfo);
  // console.log(userinfo.name);
    return(
        <div className='OkApp'>
        <div className='Okbox'>
          <div className='Okcenter_box'>
             <div className='Oksign_in_logo'>
                  <img className='Oklogo' src={require('./img/signup-pic.png')}/>
              </div>
              <div className='Okcenter'>
                  <div className='Okwelcome-box'>
                      <span className='Okwelcome'>
                      환영합니다!
                      </span>
                      <span className='Okwelcome'>
                      {userinfo.nickname}님
                      </span>
                  </div>
                  <div className='Okintro-box'>
                    <div className='Okintro-container'>
                    <span className='Okintroduce'>
                      회원가입이 성공적으로 완료되었습니다.<br/>
                      아래 로그인 버튼을 눌러 다시한번 로그인 해주세요.
                    </span>
                    </div>
                  </div>
                    <div className='Oksignup-but-box'>
                          <Link to={"/signin"} className='Oklogin-but'>
                        <div >
                        <button type='Oksubmit' className='Oklogin-but-text'><span className='Ok.sign-up-but2-font'>로그인</span></button>
                        </div>
                        </Link>
                    </div>
              </div>
          </div>
        </div>
      </div>
    )
}

export default Oksignup;