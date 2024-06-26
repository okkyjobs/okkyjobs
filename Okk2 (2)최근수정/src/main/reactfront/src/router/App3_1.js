// import logo from './logo.svg';
import './App3_1.css';

function App3_1() {
  return (
    
    <div className="App3_1App3">
      <div className='App3_1top-main'>
        <div className="App3_1top">
          <div>
      <img className="App3_1logo" src={require('./img/logo.png')}/>
      <img className="App3_1a" src={require('./img/Contract.png')}/>
      <button className='App3_1b'>정규직</button>
      <img className="App3_1c" src={require('./img/Talent.png')}/>
      <img className="App3_1d" src={require('./img/badgood.png')}/>
          </div>
        <div>
      <img className="App3_1e" src={require('./img/Reading.png')}/>
      <img className="App3_1f" src={require('./img/registration right.png')}/>
      <img className="App3_1g" src={require('./img/Registration.png')}/>
        </div>
      </div>  
      </div>
      
      <main className='App3_1main-class'>
          <div className='App3_1main-box'>
            <div className='App3_1main-container'>
              <aside className='App3_1left-box'>
                <nav className='App3_1left-box-nav'>
                  <div className='App3_1left-first-box'>
                    <div className='App3_1myAccount'>내 계정</div>
                    <div className='App3_1profile'>
                      <a className='App3_1profile-a' style={{ textDecoration: "none"}} href='App3_1/settings/profile'>
                        <img className='App3_1profile-logo' src={require('./img1/profile.png')}/>
                        <span className='App3_1profile-font'>프로필</span>
                      </a>
                      <a className='App3_1manageAcc-a'  style={{ textDecoration: "none"}}href='App3_1/settings/account'>
                        <img className='App3_1mAcc-logo' src={require('./img1/manageAccount.png')}/>
                        <span className='App3_1manageAccount-font'>계정 관리</span>
                      </a>
                    </div>
                  </div>
                  <div className='App3_1line'>
                    <div className='App3_1Jobs-font'>기업 계정</div>
                    <div>
                      <a className='App3_1career-manage1'style={{ textDecoration: "none"}} href='Okky2'>
                        <img className='App3_1pic-class' src={require('./img/office_1.jpg')}></img>
                        <span className='App3_1career-font'>회사 정보</span>
                      </a>
                      <a className='App3_1career-manage22' style={{ textDecoration: "none"}} href='Okky3_1'>
                        <img className='App3_1pic-class' src={require('./img/bye2.png')}></img>
                        <span className='App3_1career-font'>구매 이력관리</span>
                      </a>
                      <a className='App3_1career-manage3'style={{ textDecoration: "none"}} href='Okky4'>
                        <img className='App3_1pic-class31' src={require('./img/shoping2.png')}></img>
                        <span className='App3_1career-font'>사용 이력관리</span>
                      </a>
                      <a className='App3_1career-manage4'style={{ textDecoration: "none"}} href='Okky5'>
                        <img className='App3_1pic-class' src={require('./img/young.png')}></img>
                        <span className='App3_1career-font'>채용 담당자 관리</span>
                      </a>
                    </div>
                  </div>
                  <div className='App3_1line'>
                    <div className='App3_1Jobs-font'>Jobs</div>
                    <div>
                      <a className='App3_1career-manage1' style={{ textDecoration: "none"}} href='Okky6'>
                        <img className='App3_1pic-class' src={require('./img1/eryukseo.png')}></img>
                        <span className='App3_1career-font'>관심 구직자</span>
                      </a>
                      {/* <a className='App3_1career-manage2' style={{ textDecoration: "none"}} href='App3_1/settings/talents'>
                        <img className='App3_1pic-class' src={require('./img1/guzik.png')}></img>
                        <span className='App3_1career-font'>인터뷰 관리</span>
                      </a> */}
                      <a className='App3_1career-manage3'style={{ textDecoration: "none"}} href='Okky7'>
                        <img className='App3_1pic-class' src={require('./img1/position.png')}></img>
                        <span className='App3_1career-font'>상세 이력서 열람</span>
                      </a>
                      <a className='App3_1career-manage5'style={{ textDecoration: "none"}} href='Okky8'>
                        <img className='App3_1pic-class' src={require('./img1/positionEryuk.png')}></img>
                        <span className='App3_1career-font'>채용 포지션 관리</span>
                      </a>
                    </div>
                  </div>
                </nav>
              </aside>
              </div>
              </div>
              </main>
      {/* <div className='App3_1left-main'>
        <div className='App3_1my-id'>내 계정</div>
        <div>
        <img className="App3_1prople-img"src={require('./img/propile.png')}/>
        <div className='App3_1prople-page'>프로필</div>
        </div>
        <div>
        <img className="App3_1id-control-img"src={require('./img/option.png')}/>
        <div className='App3_1id-control'>계정관리</div>
        </div>

      </div>
        <hr className='App3_1prople-hr'></hr> */}

      <div className='App3_1right-main'>
       <div className='App3_1button'>
        <button className='App3_1posion-button'href='Okky3_1'>포지션 등록권</button>
        <a href='Okky3_11'>
        <button className='App3_1mypage-button'href='Okky3_11'>이력서 열람권</button>
        </a>
       </div>
       <div className='App3_1buy-log'>구매 이력관리</div>
       <div className='App3_1right-filter'>등록권 총 0개 / 사용 0개 / 잔여 0개</div>
       <div className='App3_1button-main'>
       <label>
       <select className='App3_1filter-main'>
        <option value='App3_1-1'>전체</option>
        <option value='App3_113'>결제완료</option>
        <option value='App3_114'>부분취소</option>
        <option value='App3_115'>전체취소</option>
       </select>
       </label>
       {/* <img className="App3_1button-buy-filter" src={require('./img/but-filter.png')}/> */}
       </div>
       <img className="App3_1buy-img" src={require('./img/buy.png')}/>
      </div>
      
      
        
     
      <div className='App3_1footer'>
                <div className='App3_1cat'>
                    <img className='App3_1footer-cat' src={require('./img/cat.png')}/>
                </div>
                <div className='App3_1footer-main'>
                <div className='App3_1footer-bar'>
                    <button type='App3_1button'>1</button>
                </div>
                </div>
              </div>

              <div className='App3_1footer2'>
                <div className='App3_1footer-logo'>
                  <div  className='App3_1ok-logo'>
                    <img className='App3_1okky2-logo3' src={require('./img/okkylogo.png')}/>
                    <h2 className='App3_1ok-logoside3'>All That Developer</h2>
                    </div>
                    <div>
                    <img className='App3_1facebook3' src={require('./img/facebook.png')}/>
                    </div>
                    <div>
                    <img className='App3_1youtube3' src={require('./img/youtube.png')}/>
                    </div>
                    <div>
                    <img className='App3_1email3' src={require('./img/email.png')}/>
                    </div>

                </div>
              </div>
              <div className='App3_1footer-middle'>
                <div className='App3_1footer-btn'>
                  <div className='App3_1button-one3'>
                  <button>회사소개</button>
                  </div>
                  <div className='App3_1button-two3'>
                  <button>공지사항</button>
                  </div>
                  <div className='App3_1button-three3'>
                  <button>FAQ</button>
                  </div>
                  <div className='App3_1button-four3'>
                  <button>통합 서비스 이용약관</button>
                  </div>
                  <div className='App3_1button-five3'>
                  <button>개인정보 처리방침</button>
                  </div>
                </div>
              </div>


                <div className='App3_1footer-text'>
                <div className='App3_1text-one'>
                <div>상호명:(주)오키코리아|대표명:노상범, 장기진</div>
                </div>
                <div className='App3_1text-two'>
                <div>사업자등록번호: 592-87-02037 | 통신판매업신고번호: 제 2022-서울강남-04742호 | 직업정보 제공사업 신고번호: J1200020230009</div>
                </div>
                <div className='App3_1text-three'>
                <div>주소: 서울 강남구 봉은사로 303 TGL경복빌딩 502호 (06103) | 고객센터 : jobs@okky.kr (영업시간 평일 10:00~17:00) 주말 · 공휴일 휴무</div>
                </div>
                <div className='App3_1text-four'>
                <div>© 2024 (주)오키코리아, Inc. All rights reserved.</div>
                </div>
                </div>

                <div className='App3_1last-footer'>
                <div className='App3_1iname-ncloud'>
                <div className='App3_1sponse'>
                  <h2>SPONSORED BY</h2>
                </div>
                <div>
                <img className='App3_1iname' src={require('./img/iname2.png')}/>
                </div>
                <div>
                <img className='App3_1ncloud' src={require('./img/ncloud.png')}/>
                </div>
                </div>
                </div>

   
    </div>
    
  );
}

export default App3_1;
