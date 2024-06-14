import { Button, Container, Navbar , Nav} from 'react-bootstrap';
import './App.css';
import { createContext, useState } from 'react';
import { Route, Routes, Link, useNavigate, Outlet, Router } from 'react-router-dom';
import Profile from './routes/Profile.js';
import Account from './routes/Account.js';
import Career from './routes/Career.js';
import Talent from './routes/Talents.js';
import Bookmarks from './routes/Bookmarks.js';
import Contract from './routes/Contract.js';
import Main from './routes/Main.js';
import Signup from './routes/Signup.js';
import ResignUp from './routes/ResignUp.js';
import Login from './routes/Login.js';
import Candidate from './routes/Candidate.js';
import Career_management from './routes/Career_management.js';
import Oksignup from './routes/Oksignup.js';
import Oauth2Naver from './routes/Oauth2Naver.js';
import Oauth2Google from './routes/Oauth2Google.js';

function App() {
  return (
    <div className="App">
      <body className='body-class'>
        <div className='_next_'>
          <Routes>
            <Route path='/signup' element={<Signup></Signup>}></Route>
            <Route path='/signin' element={<Login></Login>}></Route>
            <Route path='/oksignup' element={<Oksignup></Oksignup>}></Route>
            <Route path='/signup/oauth2Naver' element={<Oauth2Naver></Oauth2Naver>}></Route>
            <Route path='/signup/oauth2Google' element={<Oauth2Google></Oauth2Google>}></Route>
            <Route path='/' element={<LogHeader></LogHeader>}>
              <Route path='' element={<Main></Main>}/>
            </Route>

            <Route path='/settings' element={<Header></Header>}>
              <Route path='profile' element={<Profile/>}/>
              <Route path='account' element={<Account></Account>}/>
              <Route path='career' element={<Career></Career>}/>
              <Route path='talents' element={<Talent></Talent>}/>
              <Route path='bookmarks' element={<Bookmarks></Bookmarks>}/>
              <Route path='contract' element={<Contract></Contract>}/>
              <Route path='contract/application/1' element={<Candidate></Candidate>}/>
              <Route path='career_management/new' element={<Career_management></Career_management>}/>
            </Route>

            <Route path='/resignup' element={<ResignUp/>}></Route>

            <Route path='/*' element={<div>존재하지 않는 페이지입니다.</div>}></Route>
          </Routes>
        </div>
      </body>
      <Routes>
        <Route path='/settings' element={<Footer></Footer>}>
          <Route path='profile' element={<div></div>}/>
          <Route path='account' element={<div></div>}/>
          <Route path='career' element={<div></div>}/>
          <Route path='talents' element={<div></div>}/>
          <Route path='bookmarks' element={<div></div>}/>
          <Route path='contract' element={<div></div>}/>
          <Route path='contract/application/1' element={<div></div>}/>
          <Route path='career_management/new' element={<div></div>}/>
        </Route>

        <Route path='/' element={<Footer></Footer>}>
          <Route path='' element={<div></div>}/>
        </Route>
      </Routes>
  </div>
  );
}

function Header(){
  return(
    <div>
  <header className='header-box'>
  <nav aria-label='Global' className='nav-box'>
    <div className='nav-div1'>
      <div className='head-first-box'>
        <a className='head-logo-box' href='/'>
          <span className='head-logo-span'>OKKY Jobs</span>
          <img className='head-logo' alt='OKKY Logo' src={require('./img1/logo4.PNG')}/>
        </a>
        <div className='head-words-box space-x-7'>
          <div className='shrink-0'>
            <a className='words-box1' href='/contract'>계약직</a>
          </div>
          <div className='shrink-1'>
            <a className='words-box1' href='/fulltime'>정규직</a>
          </div>
          <div className='shrink-1'>
            <a className='words-box1' href='/talents'>Talent</a>
          </div>
          <div className='shrink-1'>
            <a className='words-box1' href='/evalcom'>좋은회사/나쁜회사</a>
          </div>
          <div className='words-box-space'></div>
          <div className='words-box-mid-space'>
          </div>
        </div>
      </div>
      <div className='head-second-box'>
        <div className='head-second-box1'>
          <a href='/products/01010301'>
            <button className='buyForShow'>열람권 구매</button>
          </a>
          <a href='/products/01010101'>
            <button className='buyForShow'>등록권 구매</button>
          </a>
        </div>
      </div>
      <div className='head-third-box'>
        <a href='/recruits/drafts'>
          <button className='company-but'>
            <img className='company-pic' src={require('./img1/company.png')}></img>
            <span className='company'>회사 등록</span>  
          </button>
        </a>
      </div>
      <div className='head-forth-box'>
        <button type='button' aria-haspopup='true' aria-expanded='false'  className='profile-but'>
          <span className='head-profile-span'>Open user menu</span>
          <span className='head-profile'>
            <a href='/settings/profile'>
            <img className='profile-part' alt='프로필 사진' src={require('./profile.png')}/>
            </a>
          </span>
        </button>
      </div>
    </div>
  </nav>
</header>
  <Outlet></Outlet>
</div>
  )
}

