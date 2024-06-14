import './App7.css';

export default App7;

function App7() {
  return (
    
    <div className="App">
    
  
      
    <div className='App7-_next_'>
          <header className='App7--header-box'>
            <nav aria-label='Global' className='App7-nav-box'>
              <div className='App7-nav-div1'>
                <div className='App7-head-first-box'>
                  <a className='App7-head-logo-box' href='/'>
                    <span className='App7-head-logo-span'>OKKY Jobs</span>
                    <img className='App7-head-logo' alt='OKKY Logo' src={require('./img/logo4.PNG')}/>
                  </a>
                  <div className='App7-head-words-box space-x-7'>
                    <div className='App7-shrink-0'>
                      <a className='App7-words-box1' href='/contract'>계약직</a>
                    </div>
                    <div className='App7-shrink-1'>
                      <a className='App7-words-box1' href='/fulltime'>정규직</a>
                    </div>
                    <div className='App7-shrink-1'>
                      <a className='App7-words-box1' href='/talents'>Talent</a>
                    </div>
                    <div className='App7-shrink-1'>
                      <a className='App7-words-box1' href='/evalcom'>좋은회사/나쁜회사</a>
                    </div>
                    
                  </div>
                </div>
                <div className='App7-head-second-box'>
                  <div className='App7-head-second-box1'>
                    <a href='/products/01010301'>
                      <button className='App7-buyForShow'>열람권 구매</button>
                    </a>
                    <a href='/products/01010101'>
                      <button className='App7-buyForShow'>등록권 구매</button>
                    </a>
                  </div>
                </div>
                <div className='App7-head-third-box'>
                  <a href='/recruits/drafts'>
                    <button className='App7-company-but'>
                      <img className='App7-company-pic' src={require('./img/company.png')}></img>
                      <span className='App7-company'>구인등록</span>  
                    </button>
                  </a>
                </div>
                <div className='App7-head-forth-box'>
                  <button type='button' aria-haspopup='true' aria-expanded='false'  className='App7-profile-but'>
                    <span className='App7-head-profile-span'>Open user menu</span>
                    <span className='App7-head-profile'>
                      <img className='App7-profile-part' alt='프로필 사진' src={require('./img/profile.png')}/>
                    </span>
                  </button>
                </div>
              </div>
            </nav>
          </header>
              <div className='App7-navbar'>
                <p>0</p>
              </div>
      



        <div className='App7-category'>
       
      
       
          
         <div className='App7-category-button'> 
            <div className='App7-filter-all'>
              <div className='App7-filter-main'>
                 <span className='App7-filter'>포지션을 쉽게 찾는 스마트 필터</span>
                 <img className='App7-position' src={require('./img/list.PNG')}/>
              </div>
              <div></div>
              <div className='App7-position-main'>
              <button>포지션</button>
              <img className='App7-position' src={require('./img/submit.PNG')}/>
              </div>
              <div className='App7-area'>
              <button>근무지역</button>
              <img className='App7-' src={require('./img/submit.PNG')}/>
              </div>
              <div className='App7-hope-money'>
              <button>보유기술</button>
              <img className='App7-' src={require('./img/submit.PNG')}/>
              </div>
              <div className='App7-jobway'>
              <button>전체경력</button>
              <img className='App7-' src={require('./img/submit.PNG')}/>
              </div>
              
              <div className='App7-save'>
                <div className='App7-save1'>
                <input type='checkbox' className='App7-chk-box'></input>
                <input className='App7-saveinput' placeholder='저장'></input>
                </div>
                <div className='App7-questionimg'>
                <img className='App7-question' src={require('./img/question.PNG')}/>
                </div>
                <div className='App7-resetbox'>
                  <input type='button' className='App7-reset1'></input>
                <img className='App7-resetimg' src={require('./img/reset.png')}/>
                </div>
                <div>
                </div>
                <div className='App7-reset'>
                  <input type='button' className='App7-reset2'></input>
                </div>
                <div className='App7-filterbox'>
                  <span className='App7-filtersearch'>필터로 검색</span>
                </div>
                <div>
                <img className='App7-filterimg' src={require('./img/filterobserver.png')}/>

                </div>
              </div>
            </div>
         </div>
        </div>
       <div>
      <div className='App7-main-bar'> 
        <div>
            <img className='App7-backg' src={require('./img/backg2.png')}/>
        </div>
        <div className='App7-textall'>
        <div className='App7-text1'>
          <span>OKKY Jobs는 국내 최대'최고의 개발자 전문 Job Platfom입니다</span>
        </div>
        <div className='App7-text2'>
          <span>Yes!클린일자리 체크리스트,스마트필터,바로지원,무료 법률상담 서비스</span>
        </div>
        <div className='App7-text3'>
          <span>NO!허위 구인 게시물</span>
        </div>
        </div>
        <div className='App7-input-bar'>
          <div className='App7-input-search'>
            <img className='App7-job' src={require('./img/opserver.PNG')}/>
            <input type='text' className='App7-textsearch' placeholder='구인/정규직/회사검색'></input>
          </div>
          <div className='App7-input-search2'>
            <img className='App7-xbutton' src={require('./img/xbutton.PNG')}/>
            <button type='button'>찾기</button>
          </div>
        </div>
      </div>
       </div>

          <div className='App7-middle'>
            <div>
              <h2>6개의 포지션</h2>
            </div>
            <div>
              <input type='button'></input>
            </div>
          </div>
          <div className='App7-update'>
            <h2>최신순</h2>
          </div>
          <div>
            <img className='App7-updateicon' src={require('./img/list2.PNG')}/>
          </div>

          <div className='App7-main-body'>
            
            <div className='App7-first'>
              <div className='App7-main-img'>
                <div className='App7-inc-1'>
                    <img className='App7-' src={require('./img/incruit1.png')}/>
                </div>

                <div className='App7-main-top'>
                  <div>
                    <img className='App7-' src={require('./img/profile.png')}/>
                  </div>
                  <div className='App7-uniforyou'>
                    <span>유니포유</span>
                  </div>
                  <div className='App7-sm-text'>
                    <span>SM · 제조</span>
                  </div>  
                </div>

                <div className='App7-main-middle'>
                  <div className='App7-main-team'>
                    <span>백엔드개발, 팀원</span>
                    <span className='App7-main-manager'>삼성전자 수원 서비스 데스크 JAVA운영자 모집</span>
                  </div>
                  <div className='App7-middle-img'>
                    <img className='App7-' src={require('./img/vertical-bar.png')}/>
                  </div>
                </div>

                <div className='App7-braket-text'>
                  <div>
                    <img className='App7-' src={require('./img/braket.png')}/>
                  </div>
                  <div className='App7-barket-java'>
                    <span>java,oracle</span>
                  </div>
                </div>

                <div className='App7-career-text'>
                  <div>
                    <img className='App7-' src={require('./img/braket.png')}/>
                  </div>
                  <div>
                    <span>4년이상 ~ 무관 ·</span>
                  </div>
                  <div>
                    <img className='App7-' src={require('./img/braket.png')}/>
                  </div>
                  <div>
                    <span>경기 수원시 영통구...</span>
                  </div>
                </div>

                <div className='App7-pay-text'>
                  <div>
                    <img className='App7-' src={require('./img/braket.png')}/>
                  </div>
                  <div>
                    <span>600 ~ 690 만원 ·</span>
                  </div>
                  <div>
                    <img className='App7-' src={require('./img/braket.png')}/>
                  </div>
                  <div>
                    <span>마감 6.24 (월)</span>
                  </div>
                </div>
              </div>
            </div>

            <div className='App7-second'>
              <div className='App7-main-img'>
                <div className='App7-inc-1'>
                    <img className='App7-' src={require('./img/incruit1.png')}/>
                </div>

                <div className='App7-main-top'>
                  <div>
                    <img className='App7-' src={require('./img/profile.png')}/>
                  </div>
                  <div className='App7-uniforyou'>
                    <span>유니포유</span>
                  </div>
                  <div className='App7-sm-text'>
                    <span>SM · 제조</span>
                  </div>  
                </div>

                <div className='App7-main-middle'>
                  <div className='App7-main-team'>
                    <span>백엔드개발, 팀원</span>
                    <span className='App7-main-manager'>삼성전자 수원 서비스 데스크 JAVA운영자 모집</span>
                  </div>
                  <div className='App7-middle-img'>
                    <img className='App7-' src={require('./img/vertical-bar.png')}/>
                  </div>
                </div>

                <div className='App7-braket-text'>
                  <div>
                    <img className='App7-' src={require('./img/braket.png')}/>
                  </div>
                  <div className='App7-barket-java'>
                    <span>java,oracle</span>
                  </div>
                </div>

                <div className='App7-career-text'>
                  <div>
                    <img className='App7-' src={require('./img/braket.png')}/>
                  </div>
                  <div>
                    <span>4년이상 ~ 무관 ·</span>
                  </div>
                  <div>
                    <img className='App7-' src={require('./img/braket.png')}/>
                  </div>
                  <div>
                    <span>경기 수원시 영통구...</span>
                  </div>
                </div>

                <div className='App7-pay-text'>
                  <div>
                    <img className='App7-' src={require('./img/braket.png')}/>
                  </div>
                  <div>
                    <span>600 ~ 690 만원 ·</span>
                  </div>
                  <div>
                    <img className='App7-' src={require('./img/braket.png')}/>
                  </div>
                  <div>
                    <span>마감 6.24 (월)</span>
                  </div>
                </div>
              </div>
            </div>

            <div className='App7-third'>
              <div className='App7-main-img'>
                <div className='App7-inc-1'>
                    <img className='App7-' src={require('./img/incruit1.png')}/>
                </div>

                <div className='App7-main-top'>
                  <div>
                    <img className='App7-' src={require('./img/profile.png')}/>
                  </div>
                  <div className='App7-uniforyou'>
                    <span>유니포유</span>
                  </div>
                  <div className='App7-sm-text'>
                    <span>SM · 제조</span>
                  </div>  
                </div>

                <div className='App7-main-middle'>
                  <div className='App7-main-team'>
                    <span>백엔드개발, 팀원</span>
                    <span className='App7-main-manager'>삼성전자 수원 서비스 데스크 JAVA운영자 모집</span>
                  </div>
                  <div className='App7-middle-img'>
                    <img className='App7-' src={require('./img/vertical-bar.png')}/>
                  </div>
                </div>

                <div className='App7-braket-text'>
                  <div>
                    <img className='App7-' src={require('./img/braket.png')}/>
                  </div>
                  <div className='App7-barket-java'>
                    <span>java,oracle</span>
                  </div>
                </div>

                <div className='App7-career-text'>
                  <div>
                    <img className='App7-' src={require('./img/braket.png')}/>
                  </div>
                  <div>
                    <span>4년이상 ~ 무관 ·</span>
                  </div>
                  <div>
                    <img className='App7-' src={require('./img/braket.png')}/>
                  </div>
                  <div>
                    <span>경기 수원시 영통구...</span>
                  </div>
                </div>

                <div className='App7-pay-text'>
                  <div>
                    <img className='App7-' src={require('./img/braket.png')}/>
                  </div>
                  <div>
                    <span>600 ~ 690 만원 ·</span>
                  </div>
                  <div>
                    <img className='App7-' src={require('./img/braket.png')}/>
                  </div>
                  <div>
                    <span>마감 6.24 (월)</span>
                  </div>
                </div>
              </div>
            </div>
                     

          </div>

          <div className='App7-main-body'>
            
            <div className='App7-first'>
              <div className='App7-main-img'>
                <div className='App7-inc-1'>
                    <img className='App7-' src={require('./img/incruit1.png')}/>
                </div>

                <div className='App7-main-top'>
                  <div>
                    <img className='App7-' src={require('./img/profile.png')}/>
                  </div>
                  <div className='App7-uniforyou'>
                    <span>유니포유</span>
                  </div>
                  <div className='App7-sm-text'>
                    <span>SM · 제조</span>
                  </div>  
                </div>

                <div className='App7-main-middle'>
                  <div className='App7-main-team'>
                    <span>백엔드개발, 팀원</span>
                    <span className='App7-main-manager'>삼성전자 수원 서비스 데스크 JAVA운영자 모집</span>
                  </div>
                  <div className='App7-middle-img'>
                    <img className='App7-' src={require('./img/vertical-bar.png')}/>
                  </div>
                </div>

                <div className='App7-braket-text'>
                  <div>
                    <img className='App7-' src={require('./img/braket.png')}/>
                  </div>
                  <div className='App7-barket-java'>
                    <span>java,oracle</span>
                  </div>
                </div>

                <div className='App7-career-text'>
                  <div>
                    <img className='App7-' src={require('./img/braket.png')}/>
                  </div>
                  <div>
                    <span>4년이상 ~ 무관 ·</span>
                  </div>
                  <div>
                    <img className='App7-' src={require('./img/braket.png')}/>
                  </div>
                  <div>
                    <span>경기 수원시 영통구...</span>
                  </div>
                </div>

                <div className='App7-pay-text'>
                  <div>
                    <img className='App7-' src={require('./img/braket.png')}/>
                  </div>
                  <div>
                    <span>600 ~ 690 만원 ·</span>
                  </div>
                  <div>
                    <img className='App7-' src={require('./img/braket.png')}/>
                  </div>
                  <div>
                    <span>마감 6.24 (월)</span>
                  </div>
                </div>
              </div>
            </div>

            <div className='App7-second'>
              <div className='App7-main-img'>
                <div className='App7-inc-1'>
                    <img className='App7-' src={require('./img/incruit1.png')}/>
                </div>

                <div className='App7-main-top'>
                  <div>
                    <img className='App7-' src={require('./img/profile.png')}/>
                  </div>
                  <div className='App7-uniforyou'>
                    <span>유니포유</span>
                  </div>
                  <div className='App7-sm-text'>
                    <span>SM · 제조</span>
                  </div>  
                </div>

                <div className='App7-main-middle'>
                  <div className='App7-main-team'>
                    <span>백엔드개발, 팀원</span>
                    <span className='App7-main-manager'>삼성전자 수원 서비스 데스크 JAVA운영자 모집</span>
                  </div>
                  <div className='App7-middle-img'>
                    <img className='App7-' src={require('./img/vertical-bar.png')}/>
                  </div>
                </div>

                <div className='App7-braket-text'>
                  <div>
                    <img className='App7-' src={require('./img/braket.png')}/>
                  </div>
                  <div className='App7-barket-java'>
                    <span>java,oracle</span>
                  </div>
                </div>

                <div className='App7-career-text'>
                  <div>
                    <img className='App7-' src={require('./img/braket.png')}/>
                  </div>
                  <div>
                    <span>4년이상 ~ 무관 ·</span>
                  </div>
                  <div>
                    <img className='App7-' src={require('./img/braket.png')}/>
                  </div>
                  <div>
                    <span>경기 수원시 영통구...</span>
                  </div>
                </div>

                <div className='App7-pay-text'>
                  <div>
                    <img className='App7-' src={require('./img/braket.png')}/>
                  </div>
                  <div>
                    <span>600 ~ 690 만원 ·</span>
                  </div>
                  <div>
                    <img className='App7-' src={require('./img/braket.png')}/>
                  </div>
                  <div>
                    <span>마감 6.24 (월)</span>
                  </div>
                </div>
              </div>
            </div>

            <div className='App7-third'>
              <div className='App7-main-img'>
                <div className='App7-inc-1'>
                    <img className='App7-' src={require('./img/incruit1.png')}/>
                </div>

                <div className='App7-main-top'>
                  <div>
                    <img className='App7-' src={require('./img/profile.png')}/>
                  </div>
                  <div className='App7-uniforyou'>
                    <span>유니포유</span>
                  </div>
                  <div className='App7-sm-text'>
                    <span>SM · 제조</span>
                  </div>  
                </div>

                <div className='App7-main-middle'>
                  <div className='App7-main-team'>
                    <span>백엔드개발, 팀원</span>
                    <span className='App7-main-manager'>삼성전자 수원 서비스 데스크 JAVA운영자 모집</span>
                  </div>
                  <div className='App7-middle-img'>
                    <img className='App7-' src={require('./img/vertical-bar.png')}/>
                  </div>
                </div>

                <div className='App7-braket-text'>
                  <div>
                    <img className='App7-' src={require('./img/braket.png')}/>
                  </div>
                  <div className='App7-barket-java'>
                    <span>java,oracle</span>
                  </div>
                </div>

                <div className='App7-career-text'>
                  <div>
                    <img className='App7-' src={require('./img/braket.png')}/>
                  </div>
                  <div>
                    <span>4년이상 ~ 무관 ·</span>
                  </div>
                  <div>
                    <img className='App7-' src={require('./img/braket.png')}/>
                  </div>
                  <div>
                    <span>경기 수원시 영통구...</span>
                  </div>
                </div>

                <div className='App7-pay-text'>
                  <div>
                    <img className='App7-' src={require('./img/braket.png')}/>
                  </div>
                  <div>
                    <span>600 ~ 690 만원 ·</span>
                  </div>
                  <div>
                    <img className='App7-' src={require('./img/braket.png')}/>
                  </div>
                  <div>
                    <span>마감 6.24 (월)</span>
                  </div>
                </div>
              </div>
            </div>
                     

          </div>

          
                          
              <div className='App7-footer'>
                <div className='App7-cat'>
                    <img className='App7-footer-cat' src={require('./img/cat.png')}/>
                </div>
                <div className='App7-footer-bar'>
                    <button type='button'>1</button>
                </div>
              </div>

              <div className='App7-footer2'>
                <div className='App7-footer-logo'>
                    <img className='App7-ok-logo' src={require('./img/okkylogo.png')}/>
                    <h2>All That Developer</h2>
                    <div>
                    <img className='App7-facebook' src={require('./img/facebook.png')}/>
                    </div>
                    <div>
                    <img className='App7-youtube' src={require('./img/youtube.png')}/>
                    </div>
                    <div>
                    <img className='App7-email' src={require('./img/email.png')}/>
                    </div>

                </div>
              </div>
              <div className='App7-footer-middle'>
                <div className='App7-footer-btn'>
                  <div className='App7-button-one'>
                  <button>회사소개</button>
                  </div>
                  <div className='App7-button-two'>
                  <button>공지사항</button>
                  </div>
                  <div className='App7-button-three'>
                  <button>FAQ</button>
                  </div>
                  <div className='App7-button-four'>
                  <button>통합 서비스 이용약관</button>
                  </div>
                  <div className='App7-button-five'>
                  <button>개인정보 처리방침</button>
                  </div>
                </div>
              </div>


                <div className='App7-footer-text'>
                <div className='App7-text-one'>
                <div>상호명:(주)오키코리아|대표명:노상범, 장기진</div>
                </div>
                <div className='App7-text-two'>
                <div>사업자등록번호: 592-87-02037 | 통신판매업신고번호: 제 2022-서울강남-04742호 | 직업정보 제공사업 신고번호: J1200020230009</div>
                </div>
                <div className='App7-text-three'>
                <div>주소: 서울 강남구 봉은사로 303 TGL경복빌딩 502호 (06103) | 고객센터 : jobs@okky.kr (영업시간 평일 10:00~17:00) 주말 · 공휴일 휴무</div>
                </div>
                <div className='App7-text-four'>
                <div>© 2024 (주)오키코리아, Inc. All rights reserved.</div>
                </div>
                </div>

                <div className='App7-last-footer'>
                <div className='App7-sponse'>
                  <h2>SPONSORED BY</h2>
                </div>
                <div>
                <img className='App7-iname' src={require('./img/inames.png')}/>
                </div>
                <div>
                <img className='App7-ncloud' src={require('./img/ncloud.png')}/>
                </div>
                </div>
    </div>
    </div>
    
  );
}

