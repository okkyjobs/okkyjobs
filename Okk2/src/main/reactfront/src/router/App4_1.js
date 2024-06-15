// import logo from './logo.svg';
import './App4_1.css';

function App4_1() {
  return (
    
    <div className="App">
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
      
      <main className='main-class'>
          <div className='main-box'>
            <div className='main-container'>
              <aside className='left-box'>
                <nav className='left-box-nav'>
                  <div className='left-first-box'>
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
                      <a className='career-manage1'style={{ textDecoration: "none"}} href='Okky2'>
                        <img className='pic-class' src={require('./img/office_1.jpg')}></img>
                        <span className='career-font'>회사 정보</span>
                      </a>
                      <a className='career-manage2'style={{ textDecoration: "none"}} href='Okky3_1'>
                        <img className='pic-class' src={require('./img/office_2.jpg')}></img>
                        <span className='career-font'>구매 이력관리</span>
                      </a>
                      <a className='career-manage31' style={{ textDecoration: "none"}} href='Okky4'>
                        <img className='pic-class31' src={require('./img/shoping24.png')}></img>
                        <span className='career-font'>사용 이력관리</span>
                      </a>
                      <a className='career-manage4' style={{ textDecoration: "none"}}href='Okky5'>
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
                      {/* <a className='career-manage2'style={{ textDecoration: "none"}} href='/settings/talents'>
                        <img className='pic-class' src={require('./img1/guzik.png')}></img>
                        <span className='career-font'>인터뷰 관리</span>
                      </a> */}
                      <a className='career-manage3'style={{ textDecoration: "none"}} href='Okky7'>
                        <img className='pic-class' src={require('./img1/position.png')}></img>
                        <span className='career-font'>상세 이력서 열람</span>
                      </a>
                      <a className='career-manage5'style={{ textDecoration: "none"}} href='Okky8'>
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
      {/* <div className='left-main'>
        <div className='my-id'>내 계정</div>
        <div>
        <img className="prople-img"src={require('./img/propile.png')}/>
        <div className='prople-page'>프로필</div>
        </div>
        <div>
        <img className="id-control-img"src={require('./img/option.png')}/>
        <div className='id-control'>계정관리</div>
        </div>

      </div>
        <hr className='prople-hr'></hr> */}

      <div className='right-main4'>
       <div className='button41'>
        <a href='Okky4'>
        <button className='posion-button41'>포지션 등록권</button>
        </a>
        <button className='mypage-button41'>이력서 열람권</button>
       </div>
       <div className='buy-log4'>사용 이력관리</div>
   
       <div className='button-main4'>
       <label>
       <select className='filter-main4'>
        <option value='-1'>전체</option>
        <option value='13'>정규직</option>
        <option value='14'>계약직</option>
       
       </select>
       </label>
       {/* <button className='button-all'>전체</button>
       <img className="button-buy-filter" src={require('./img/but-filter.png')}/> */}
       </div>
       <img className="buy-img4" src={require('./img/office-main2.png')}/>
      </div>
      
      
        
     
      <div className='footer4'>
                <div className='cat4'>
                    <img className='footer-cat4' src={require('./img/cat.png')}/>
                </div>
                <div className='footer-main4'>
                <div className='footer-bar4'>
                    {/* <button type='button4'>1</button> */}
                </div>
                </div>
              </div>

              <div className='footer24'>
                <div className='footer-logo4'>
                  <div  className='ok-logo4'>
                    <img className='ok-logo24' src={require('./img/okkylogo.png')}/>
                    <h2 className='ok-logoside4'>All That Developer</h2>
                    </div>
                    <div>
                    <img className='facebook4' src={require('./img/facebook.png')}/>
                    </div>
                    <div>
                    <img className='youtube4' src={require('./img/youtube.png')}/>
                    </div>
                    <div>
                    <img className='email4' src={require('./img/email.png')}/>
                    </div>

                </div>
              </div>
              <div className='footer-middle4'>
                <div className='footer-btn4'>
                  <div className='button-one4'>
                  <button>회사소개</button>
                  </div>
                  <div className='button-two4'>
                  <button>공지사항</button>
                  </div>
                  <div className='button-three4'>
                  <button>FAQ</button>
                  </div>
                  <div className='button-four4'>
                  <button>통합 서비스 이용약관</button>
                  </div>
                  <div className='button-five4'>
                  <button>개인정보 처리방침</button>
                  </div>
                </div>
              </div>


                <div className='footer-text4'>
                <div className='text-one4'>
                <div>상호명:(주)오키코리아|대표명:노상범, 장기진</div>
                </div>
                <div className='text-two4'>
                <div>사업자등록번호: 592-87-02037 | 통신판매업신고번호: 제 2022-서울강남-04742호 | 직업정보 제공사업 신고번호: J1200020230009</div>
                </div>
                <div className='text-three4'>
                <div>주소: 서울 강남구 봉은사로 303 TGL경복빌딩 502호 (06103) | 고객센터 : jobs@okky.kr (영업시간 평일 10:00~17:00) 주말 · 공휴일 휴무</div>
                </div>
                <div className='text-four4'>
                <div>© 2024 (주)오키코리아, Inc. All rights reserved.</div>
                </div>
                </div>

                <div className='last-footer4'>
                <div className='iname-ncloud4'>
                <div className='sponse4'>
                  <h2>SPONSORED BY</h2>
                </div>
                <div>
                <img className='iname4' src={require('./img/inames.png')}/>
                </div>
                <div>
                <img className='ncloud4' src={require('./img/ncloud.png')}/>
                </div>
                </div>
                </div>
                

   
    </div>
    
  );
}

export default App4_1;
