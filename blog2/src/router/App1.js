import './App1.css';
import { Link, Route } from 'react-router-dom';
import React from 'react';
import { useState, useRef } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


export default App1;


function QuillCustom() {
  const [value, setValue] = useState("");
  const quillRef = useRef(null);

return (
    <>
      <ReactQuill
        style={{ height: "200px", width: "500px",  marginLeft: "30%", marginTop: "10%"}}
        ref={quillRef}
        theme="snow"
        value={value}
        onChange={setValue}
        placeholder="내용을 입력하세요."
      />
      <button>저장</button>
    </>
   
    
  );
}
function App1() {
  
  

  return (

    
    <div className="App1">
    
    <div className='_next_'>
          <header className='-App1-header-box'>
            <nav aria-label='Global' className='App1-nav-box'>
              <div className='App1-nav-div1'>
                <div className='App1-head-first-box'>
                  <a className='App1-head-logo-box' href='/'>
                    <span className='App1-head-logo-span'>OKKY Jobs</span>
                    <img className='App1-head-logo' alt='OKKY Logo' src={require('./img/logo4.PNG')}/>
                  </a>
                  <div className='head-words-box space-x-7'>
                    <div className='shrink-0'>
                      <a className='App1-words-box1' href='/contract'>계약직</a>
                    </div>
                    <div className='shrink-1'>
                      <a className='App1-words-box1' href='/fulltime'>정규직</a>
                    </div>
                    <div className='shrink-1'>
                      <a className='App1-words-box1' href='/talents'>Talent</a>
                    </div>
                    <div className='shrink-1'>
                      <a className='App1-words-box1' href='/evalcom'>좋은회사/나쁜회사</a>
                    </div>
                    
                  </div>
                </div>
                <div className='App1-head-second-box'>
                  <div className='App1-head-second-box1'>
                    <a href='/products/01010301'>
                      <button className='App1-buyForShow'>열람권 구매</button>
                    </a>
                    <a href='/products/01010101'>
                      <button className='App1-buyForShow'>등록권 구매</button>
                    </a>
                  </div>
                </div>
                <div className='App1-head-third-box'>
                  <a href='/recruits/drafts'>
                    <button className='company-but'>
                      <img className='company-pic' src={require('./img/company.png')}></img>
                      <span className='company'>구인등록</span>  
                    </button>
                  </a>
                </div>
                <div className='App1-head-forth-box'>
                  <button type='button' aria-haspopup='true' aria-expanded='false'  className='profile-but'>
                    <span className='App1-head-profile-span'>Open user menu</span>
                    <span className='App1-head-profile'>
                      <img className='App1-profile-part' alt='프로필 사진' src={require('./img/profile.png')}/>
                    </span>
                  </button>
                </div>
              </div>
            </nav>
          </header>
              <div className='App1-navbar'>
                <p>0</p>
              </div>
      </div>

      <div className='App1-top-main'>
          <div className='App1-top-bar'>
            <h2>1</h2>
          </div>
          <div className='App1-top-text'>
            <h2>계약직</h2>
          </div>
        </div>

        <div className='App1-header'>
          <div>
            <img className='App1-' src={require('./img/bluecom.png')}/>
          </div>
          <div className='App1-header-div'>
            <h2 className='App1-bluecom'>블루컴</h2>
            <h2 className='App1-header-text'>2024년 5월 17일 오후 7시 17분 등록 ·</h2>
          </div>
          <div>
            {/* <img className='App1-view' src={require('/img/view.PNG')}/> */}
          </div>
          <div className='App1-header-right'>
            <div>
              <img className='App1-share' src={require('./img/share.png')}/>
            </div>
            <div>
              <img className='App1-scrap' src={require('./img/scrap.png')}/>
            </div>  
          </div>
        </div>

          <div className='App1-header-title'>
            <div className='App1-title-top'>
              <div className='App1-title-si'>SI</div>
              <div className='App1-title-money'>금융</div>
            </div>
            
            <div className='App1-title-middle'>
              <h2>카드사 법인카드 이용성 개선 프로젝트</h2>
            </div>
            <div className='App1-title-bottom'>
              <div className='App1-title-img'>
              <img className='App1-' src={require('./img/calender.png')}/>
              </div>
              <div className='App1-close-day'>
                24.06.16
              </div>
              <div className='App1-close-text'>
                마감29일 전
              </div>
            </div>

            <div className='App1-middle-border'>
              <div className='App1-job-day'>
                근무시작일
                <h2>2024-06-10(8개월)</h2>
                <div className='App1-jobday-img'> 
               <img className='App1-' src={require('./img/calender.png')}/>
                </div>
              </div>
              <div className='App1-job-pay'>
                급여
                <h2>650~700만원</h2>
                <div>
               <img className='App1-jobpay-img' src={require('./img/pay.png')}/>
                </div>
              </div>
              <div className='App1-job-area'>
                근무지역
                <h2>서울 종로구 종로1가</h2>
              <div>
               <img className='App1-jobarea-img' src={require('./img/area.png')}/>
              </div>
              </div>
            </div>
            
            <div className='App1-category'>
              <div className='App1-position-text'>
                <h2>포지션</h2>
                <h2 className='App1-position-h1'>기타개발,팀원</h2>
              </div>
              <div className='App1-position-text2'>
                  <h2>계약형태</h2>
                  <h2 className='App1-position-h2'>계약직</h2>
              </div>
            </div>

            <div className='App1-category2'>
              <div className='App1-career-text'>
                <h2>필요경력</h2>
                <h2 className='App1-career-h1'>10년이상~무관</h2>
              </div>
                <div className='App1-school-text'>
                  <h2>학력사항</h2>
                  <h2 className='App1-school-h2'>무관</h2>
                </div>
            </div>

            <div className='App1-category3'>
              <div className='App1-job-style-text'>
                <h2>근무방식</h2>
                <h2 className='App1-job-h1'>상근</h2>
              </div>
              <div className='App1-payday-text'>
                  <h2>급여지급일</h2>
                  <h2 className='App1-payday-h2'>익월 15일</h2>
              </div>
            </div>
              
            <div className='App1-category4'>
              <div className='App1-skill-text'>
                <h2>보유스킬</h2>
                <h2 className='App1-skill-h2'>java</h2>
              </div>
            </div>

          <div className='App1-fixed'>
            <div className='App1-fixed-box'>
                <div className='App1-fixed-name'>
                 <img className='App1-' src={require('./img/login.PNG')}/>
                  <h2 className='App1-fixed-h1'>김필</h2>
                </div>
                <div className='App1-fixed-resume'>
                 <img className='App1-' src={require('./img/clip.png')}/>
                  <h2>이력서 없음</h2>
                </div>
                <div className='App1-fixed-input'>
                  <button type='App1-button'>이력서 등록하기</button>
                </div>
              </div>
          </div>
            
          <div className='App1-fixed2'>
            <div className='App1-fixed-box2'>
                <div className='App1-fixed-name2'>
                  <h2 className='App1-fixed-h3'>포지션을 찾고 계신가요?</h2>
                </div>
                <div className='App1-fixed-resume2'>
                 <img className='App1-' src={require('./img/person.png')}/>
                  <h2>Talent에 이력서를 등록하면 더 
                    많은 포지션 제안을 받을 수 있습
                    니다.</h2>
                </div>
                <div className='App1-fixed-input2'>
                  <button type='App1-button'>Talent 바로가기</button>
                </div>
              </div>
          </div>

          </div>

          <div>
            <div className='App1-project'>프로젝트 소개</div>
            <div className='App1-card'>
              <p>카드사 법인카드 이용성 개선 프로젝트</p>
            </div>
            <div className='App1-text-blue'>
              <p>안녕하세요.(주)블루컴입니다.</p>
            </div>
            <div className='App1-text-developer'>
              <p>아래와 같은 프로젝트 함께 참여할 프리랜서 개발자분을 모집하오니 검토 부탁 드립니다.</p>
            </div>
          </div>

          <div className='App1-middle-text'>
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

          <div className='App1-middle-text2'>
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

          <div className='App1-middle-text3'>
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

          <div className='App1-middle-text4'>
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

          <div className='App1-like'>
            <div className='App1-likes'>
            <img className='App1-' src={require('./img/like.png')}/>
            </div>
            <div className='App1-like-count'>
            <p>0</p>
            </div>
            <div className='App1-unlike'>
                <img className='App1-' src={require('./img/unlike.png')}/>
            </div>
              <div className='App1-unlike-count'>
               <p>0</p>
              </div>
          </div>

            <div className='App1-main-border'>
              0
            </div>

          <div className='App1-main'>
            <div className='App1-manager'>
              <p>담당자</p>
            </div>
            <div className='App1-maneger-info'>
              <p className='App1-main-people'>김세희전무</p>
              <p className='App1-main-hp'>02-830-7185</p>
              <p className='App1-main-email'>bluecom2016@daum.net</p>
            </div>
            <div className='App1-person-img'>
                <img className='App1-' src={require('./img/person.png')}/>
            </div>
            <div className='App1-call-img'>
                <img className='App1-' src={require('./img/call.png')}/>
            </div>
            <div className='App1-email-img'>
                <img className='App1-' src={require('./img/email2.png')}/>
            </div>
          </div>

          <div className='App1-bottom'>
            <div className='App1-bottom-main'>
              <div className='App1-bottom-img'> 
                <img className='App1-' src={require('./img/bluecom.png')}/>
                <h2>블루컴</h2>
              </div>
              <div className='App1-office-type'>
                <p>이 기업의 다른공고</p>
                <img className='App1-' src={require('./img/submit.PNG')}/>
              </div>  
            </div>
            
            <div className='App1-bottom-text'>
              <div>
                <h2>회사소개</h2>
              </div>
              <div>
                <h2>(주)블루컴은 오랜기간 IT업계에서 일을 해온 멤버들이 모여서 설립한 회사로 IT서비스/스마트재난안전관리시스템/스마트빌딩관리시스템/웹페
                  이지구축 등 사업영역을 확장하고 적극적인 인재채용으로 성장하는 회사 입니다.</h2>
              </div>
            </div>
          </div>

          <div className='App1-text-footer'>
            <div className='App1-footer-img'>
              <img className='App1-' src={require('./img/login.PNG')}/>
            </div>
            <div className='App1-text-box'>
              <div>
                <h2>궁금한 점이나 질문을 댓글로 남겨주세요 함께 답을 찾아볼 수 있는 시간이 있어요</h2>
              </div>
            </div>
          </div>

            <div className='App1-last-footer'>
              <div>
                <button type='App1-button'>댓글 쓰기</button>
              </div>
            </div>

            <div className='App1-footer'>
                <div className='App1-cat'>
                    <img className='App1-footer-cat' src={require('./img/cat.png')}/>
                </div>
                <div className='App1-footer-bar'>
                    <button type='App1-button'>1</button>
                </div>
              </div>

              <div className='App1-footer2'>
                <div className='App1-footer-logo'>
                    <img className='App1-ok-logo' src={require('./img/okkylogo.png')}/>
                    <h2>All That Developer</h2>
                    <div>
                    <img className='App1-facebook' src={require('./img/facebook.png')}/>
                    </div>
                    <div>
                    <img className='App1-youtube' src={require('./img/youtube.png')}/>
                    </div>
                    <div>
                    <img className='App1-email' src={require('./img/email.png')}/>
                    </div>

                </div>
              </div>
              <div className='App1-footer-middle'>
                <div className='App1-footer-btn'>
                  <div className='App1-button-one'>
                  <button>회사소개</button>
                  </div>
                  <div className='App1-button-two'>
                  <button>공지사항</button>
                  </div>
                  <div className='App1-button-three'>
                  <button>FAQ</button>
                  </div>
                  <div className='App1-button-four'>
                  <button>통합 서비스 이용약관</button>
                  </div>
                  <div className='App1-button-five'>
                  <button>개인정보 처리방침</button>
                  </div>
                </div>
              </div>


                <div className='App1-footer-text'>
                <div className='App1-text-one'>
                <div>상호명:(주)오키코리아|대표명:노상범, 장기진</div>
                </div>
                <div className='App1-text-two'>
                <div>사업자등록번호: 592-87-02037 | 통신판매업신고번호: 제 2022-서울강남-04742호 | 직업정보 제공사업 신고번호: J1200020230009</div>
                </div>
                <div className='App1-text-three'>
                <div>주소: 서울 강남구 봉은사로 303 TGL경복빌딩 502호 (06103) | 고객센터 : jobs@okky.kr (영업시간 평일 10:00~17:00) 주말 · 공휴일 휴무</div>
                </div>
                <div className='App1-text-four'>
                <div>© 2024 (주)오키코리아, Inc. All rights reserved.</div>
                </div>
                </div>

                <div className='App1-last-footer'>
                <div className='App1-sponse'>
                  <h2>SPONSORED BY</h2>
                </div>
                <div>
                <img className='App1-iname' src={require('./img/inames.png')}/>
                </div>
                <div>
                <img className='App1-ncloud' src={require('./img/ncloud.png')}/>
                </div>
                </div>
    </div>
  );
}

