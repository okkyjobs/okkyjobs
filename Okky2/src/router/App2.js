// import logo from './logo.svg';
import './App2.css';



function App2() {
  return (
  
    <div className="App2">
      <div className='top-main'>
        <div className="top">
          <div>
      <img className="logo" src={require('./img/logo.png')}/>
      <img className="a" src={require('./img/Contract.png')}/>
      <button className='b'>정규직</button>
      <img className="c" src={require('./img/Talent.png')}/>
      <img className="d" src={require('./img/badgood.png')}/>
          </div>
        <div>
      <img className="e" src={require('./img/Reading.png')}/>
      <img className="f" src={require('./img/registration right.png')}/>
      <img className="g" src={require('./img/Registration.png')}/>
        </div>
      </div>  
      </div>
      
   

<main className='main-class2'>
          <div className='main-box2'>
            <div className='main-container2'>
              <aside className='left-box2'>
                <nav className='left-box-nav2'>
                  <div className='left-first-box2'>
                    <div className='myAccount'>내 계정</div>
                    <div className='profile'>
                      <a className='profile-a'style={{ textDecoration: "none"}} href='/settings/profile'>
                        <img className='profile-logo' src={require('./img1/profile.png')}/>
                        <span className='profile-font'>프로필</span>
                      </a>
                      <a className='manageAcc-a'style={{ textDecoration: "none"}} href='/settings/account'>
                        <img className='mAcc-logo' src={require('./img1/manageAccount.png')}/>
                        <span className='manageAccount-font'>계정 관리</span>
                      </a>
                    </div>
                  </div>
                  <div className='line'>
                    <div className='Jobs-font'>기업 계정</div>
                    <div>
                      <a className='career-manage22'style={{ textDecoration: "none"}} href='Okky2'>
                        <img className='pic-class' src={require('./img/office_0529.jpg')}></img>
                        <span className='career-font'>회사 정보</span>
                      </a>
                      <a className='career-manage2'style={{ textDecoration: "none"}} href='Okky3_1'>
                        <img className='pic-class' src={require('./img/bye2-1.png')}></img>
                        <span className='career-font'>구매 이력관리</span>
                      </a>
                      <a className='career-manage3'style={{ textDecoration: "none"}} href='Okky4'>
                        <img className='pic-class31' src={require('./img/shoping2.png')}></img>
                        <span className='career-font'>사용 이력관리</span>
                      </a>
                      <a className='career-manage4'style={{ textDecoration: "none"}} href='Okky5'>
                        <img className='pic-class' src={require('./img/young.png')}></img>
                        <span className='career-font'>채용 담당자 관리</span>
                      </a>
                    </div>
                  </div>
                  <div className='line'>
                    <div className='Jobs-font'>Jobs</div>
                    <div>
                      <a className='career-manage1'style={{ textDecoration: "none"}} href='Okky6'>
                        <img className='pic-class' src={require('./img1/eryukseo.png')}></img>
                        <span className='career-font'>관심 구직자</span>
                      </a>
                      
                      <a className='career-manage3'style={{ textDecoration: "none"}} href='Okky7'>
                        <img className='pic-class' src={require('./img1/position.png')}></img>
                        <span className='career-font'>상세 이력서 열람</span>
                      </a>
                      <a className='career-manage5' style={{ textDecoration: "none"}}href='Okky8'>
                        <img className='pic-class' src={require('./img1/positionEryuk.png')}></img>
                        <span className='career-font'>채용 포지션 관리</span>
                      </a>
                    </div>
                  </div>
                </nav>
              </aside>
              </div>
              </div>
              </main>

      <div className='company-main'>
        <form action='/Office_code' method='post'>

        
        <div className='company'>회사정보</div>
      
        <img className="company-img" src={require('./img/conpanyimg.png')}/>
        <input className="company-code-file2" type='file' ></input>

        <div className='company-name' name='office_name'>회사명</div>
        <input name='office_name' type='text' className='company-name-input'></input>

        <div  className='company-number' name='office_authcode'>사업자등록번호</div>
        <input name='office_authcode' type='text' className='company-number-input'></input>

        <div className='Representative-phone'>대표 연락처</div>
        <input name='boss_phone' type='text' className='Representative-input'></input>

        <div className='Representative-email'>대표 이메일</div>
        <input name='boss_email' type='text' className='Representative-email-input'></input>

        <div className='company-code'>사업자등록증</div>
        <input name='registration' className="company-code-file" type='file' ></input>
        <input  type='text' className='company-code-input'></input>

        <div className='Manager'>담당자 정보</div>

        <div className='Manager-name'>담당자명</div>
        <input name='manager_name' type='text' className='Manager-name-input'></input>

        <div className='Manager-phone'>담당자 연락처</div>
        <input name='manager_phone' type='text' className='Manager-phone-input'></input>

        <div className='Manager-email'>담당자 이메일</div>
        <input name='manager_email' type='text' className='Manager-email-input' ></input>

        <div className='company-information'>추가 회사정보</div>

        <div className='company-people'>직원수</div>
        <input name='empl_num' type='text' className='company-people-input'></input>

        <div className='company-web'>회사 홈페이지</div>
        <input name='office_url' type='text' className='company-web-input'></input>

        <div className='company-page'>회사 소개</div>
        <input name='office_text' type='text' className='company-page-input'></input>

        <img className='company-main2' src={require('./img/company-main2.png')}/>
        <button type='submit' className='company-button'>회사 등록</button>
        </form>
      </div>
      
      <div className='footer2'>
                <div className='cat2'>
                    <img className='footer-cat2' src={require('./img/cat.png')}/>
                </div>
                <div className='footer-main2'>
                <div className='footer-bar2'>
                    <button type='button2'>1</button>
                </div>
                </div>
              </div>

              <div className='footer22'>
                <div className='footer-logo2'>
                  <div  className='ok-logo2'>
                    <img className='ok-logo22' src={require('./img/okkylogo.png')}/>
                    <h2 className='ok-logoside2'>All That Developer</h2>
                    </div>
                    <div>
                    <img className='facebook22' src={require('./img/facebook.png')}/>
                    </div>
                    <div>
                    <img className='youtube22' src={require('./img/youtube.png')}/>
                    </div>
                    <div>
                    <img className='email22' src={require('./img/email.png')}/>
                    </div>

                </div>
              </div>
              <div className='footer-middle2'>
                <div className='footer-btn2'>
                  <div className='button-one2'>
                  <button>회사소개</button>
                  </div>
                  <div className='button-two2'>
                  <button>공지사항</button>
                  </div>
                  <div className='button-three2'>
                  <button>FAQ</button>
                  </div>
                  <div className='button-four2'>
                  <button>통합 서비스 이용약관</button>
                  </div>
                  <div className='button-five2'>
                  <button>개인정보 처리방침</button>
                  </div>
                </div>
              </div>


                <div className='footer-text2'>
                <div className='text-one2'>
                <div>상호명:(주)오키코리아|대표명:노상범, 장기진</div>
                </div>
                <div className='text-two2'>
                <div>사업자등록번호: 592-87-02037 | 통신판매업신고번호: 제 2022-서울강남-04742호 | 직업정보 제공사업 신고번호: J1200020230009</div>
                </div>
                <div className='text-three2'>
                <div>주소: 서울 강남구 봉은사로 303 TGL경복빌딩 502호 (06103) | 고객센터 : jobs@okky.kr (영업시간 평일 10:00~17:00) 주말 · 공휴일 휴무</div>
                </div>
                <div className='text-four2'>
                <div>© 2024 (주)오키코리아, Inc. All rights reserved.</div>
                </div>
                </div>

                <div className='last-footer2'>
                <div className='iname-ncloud2'>
                <div className='sponse2'>
                  <h2>SPONSORED BY</h2>
                </div>
                <div>
                <img className='iname2' src={require('./img/inames.png')}/>
                </div>
                <div>
                <img className='ncloud2' src={require('./img/ncloud.png')}/>
                </div>
                </div>
                </div>
                

      
    </div>
    
  );
}

export default App2;

