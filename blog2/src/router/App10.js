import { Link } from 'react-router-dom';
import './App10.css';
import { useNavigate, useLocation } from 'react-router-dom';
import { getByTitle } from '@testing-library/react';
import { useState } from 'react';
export default App10;



function App10(items) {

  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate('/recruits/drafts/:1', { state: { 
      message: "안녕"

    }, });
  };


  return (
    <div className="App">
      <div className='_next_'>
          <header className='-App3-header-box'>
            <nav aria-label='Global' className='App3-nav-box'>
              <div className='App3-nav-div1'>
                <div className='App3-head-first-box'>
                  <a className='App3-head-logo-box' href='/'>
                    <span className='App3-head-logo-span'>OKKY Jobs</span>
                    <img className='App3-head-logo' alt='OKKY Logo' src={require('./img/logo4.PNG')}/>
                  </a>
                  <div className='head-words-box space-x-7'>
                    <div className='shrink-0'>
                      <a className='App3-words-box1' href='/contract'>계약직</a>
                    </div>
                    <div className='shrink-1'>
                      <a className='App3-words-box1' href='/fulltime'>정규직</a>
                    </div>
                    <div className='shrink-1'>
                      <a className='App3-words-box1' href='/talents'>Talent</a>
                    </div>
                    <div className='shrink-1'>
                      <a className='App3-words-box1' href='/evalcom'>좋은회사/나쁜회사</a>
                    </div>
                    
                  </div>
                </div>
                <div className='App3-head-second-box'>
                  <div className='App3-head-second-box1'>
                    <a href='/products/01010301'>
                      <button className='App3-buyForShow'>열람권 구매</button>
                    </a>
                    <a href='/products/01010101'>
                      <button className='App3-buyForShow'>등록권 구매</button>
                    </a>
                  </div>
                </div>
                <div className='App3-head-third-box'>
                  <a href='/recruits/drafts'>
                    <button className='company-but'>
                      <img className='company-pic' src={require('./img/company.png')}></img>
                      <span className='company'>구인등록</span>  
                    </button>
                  </a>
                </div>
                <div className='App3-head-forth-box'>
                  <button type='button' aria-haspopup='true' aria-expanded='false'  className='profile-but'>
                    <span className='App3-head-profile-span'>Open user menu</span>
                    <span className='App3-head-profile'>
                      <img className='App3-profile-part' alt='프로필 사진' src={require('./img/profile.png')}/>
                    </span>
                  </button>
                </div>
              </div>
            </nav>
          </header>
              <div className='App3-navbar'>
                <p>0</p>
              </div>
      </div>


       <div className='App10-bodyimg'>
            <div className=''>
            <img className='App10-save'  src={require('./img/savelogo.png')}/>
            </div>
            <div className='App10-save-succed'>
                <p>포지션 임시저장 완료</p>
            </div>
            <div className='App10-save-text'>
                <p>계약직 채용 포지션 등록이 임시 저장되었습니다.<br/> 추후 임시저장 목록 페이지에서 이어서 작성하실 수 있습니다.</p>
            </div>
            <div className='App10-save-btn'>
              
                <button 
                  onClick={handleOnClick}
                ><h1>임시저장 목록</h1>
                </button>

            </div>
        </div>

        <div className='App3-footer'>
                <div className='App3-cat'>
                    <img className='App3-footer-cat' src={require('./img/cat.png')}/>
                </div>
                <div className='App3-footer-bar'>
                    <button type='App3-button'>1</button>
                </div>
              </div>

              <div className='App3-footer2'>
                <div className='App3-footer-logo'>
                    <img className='App3-ok-logo' src={require('./img/okkylogo.png')}/>
                    <h2>All That Developer</h2>
                    <div>
                    <img className='App3-facebook' src={require('./img/facebook.png')}/>
                    </div>
                    <div>
                    <img className='App3-youtube' src={require('./img/youtube.png')}/>
                    </div>
                    <div>
                    <img className='App3-email' src={require('./img/email.png')}/>
                    </div>

                </div>
              </div>
              <div className='App3-footer-middle'>
                <div className='App3-footer-btn'>
                  <div className='App3-button-one'>
                  <button>회사소개</button>
                  </div>
                  <div className='App3-button-two'>
                  <button>공지사항</button>
                  </div>
                  <div className='App3-button-three'>
                  <button>FAQ</button>
                  </div>
                  <div className='App3-button-four'>
                  <button>통합 서비스 이용약관</button>
                  </div>
                  <div className='App3-button-five'>
                  <button>개인정보 처리방침</button>
                  </div>
                </div>
              </div>


                <div className='App3-footer-text'>
                <div className='App3-text-one'>
                <div>상호명:(주)오키코리아|대표명:노상범, 장기진</div>
                </div>
                <div className='App3-text-two'>
                <div>사업자등록번호: 592-87-02037 | 통신판매업신고번호: 제 2022-서울강남-04742호 | 직업정보 제공사업 신고번호: J1200020230009</div>
                </div>
                <div className='App3-text-three'>
                <div>주소: 서울 강남구 봉은사로 303 TGL경복빌딩 502호 (06103) | 고객센터 : jobs@okky.kr (영업시간 평일 10:00~17:00) 주말 · 공휴일 휴무</div>
                </div>
                <div className='App3-text-four'>
                <div>© 2024 (주)오키코리아, Inc. All rights reserved.</div>
                </div>
                </div>

                <div className='App3-last-footer'>
                <div className='App3-sponse'>
                  <h2>SPONSORED BY</h2>
                </div>
                <div>
                <img className='App3-iname' src={require('./img/inames.png')}/>
                </div>
                <div>
                <img className='App3-ncloud' src={require('./img/ncloud.png')}/>
                </div>
                </div>
   
    </div>
  )
};