function LogHeader(){
  return(
    <div>
  <header className='header-box'>
  <nav aria-label='Global' className='nav-box'>
    <div className='nav-div1'>
      <div className='head-first-box'>
        <a className='head-logo-box' href='/'>
          <span className='head-logo-span'>OKKY Jobs</span>
          <img className='head-logo' alt='OKKY Logo' src={require('./img1/logo4.PNG')}/>
        </a>
        <div className='head-words-box'>
          <div className='shrink-0'>
            <a className='words-box1' href='/contract'>계약직</a>
          </div>
          <div className='shrink-1'>
            <a className='words-box1' href='/fulltime'>정규직</a>
          </div>
          <div className='shrink-1'>
            <a className='words-box1' href='/talents'>Talent</a>
          </div>
          <div className='shrink-1'>
            <a className='words-box1' href='/evalcom'>좋은회사/나쁜회사</a>
          </div>
          <div className='words-box-space'></div>
          <div className='words-box-mid-space'>
          </div>
        </div>
      </div>
      <div className='head-second-box'>
        <div className='head-second-box1'>
          <a href='/products/01010301'>
            <button className='buyForShow'>열람권 구매</button>
          </a>
          <a href='/products/01010101'>
            <button className='buyForShow'>등록권 구매</button>
          </a>
        </div>
      </div>
      <div className='head-third-box'>
        <a href='/recruits/drafts'>
          <button className='header-signup-but'>
            <span className='header-signup-font'>회원가입</span>  
          </button>
        </a>
      </div>
      <div className='head-forth-box'>
        <button type='button' aria-haspopup='true' aria-expanded='false'  className='profile-but'>
          <span className='head-profile-span'>Open user menu</span>
          <a href='/products/01010301'>
            <button className='buyForShow'>열람권 구매</button>
          </a>
        </button>
      </div>
    </div>
  </nav>
</header>
  <Outlet></Outlet>
</div>
  )
}

function Footer(){
  return(
    <div className='footer-box'>
    <div className='footer'>
      <div className='cat-box'>
        <div className='cat'>
          <img className='footer-cat' src={require('./img/cat.png')}/>
        </div>
      </div>
      <div className='footer-bar'>
        <button type='button'>1</button>
      </div>

      <div className='footer2-box'>
        <div className='footer2'>
          <div className='footer-logo'>
            <div className='ok-logo-box'>
              <img className='ok-logo' src={require('./img/logo.png')}/>
            </div>
            <h2>All That Developer</h2>
            <div className='logo-container'>
              <div>
                <img className='facebook' src={require('./img/facebook.png')}/>
              </div>
              <div>
                <img className='youtube' src={require('./img/youtube.png')}/>
              </div>
              <div>
                <img className='email' src={require('./img/email_under.png')}/>
              </div>
            </div>
          </div>
        </div>
        <div className='footer2-box-fonts'>
          <div className='footer-middle-box'>
            <div className='footer-middle'>
              <div className='footer-btn'>
                <div className='button-one'>
                  <button>회사소개</button>
                </div>
                <div className='button-two'>
                  <button>공지사항</button>
                </div>
                <div className='button-three'>
                  <button>FAQ</button>
                </div>
                <div className='button-four'>
                  <button>통합 서비스 이용약관</button>
                </div>
                <div className='button-five'>
                  <button>개인정보 처리방침</button>
                </div>
              </div>
            </div>

        </div>
        <div className='footer-text'>
            <div className='text-one'>
              <span>상호명:(주)오키코리아|대표명:노상범, 장기진</span>
            </div>
            <div className='text-two'>
              <span>사업자등록번호: 592-87-02037 | 통신판매업신고번호: 제 2022-서울강남-04742호 | 직업정보 제공사업 신고번호: J1200020230009</span>
            </div>
            <div className='text-three'>
              <span>주소: 서울 강남구 봉은사로 303 TGL경복빌딩 502호 (06103) | 고객센터 : jobs@okky.kr (영업시간 평일 10:00~17:00) 주말 · 공휴일 휴무</span>
            </div>
            <div className='text-four'>
              <span>© 2024 (주)오키코리아, Inc. All rights reserved.</span>
            </div>
          </div>
        </div>
        <div className='foot-middle-box2'>
          <div className='last-footer-box'>
            <div className='last-footer'>
              <h2>SPONSORED BY</h2>
            </div>
            <div className='last-footer-img'>
              <img className='iname' src={require('./img/inames.png')}/>
              <img className='ncloud' src={require('./img/ncloud.png')}/>
            </div>
          </div>
       </div>


    </div>
  </div>
  <Outlet></Outlet>
</div>

  )
}




export default App;
