import './App5.css';

export default App5;

function App5() {
  return (
    <div className="App">
      <header className='App5-header-box'>
            <nav aria-label='Global' className='App5-nav-box'>
              <div className='App5-nav-div1'>
                <div className='App5-head-first-box'>
                  <a className='App5-head-logo-box' href='/'>
                    <span className='App5-head-logo-span'>OKKY Jobs</span>
                    <img className='App5-head-logo' alt='OKKY Logo' src={require('./img/logo4.PNG')}/>
                  </a>
                  <div className='App5-head-words-box space-x-7'>
                    <div className='App5-shrink-0'>
                      <a className='App5-words-box1' href='/contract'>계약직</a>
                    </div>
                    <div className='App5-shrink-1'>
                      <a className='App5-words-box1' href='/fulltime'>정규직</a>
                    </div>
                    <div className='App5-shrink-1'>
                      <a className='App5-words-box1' href='/talents'>Talent</a>
                    </div>
                    <div className='App5-shrink-1'>
                      <a className='App5-words-box1' href='/evalcom'>좋은회사/나쁜회사</a>
                    </div>
                    <div className='App5-words-box-mid-space'>
                     
                    </div>
                  </div>
                </div>
                <div className='App5-head-second-box'>
                  <div className='App5-head-second-box1'>
                    <a href='/products/01010301'>
                      <button className='App5-buyForShow'>열람권 구매</button>
                    </a>
                    <a href='/products/01010101'>
                      <button className='App5-buyForShow'>등록권 구매</button>
                    </a>
                  </div>
                </div>
                <div className='App5-head-third-box'>
                  <a href='/recruits/drafts'>
                    <button className='App5-company-but'>
                      <img className='App5-company-pic' src={require('./img/company.png')}></img>
                      <span className='App5-company'>회사 등록</span>  
                    </button>
                  </a>
                </div>
                <div className='App5-head-forth-box'>
                  <button type='button' aria-haspopup='true' aria-expanded='false'  className='App5-profile-but'>
                    <span className='App5-head-profile-span'>Open user menu</span>
                    <span className='App5-head-profile'>
                      <img className='App5-profile-part' alt='프로필 사진' src={require('./img/profile.png')}/>
                    </span>
                  </button>
                </div>
              </div>
            </nav>
          </header>
              <div className='App5-navbar'>
                <p>0</p>
              </div>

        
        <div className='App5-top-main'>
          <div className='App5-top-bar'>
            <h2>1</h2>
          </div>
          <div className='App5-top-text'>
            <h2>정규직</h2>
          </div>
        </div>
        
        <div className='App5-header'>
          <div>
            <img className='App5-' src={require('./img/bluecom.png')}/>
          </div>
          <div className='App5-header-div'>
            <h2 className='App5-bluecom'>주식회사 지타이노비젼</h2>
            <h2 className='App5-header-text'>2024년 5월 17일 오후 7시 17분 등록 ·</h2>
          </div>
          <div>
            <img className='App5-view' src={require('./img/view.png')}/>
          </div>
          <div className='App5-header-right'>
            <div>
              <img className='App5-share' src={require('./img/share.png')}/>
            </div>
            
          </div>
        </div>

          <div className='App5-header-title'>
            
            
            <div className='App5-title-middle'>
              <h2>풀스택개발</h2>
            </div>
            

            <div className='App5-middle-border'>
              <div className='App5-job-day'>
                포지션
                <h2>풀스택개발</h2>
                <div className='App5-jobday-img'> 
               <img className='App5-' src={require('./img/guzik.png')}/>
                </div>
              </div>
              <div className='App5-job-pay'>
                필요경력
                <h2>6년이상 ~ 무관</h2>
                <div>
               <img className='App5-jobpay-img' src={require('./img/calender.png')}/>
                </div>
              </div>
              <div className='App5-job-area'>
                근무지역
                <h2>서울 종로구 종로1가</h2>
              <div>
               <img className='App5-jobarea-img' src={require('./img/area.png')}/>
              </div>
              </div>
            </div>
            
            <div className='App5-category'>
              <div className='App5-position-text'>
                <h2>기타개발</h2>
                <span className='App5-position-h1'>reactjs, 은행경험, 커머스경험, java</span>
              </div>
              
            </div>

          <div className='App5-fixed'>
            <div className='App5-fixed-box'>
                <div className='App5-fixed-name'>
                 <img className='App5-' src={require('./img/login.PNG')}/>
                  <h2 className='App5-fixed-h1'>김필</h2>
                </div>
                <div className='App5-fixed-resume'>
                 <img className='App5-' src={require('./img/clip.png')}/>
                  <h2>이력서 없음</h2>
                </div>
                <div className='App5-fixed-input'>
                  <button type='button'>이력서 등록하기</button>
                </div>
              </div>
          </div>
            
          <div className='App5-fixed2'>
            <div className='App5-fixed-box2'>
                <div className='App5-fixed-name2'>
                  <h2 className='App5-fixed-h3'>포지션을 찾고 계신가요?</h2>
                </div>
                <div className='App5-fixed-resume2'>
                 <img className='App5-' src={require('./img/person.png')}/>
                  <h2>Talent에 이력서를 등록하면 더 
                    많은 포지션 제안을 받을 수 있습
                    니다.</h2>
                </div>
                <div className='App5-fixed-input2'>
                  <button type='button'>Talent 바로가기</button>
                </div>
              </div>
          </div>

          </div>

          <div>
            <div className='App5-project'>프로젝트 소개</div>
            <div className='App5-card'>
              <p>카드사 법인카드 이용성 개선 프로젝트</p>
            </div>
            <div className='App5-text-blue'>
              <p>안녕하세요.(주)블루컴입니다.</p>
            </div>
            <div className='App5-text-developer'>
              <p>아래와 같은 프로젝트 함께 참여할 프리랜서 개발자분을 모집하오니 검토 부탁 드립니다.</p>
            </div>
          </div>

          <div className='App5-middle-text'>
            <div>
              <p>-프로젝트:카드사 법인카드 이용성 개선 프로젝트</p>
            </div>
            <div>
              <p>-기간:6월 10일~7개월 또는 8개월(인원마다 상이)</p>
            </div>
            <div>
              <p>-등급:고급</p>
            </div>
            <div>
              <p>-스킬:JAVA</p>
            </div>
            <div>
              <p>-업무:</p>
            </div>
          </div>

          <div className='App5-middle-text2'>
            <div>
              <p>1.TA 1명:투입 후 7개월</p>
            </div>
            <div>
              <p>2.DBA 1명:투입후 7개월</p>
            </div>
            <div>
              <p>3. 공통 개발자 1명:투입 후 8개월</p>
            </div>
            <div>
              <p>4.관리자(admin)1명:투입후 8개월</p>
            </div>
            <div>
              <p>5.개발 PL 1명:투입 후 8개월</p>
            </div>
            <div>
              <p>6. 계정계 개발 시스템 연계 1명:투입후 7.5개월</p>
            </div>
          </div>

          <div className='App5-middle-text3'>
            <div>
              <p>- 장소 : 광화문</p>
            </div>
            <div>
              <p>- 기타 : 경력증빙 가능자 (KOSA)</p>
            </div>
            <div>
              <p>- 접수 : 담당자 (김세희 전무) / k1331g@gamil.com</p>
            </div>
            <div>
              <p>(대표메일) / bluecom2016@daum.net</p>
            </div>
          </div>

          <div className='App5-middle-text4'>
            <div>
              <p>※ 이외에도 많은 T/O를 보유중이므로 연락 주시면 적합한 포지션 다시 안내 드리도록 하겠습니다.</p>
            </div>
            <div>
              <p>※ 지원 시 스킬인벤토리 포함한 양식의 이력서와 함께 프로젝트명과 희망급여 및 투입 날짜 기재 부탁드립니다.</p>
            </div>
            <div>
              <p>※ 근무가능하신 개발자분들 많은 지원바랍니다.</p>
            </div>
          </div>

          <div className='App5-like'>
            <div className='App5-likes'>
            <img className='App5-' src={require('./img/like.png')}/>
            </div>
            <div className='App5-like-count'>
            <p>0</p>
            </div>
            <div className='App5-unlike'>
                <img className='App5-' src={require('./img/unlike.png')}/>
            </div>
              <div className='App5-unlike-count'>
               <p>0</p>
              </div>
          </div>

            <div className='App5-main-border'>
              0
            </div>

          <div className='App5-main'>
            <div className='App5-manager'>
              <p>담당자</p>
            </div>
            <div className='App5-maneger-info'>
              <p className='App5-main-people'>김세희전무</p>
              <p className='App5-main-hp'>02-830-7185</p>
              <p className='App5-main-email'>bluecom2016@daum.net</p>
            </div>
            <div className='App5-person-img'>
                <img className='App5-' src={require('./img/person.png')}/>
            </div>
            <div className='App5-call-img'>
                <img className='App5-' src={require('./img/call.png')}/>
            </div>
            <div className='App5-email-img'>
                <img className='App5-' src={require('./img/email2.png')}/>
            </div>
          </div>

          <div className='App5-bottom'>
            <div className='App5-bottom-main'>
              <div className='App5-bottom-img'> 
                <img className='App5-' src={require('./img/bluecom.png')}/>
                <h2>주식회사 지티이노비젼</h2>
                <div className='App5-area-img'>
                <img className='App5-' src={require('./img/area.png')}/>
                <p>서울 성동구 성수동2가</p>
                </div>
              </div>
              <div className='App5-office-type'>
                <p>이 기업의 다른공고</p>
                <img className='App5-' src={require('./img/submit.PNG')}/>
              </div>  
            </div>
            <div className='App5-bottom-text'>
            
              <div>
                <h2>회사소개</h2>
              </div>
              <div>
                <p>주{(')')}지티이노비젼은 2015년에 설립된 회사로 금융/통신/커머스 IT 및 다수 솔루션을 보유하고 있으며

각 분야에서 축적한 경험과 기술력을 바탕으로 <span>컨설팅부터 시스템 구축/운영 전 분야에 걸쳐 IT 서비스를 제공하는 SI 전문 기업</span>입니다.

저희는 사업 제안부터 시작하여 마더사로 프로젝트 수행하며, 자사 프로젝트 및 고객사의 니즈에 맞는 최고의 인력 수급 및 공급을 위하여

ITO 서비스도 진행하고 있습니다.</p>
              </div>
            </div>
              <div className='App5-botoom-url'>
               <img className='App5-' src={require('./img/earth.png')}/>
                <p>http://gtsoft.co.kr/</p>
              </div>
          </div>

          <div className='App5-text-footer'>
            <div className='App5-footer-img'>
              <img className='App5-' src={require('./img/login.PNG')}/>
            </div>
            <div className='App5-text-box'>
              <div>
                <h2>궁금한 점이나 질문을 댓글로 남겨주세요 함께 답을 찾아볼 수 있는 시간이 있어요</h2>
              </div>
            </div>
          </div>

            <div className='App5-last-footer'>
              <div>
                <button type='button'>댓글 쓰기</button>
              </div>
            </div>

            <div className='App5-footer'>
                <div className='App5-cat'>
                    <img className='App5-footer-cat' src={require('./img/cat.png')}/>
                </div>
                <div className='App5-footer-bar'>
                    <button type='button'>1</button>
                </div>
              </div>

              <div className='App5-footer2'>
                <div className='App5-footer-logo'>
                    <img className='App5-ok-logo' src={require('./img/okkylogo.png')}/>
                    <h2>All That Developer</h2>
                    <div>
                    <img className='App5-facebook' src={require('./img/facebook.png')}/>
                    </div>
                    <div>
                    <img className='App5-youtube' src={require('./img/youtube.png')}/>
                    </div>
                    <div>
                    <img className='App5-email' src={require('./img/email.png')}/>
                    </div>

                </div>
              </div>
              <div className='App5-footer-middle'>
                <div className='App5-footer-btn'>
                  <div className='App5-button-one'>
                  <button>회사소개</button>
                  </div>
                  <div className='App5-button-two'>
                  <button>공지사항</button>
                  </div>
                  <div className='App5-button-three'>
                  <button>FAQ</button>
                  </div>
                  <div className='App5-button-four'>
                  <button>통합 서비스 이용약관</button>
                  </div>
                  <div className='App5-button-five'>
                  <button>개인정보 처리방침</button>
                  </div>
                </div>
              </div>


                <div className='App5-footer-text'>
                <div className='App5-text-one'>
                <div>상호명:(주)오키코리아|대표명:노상범, 장기진</div>
                </div>
                <div className='App5-text-two'>
                <div>사업자등록번호: 592-87-02037 | 통신판매업신고번호: 제 2022-서울강남-04742호 | 직업정보 제공사업 신고번호: J1200020230009</div>
                </div>
                <div className='App5-text-three'>
                <div>주소: 서울 강남구 봉은사로 303 TGL경복빌딩 502호 (06103) | 고객센터 : jobs@okky.kr (영업시간 평일 10:00~17:00) 주말 · 공휴일 휴무</div>
                </div>
                <div className='App5-text-four'>
                <div>© 2024 (주)오키코리아, Inc. All rights reserved.</div>
                </div>
                </div>

                <div className='App5-last-footer'>
                <div className='App5-sponse'>
                  <h2>SPONSORED BY</h2>
                </div>
                <div>
                <img className='App5-iname' src={require('./img/inames.png')}/>
                </div>
                <div>
                <img className='App5-ncloud' src={require('./img/ncloud.png')}/>
                </div>
                </div>
    </div>
  );
}

