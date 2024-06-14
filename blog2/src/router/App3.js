import { Link } from 'react-router-dom';
import './App3.css';

export default App3;

function App3() {
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

      <div className='App3-position-all'>
        <div className='App3-position-sup'>
          <span>포지션을 제안해보세요</span>
        </div>
        <div className='App3-position-text'>
          <span>개발자를 채용하는 Best Solution은 우리나라에서 OKKY Jobs 뿐입니다.</span>
        </div>
      </div>

      <div className='App3-all'>
        
        <div className='App3-free'> 
        <Link to='/recruits/contract/new'>
          <img className='App3-' src={require('./img/notebook.png')}></img>
          <h2 className='App3-free-1'>계약직</h2>
          <h2 className='App3-free-2'>프리랜서 포지션 제안하기</h2>
          <h2 className='App3-free-3'>업계 최고의 프리랜서 개발자분들이 OKKY에 방문하고 있어요. 포지션을 제안해 보세요</h2>
          <div className='App3-free-img'>
          <img className='App3-' src={require('./img/pagemove.png')}></img>
          </div>
        </Link>
        </div>

        <div className='App3-worker'> 
        <Link to='/recruits/fulltime/new'>
          
          <img className='App3-' src={require('./img/people.png')}></img>
          <h2 className='App3-worker-1'>정규직</h2>
          <h2 className='App3-worker-2'>정규직 포지션 제안하기</h2>
          <h2 className='App3-worker-3'>업계 최고의 경험을 갖고 있는 개발자분들이 OKKY에 방문하고 있어요. 포지션을 제안해 보세요</h2>
          <div className='App3-worker-img'>
          <img className='App3-' src={require('./img/pagemove.png')}></img>
          </div>
        </Link>

        </div>
      </div>

      <div className='App3-save'>
        <div>
          <span>최근 임시저장 목록</span>
        </div>
        <div className='App3-save-page'>
          <span>1/1 페이지</span>
        </div>
        <div className='App3-save-right'>
        <img className='App3-' src={require('./img/pagemove.png')}></img>
        </div>
        <div className='App3-save-left'>
        <img className='App3-' src={require('./img/pagemove2.png')}></img>
        </div>
      </div>
      <div className='App3-save-bar'>
        <p>0</p>
      </div>

      <div className='App3-if-save'>
        <span>임시저장 이력이 없습니다.</span>
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
  );
}

