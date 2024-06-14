
import './Account.css';
import Aside from './Aside.js';
import {Link } from 'react-router-dom';
import ResignUp from './ResignUp.js';
import { useState } from 'react';

// const navigateResignUp = () => {
//   navigate("/resignup")
// }

function Account() {

  const userinfo = JSON.parse(localStorage.getItem('user'));
  
  const [email, setEmail] = useState(userinfo.email);
  
  const onChangeEmail = (event) => {
    console.log(event.target.value) //우리의 입력으로 change이벤트가 일어나 변경된 value값
    setEmail(event.target.value)
  }
  
  const [check, isCheck] = useState(false);
  const setting = () => {
    isCheck(!check);
  };

  
  


  return (
    <main className='main-class'>
    <div className='main-box'>
    <div className='main-container'>
        <Aside></Aside>
                <div className='right-box'>
                  <div className='right-first-box'>
                    <div className='email-info-box'>
                      <h2 className='email-info-font'>이메일 정보</h2>
                      <form>
                        <div className='email-box'>
                          <div className='email-input-box'>
                            <input value={email} id="minutes" onChange={onChangeEmail} type='text' autoComplete='email' className='email-input'></input>
                            <div className='email-certification-box'>
                              <button type='button' className='email-certification-but' disabled>
                                <span className='email-certification-but-font'>
                                  <img className='email-pic' aria-hidden='true' src={require('./img/email.png')}/>
                                  <div className='email-certification-font'>
                                    이메일 인증
                                  </div>
                                </span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                      <p className='email-info-font2'>
                        <img className='info-pic' src={require('./img/info.png')} />
                        <span className='email-info-span'>이메일 변경은 변경한 이메일로 인증 요청 메일이 발송되고 해당 이메일을 통해 인증을 정상적으로 완료한 후 최종적으로 반영됩니다.</span>
                      </p>
                    </div>
                  </div>
                  <div className='right-second-box'>
                    <div className='social-box'>
                      <div>
                        <h2 className='social-font'>소셜계정 연동</h2>
                        <p className='social-info-font'>사용하시는 소셜 및 인증 제공자들과 계정을 연동하고 손쉽게 로그인하세요.</p>
                      </div>
                      <ul className='social-link-box'>
                        <li className='acclink-box'>
                          <div className='social-link'>
                            <button className='social-link-but'>
                              <span className='social-span'>Connect with google</span>
                              <span className='social-logo-box'>
                                <img className='social-logo' src={require('./img/google.png')} />
                              </span>
                              <span className='social--link-font'>구글 연결하기</span>
                            </button>
                          </div>
                        </li>
                        <li className='link-box'>
                          <div className='social-link'>
                            <button className='social-link-but'>
                              <span className='social-span'>Connect with naver</span>
                              <span className='social-logo-box'>
                                <img className='social-logo' src={require('./img/naver.png')} />
                              </span>
                              <span className='social--link-font'>네이버 연결하기</span>
                            </button>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className='right-third-box'>
                      <div className='deleteAcc-first-box'>
                        <div>
                          <h2 className='deleteAcc-font'>계정삭제</h2>
                          <div className='deleteAcc-info-box'>
                            <p className='deleteAcc-info-font'>
                              <div className='flex'>
                              회원 탈퇴일로부터 계정과 닉네임을 포함한 계정 정보(아이디/이메일/닉네임)는
                              </div>
                              <div className='flex'>
                              <a className='identify-info'>개인정보 처리방침</a>
                              에 따라 <strong>60일간 보관(잠김)</strong>되며, 60일 경과된 후에는 모든 개인 정보는 완전히 삭제되며 더 이상 복구할 수 없게 됩니다.
                              </div>
                            </p>
                            <p className='deleteAcc-lastLine'>                              
                                작성된 게시물은 삭제되지 않으며, 익명처리 후 OKKY 로 소유권이 귀속됩니다.
                            </p>
                          </div>
                        </div>
                        <ul className='deleteAcc-second-box'>
                          <li className='deleteAcc-second-container'>
                            <div className='deleteAcc-left-box'>
                              <input type='checkbox' className='deleteAcc-check'></input>
                              <label className='deleteAcc-check-font'>계정 삭제에 관한 정책을 읽고 이에 동의합니다.</label>
                            </div>
                            <Link to="/resignup" style={{color: "white", textDecoration: "none", padding: "5px"}}>
                              <button className='deleteAcc-but'>
                                <span className='deleteAcc-pic-box'>
                                  <img className='deleteAcc-pic' src={require('./img/deleteAcc.png')} />
                                </span>
                                회원탈퇴
                              </button>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
                </div>
              </main>
  );
}

export default Account;
