import './App6.css';


export default App6;

function App6() {
  return (
    <div className="App">
        <div className='_next_'>
          <header className='-App6-header-box'>
            <nav aria-label='Global' className='App6-nav-box'>
              <div className='App6-nav-div1'>
                <div className='App6-head-first-box'>
                  <a className='App6-head-logo-box' href='/'>
                    <span className='App6-head-logo-span'>OKKY Jobs</span>
                    <img className='App6-head-logo' alt='OKKY Logo' src={require('./img/logo4.PNG')}/>
                  </a>
                  <div className='head-words-box space-x-7'>
                    <div className='shrink-0'>
                      <a className='App6-words-box1' href='/contract'>계약직</a>
                    </div>
                    <div className='shrink-1'>
                      <a className='App6-words-box1' href='/fulltime'>정규직</a>
                    </div>
                    <div className='shrink-1'>
                      <a className='App6-words-box1' href='/talents'>Talent</a>
                    </div>
                    <div className='shrink-1'>
                      <a className='App6-words-box1' href='/evalcom'>좋은회사/나쁜회사</a>
                    </div>
                    
                  </div>
                </div>
                <div className='App6-head-second-box'>
                  <div className='App6-head-second-box1'>
                    <a href='/products/01010301'>
                      <button className='App6-buyForShow'>열람권 구매</button>
                    </a>
                    <a href='/products/01010101'>
                      <button className='App6-buyForShow'>등록권 구매</button>
                    </a>
                  </div>
                </div>
                <div className='App6-head-third-box'>
                  <a href='/recruits/drafts'>
                    <button className='company-but'>
                      <img className='company-pic' src={require('./img/company.png')}></img>
                      <span className='company'>구인등록</span>  
                    </button>
                  </a>
                </div>
                <div className='App6-head-forth-box'>
                  <button type='button' aria-haspopup='true' aria-expanded='false'  className='App6-profile-but'>
                    <span className='App6-head-profile-span'>Open user menu</span>
                    <span className='App6-head-profile'>
                      <img className='App6-profile-part' alt='프로필 사진' src={require('./img/profile.png')}/>
                    </span>
                  </button>
                </div>
              </div>
            </nav>
          </header>
              <div className='App6-navbar'>
                <p>0</p>
              </div>
      </div>
      <div className='App6-header'>
        <div className='App6-header-intern'>
          <span>정규직 포지션 등록</span>
        </div>
        <div className='App6-header-board'>
          <div className='App6-header-light'>
          <img className='App6-light' src={require('./img/light.png')}></img>
          </div>
          <div> 
            <p>포지션 등록 전 <span className='App6-okky-text'>OKKY Jobs 운영 규칙</span>을 읽어보시고, <span>한 개의 채용 공고</span>에 <span>하나의 포지션만</span> 등록해 주세요!</p>
          </div>
        </div>
      </div>

      <div className='App6-ceo'>
        <div>
          <h2>0.대표 이미지</h2>
        </div>
      </div>

      <div className='App6-pattern-box'>
        <div className='App6-pattrn-text'>
          <div className='App6-upload-text'>
            <h2>직접 업로드</h2>
          </div>
          <div className='App6-p-text'>
            <h2>0/20</h2>
          </div>
        </div>
        <div className='App6-pattern-board'>
         <img className='App6-plus' src={require('./img/plus.png')}></img>
        </div>
      </div>

      <div className='App6-upload'>
        <div>
          <p>· 업로드 가능한 이미지 형식은 BMP, JPG, JPEG, PNG, WEBP 입니다.</p>
          <p>· 업로드 가능한 이미지 용량은 최대 1MB 입니다.</p>
          <p>· 선정적, 폭력적, 차별적인 이미지 또는 기업/포지션과 관련 없는 이미지를 등록하는 경우 별도의 고지 없이 포지션이 삭제될 수 있습니다.</p>
        </div>
      </div>

      
      <div>
        
          <div className='App6-position-text'>
            <span>1.포지션 정보</span>
          </div>

        <div className='App6-position-info'>

          <div className='App6-job-all'>
            <div>
              <p>직군<span>*</span></p>
            </div>
          <label>
            <div className='App6-position-type'>
              <select className='App6-position-a'>
                <option value='1'>직군을 선택해주세요.</option>
                <option value='1'>개발</option>
                <option value='2'>기획</option>
                <option value='3'>디자인</option>
                <option value='4'>마케팅</option>
                <option value='5'>기타</option>
              </select>
            </div>
          </label>
            
            
          </div>

          <div className='App6-job-second'>
            <div>
              <p>주요직무<span>*</span></p>
            </div>
            <label>
            <div className='App6-position-style'>
              <select className='App6-position-b'>
                <option value='1'>주요직무를 선택해주세요.</option>
                <option value='1'>백엔드개발</option>
                <option value='2'>프론트엔드개발</option>
                <option value='3'>모바일개발</option>
                <option value='4'>풀스택개발</option>
                <option value='5'>임베디드개발</option>
                <option value='6'>PC어플리케이션개발</option>
                <option value='7'>DBA</option>
                <option value='8'>TA</option>
                <option value='9'>AA</option>
                <option value='10'>기타개발</option>
                <option value='11'>퍼블리셔</option>
                <option value='12'>QA</option>
              </select>
            </div>
          </label>
          </div>

          </div>

          

                </div>

      <div className='App6-career'>
        <div className='App6-min-career'>
          <div className='App6-career-text'>
            <h2>경력*</h2>
          </div>
          <label>
            <div className='App6-career-board'>
              <select className='App6-board-a'>
                <option value='1'>최소경력을 선택해주세요.</option>
                <option value='1'>무관</option>
                <option value='2'>신입</option>
                <option value='3'>1년이상</option>
                <option value='4'>2년이상</option>
                <option value='5'>3년이상</option>
                <option value='6'>4년이상</option>
                <option value='7'>5년이상</option>
                <option value='8'>6년이상</option>
                <option value='9'>7년이상</option>
                <option value='10'>8년이상</option>
                <option value='11'>9년이상</option>
                <option value='12'>10년이상</option>
                <option value='13'>11년이상</option>
                <option value='14'>12년이상</option>
                <option value='15'>13년이상</option>
                <option value='16'>14년이상</option>
                <option value='17'>15년이상</option>
              </select>
            </div>
          </label>
        </div>

        

      </div>

         
      <div className='App6-pay-day'>
        

        
        
        
        <div className='App6-skill'>
          <div className='App6-save-skill'>
            <p>보유스킬<span>*</span></p>
          </div>
          <div className='App6-tag'>
            <label>
              <div className='App6-vertical'>
                <select className='App6-vertical-text'>
                  <option value='1'>스킬 태그를 선택해주세요.</option>
                  <option value='2'>검색된 태그가 없습니다.</option>
                </select>
              </div>
            </label>
          </div>
          <div className='App6-skill-text'>
            <span>보유스킬은 최대 5개까지 입력 가능합니다.</span>
          </div>
        </div>
        
          <div className='App6-area'>
            <h2>근무지*</h2>
          </div>

        <div className='App6-area-board'>
          <label>
              <div className='App6-special'>
                <select>
                  <option value='1'>시도를 선택해주세요.</option>
                  <option value='1'>서울</option>
                  <option value='2'>부산</option>
                  <option value='3'>대구</option>
                  <option value='4'>인천</option>
                  <option value='5'>광주</option>
                  <option value='6'>대전</option>
                  <option value='7'>울산</option>
                  <option value='8'>세종</option>
                  <option value='9'>강원</option>
                  <option value='10'>경기</option>
                  <option value='11'>경남</option>
                  <option value='12'>경북</option>
                  <option value='13'>전남</option>
                  <option value='14'>전북</option>
                  <option value='15'>충남</option>
                  <option value='16'>충북</option>
                  <option value='17'>제주</option>
                </select>
              </div>
            </label>
            <label>
              <div className='App6-gu'>
                <select>
                  <option value='1'>시도를 선택해주세요.</option>
                </select>
              </div>
            </label>
            <label>
              <div className='App6-dong'>
                <select>
                  <option value='1'>동/읍을 선택해주세요.</option>
                </select>
              </div>
            </label>
        </div>

        <div className='App6-detail'>
          <div className='App6-detail-info'>
            <span>상세정보</span>
          </div>
          <div className='App6-detail-text'>
            <span>프로젝트 소개를 작성해 주세요.</span>
          </div>
        </div>

        <div className='App6-manager'>
          <div>
            <h2>2.담당자 정보</h2>
          </div>
        </div>

        <div className='App6-manager-text'>
          <div className='App6-manager-all'>
            <div className='App6-ma-name'>
              <p>담당자명<span>*</span></p>
            </div>
            <div className='App6-ma-phone'>
              <p>전화번호<span>*</span></p>
            </div>
            <div className='App6-ma-email'>
              <p>이메일<span>*</span></p>
            </div>
          </div>
        </div>

        <div>
          <div className='App6-ma-inputbar'>
            <div className='App6-ma-input1'>
              <input type='text'></input>
            </div>
            <div className='App6-ma-input2'>
              <input type='text'></input>
            </div>
            <div className='App6-ma-input3'>
              <input type='text'></input>
            </div>
          </div>
        </div>

        <div className='App6-bottom-bar'>
          <h2>0</h2>
        </div>

        <div className='App6-cancle'>
          <div>
            <button type='button' className='App6-cancle-button'>취소</button>
          </div>
            <div className='App6-one-button'>
            <button className='App6-save-button'>임시 저장</button>
            </div>
            <div className='App6-two-button'>
            <button className='App6-input-button'>바로 등록</button>
            </div>
        </div>

        <div className='App6-ticket'>
          <div className='App6-ticket-copy'>
            <span>등록권 적용</span>
          </div>
          <div className='App6-pay-ticket'>
            <img className='App6-' src={require('./img/payimg.png')}></img>
            <p>등록권 1회 사용 / 잔여: <span>0</span>개</p>
          </div>
          <div className='App6-ticket-text1'>
            <p>포지션을 OKKY 회원들에게 노출하려면 <span>등록권</span>이 필요합니다. 작성하신 포지션은 임시저장 후 <span>회사정보 {'>'} 계약직 채용 포지션 관리</span> 에서 등록권을 사용하여 채용 포지션을 노출할 수 있습니다.</p>
          </div>
          <div className='App6-ticket-text2'>
            <p>또는, 아래 <span>구매하기</span> 버튼을 통해 등록권 구매 페이지로 이동하실 수 있습니다. 작성 중인 글은 자동으로 임시저장 됩니다.

            </p>
          </div>
          <div className='App6-ticket-pay'>
            <button>구매하기</button>
          </div>
        </div>

      </div>

      <div className='App6-footer'>
                <div className='App6-cat'>
                    <img className='App6-footer-cat' src={require('./img/cat.png')}/>
                </div>
                <div className='App6-footer-bar'>
                    <button type='button'>1</button>
                </div>
              </div>

              <div className='App6-footer2'>
                <div className='App6-footer-logo'>
                    <img className='App6-ok-logo' src={require('./img/okkylogo.png')}/>
                    <h2>All That Developer</h2>
                    <div>
                    <img className='App6-facebook' src={require('./img/facebook.png')}/>
                    </div>
                    <div>
                    <img className='App6-youtube' src={require('./img/youtube.png')}/>
                    </div>
                    <div>
                    <img className='App6-email' src={require('./img/email.png')}/>
                    </div>

                </div>
              </div>
              <div className='App6-footer-middle'>
                <div className='App6-footer-btn'>
                  <div className='App6-button-one'>
                  <button>회사소개</button>
                  </div>
                  <div className='App6-button-two'>
                  <button>공지사항</button>
                  </div>
                  <div className='App6-button-three'>
                  <button>FAQ</button>
                  </div>
                  <div className='App6-button-four'>
                  <button>통합 서비스 이용약관</button>
                  </div>
                  <div className='App6-button-five'>
                  <button>개인정보 처리방침</button>
                  </div>
                </div>
              </div>


                <div className='App6-footer-text'>
                <div className='App6-text-one'>
                <div>상호명:(주)오키코리아|대표명:노상범, 장기진</div>
                </div>
                <div className='App6-text-two'>
                <div>사업자등록번호: 592-87-02037 | 통신판매업신고번호: 제 2022-서울강남-04742호 | 직업정보 제공사업 신고번호: J1200020230009</div>
                </div>
                <div className='App6-text-three'>
                <div>주소: 서울 강남구 봉은사로 303 TGL경복빌딩 502호 (06103) | 고객센터 : jobs@okky.kr (영업시간 평일 10:00~17:00) 주말 · 공휴일 휴무</div>
                </div>
                <div className='App6-text-four'>
                <div>© 2024 (주)오키코리아, Inc. All rights reserved.</div>
                </div>
                </div>

                <div className='App6-last-footer'>
                <div className='App6-sponse'>
                  <h2>SPONSORED BY</h2>
                </div>
                <div>
                <img className='App6-iname' src={require('./img/inames.png')}/>
                </div>
                <div>
                <img className='App6-ncloud' src={require('./img/ncloud.png')}/>
                </div>
                </div>

    </div>
  );
}

