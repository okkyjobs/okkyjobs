import './Candidate.css';
import Aside from './Aside';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCheck} from "@fortawesome/free-solid-svg-icons";

function Candidate(){
    return(
      <main className='main-class'>
      <div className='main-box2'>
      <div className='main-container'>
          <Aside></Aside>
          
          <form className='candidate-information'>
            <div className='right-Candmain-box1'>
              <div className='main-Candleft-box'>
                <div className='Candmain-box'>
                  <div className='Candmain-subbox'>
                    <div className='candidate-box'>
                      <div className='more-box'>
                        <img className='company-logo-png' src={require('./img/company_logo.png')} />
                        <div className='company-logo-png-font'>
                          <span>인텍솔루션(주)</span>
                          <span>2024년 5월 17일 오후 8시 6분</span>
                        </div>
                      </div>
                      <img className='more-png' src={require('./img/more.png')} />
                    </div>
                    <div className='condidate-tag-box'>
                      <div className='candidate-tag-container'><span className='candidate-tag-container-font'>SI</span></div>
                      <div className='candidate-tag-container'><span className='candidate-tag-container-font'>제조</span></div>
                    </div>
                    <label className='label-font'>전자] SRM (공급자관계관리) 업무 구축_Java, 구매 경험 [ 수원 / 중,고급]</label>
                    <div className='date-box'>
                      <img className='calender-pic' src={require('./img/calender-pic.png')} />
                      <span className='date-font'>24.05.22</span>
                      <span className='date-font2'>마감</span>
                    </div>
                    <div className='pink-boxes'>
                      <div className='pink-box1'>
                        <div className='pink-container1'>
                          <span className='pink-container1-font'>근무시작일</span>
                          <div className='pink-container1-under-box'>
                            <img className='pink-container1-under-pic' src={require('./img/calender-pic.png')} />
                            <span className='pink-container1-under-box-font'>2024-06-17(12개월)</span>
                          </div>
                        </div>

                      </div>
                      <div className='pink-box2'>
                      <div className='pink-container2'>
                          <span className='pink-container2-font'>급여</span>
                          <div className='pink-container2-under-box'>
                            <img className='pink-container2-under-pic' src={require('./img/money-pic.png')} />
                            <span className='pink-container2-under-box-font'>650~750만원</span>
                          </div>
                        </div>
                      </div>
                      <div className='pink-box3'>
                      <div className='pink-container3'>
                          <span className='pink-container3-font'>근무지역</span>
                          <div className='pink-container3-under-box'>
                            <img className='pink-container3-under-pic' src={require('./img/location.png')} />
                            <span className='pink-container3-under-box-font'>경기 수원시 영통구 망포동</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='category-boxes'>
                      <div className='category-container1'>
                        <div className='category-container1-line1'>
                          <div className='li1'><span className='category-container1-line1-font1'>포지션</span></div>
                          <div className='li2'><span className='category-container1-line1-font2'>프론트엔드개발, 팀원</span></div>
                        </div>
                        <div className='category-container1-line2'>
                          <div className='li1'><span className='category-container1-line2-font1'>계약형태</span></div>
                          <div className='li2'><span className='category-container1-line2-font2'>계약직</span></div>
                        </div>
                      </div>
                      <div className='category-container1'>
                        <div className='category-container1-line1'>
                          <div className='li1'><span className='category-container1-line1-font1'>필요경력</span></div>
                          <div className='li2'><span className='category-container1-line1-font2'>6년 이상 ~ 무관</span></div>
                        </div>
                        <div className='category-container1-line2'>
                          <div className='li1'><span className='category-container1-line2-font1'>학력사항</span></div>
                          <div className='li2'><span className='category-container1-line2-font2'>전문학사 이상</span></div>
                        </div>
                      </div>
                      <div className='category-container1'>
                        <div className='category-container1-line1'>
                          <div className='li1'><span className='category-container1-line1-font1'>근무방식</span></div>
                          <div className='li2'><span className='category-container1-line1-font2'>상근</span></div>
                        </div>
                        <div className='category-container1-line2'>
                          <div className='li1'><span className='category-container1-line2-font1'>급여지급일</span></div>
                          <div className='li2'><span className='category-container1-line2-font2'>익월 10일</span></div>
                        </div>
                      </div>
                      <div className='category-container1'>
                        <div className='category-container1-line1'>
                          <div className='li1'><span className='category-container1-line1-font1'>보유스킬</span></div>
                          <div className='li2'><span className='category-container1-line1-font3'>java, 구매, srm, erp, 인터페이스</span></div>
                        </div>
                        <div className='category-container1-line3'>
                          <div className='li1'><span className='category-container1-line1-font1'></span></div>
                          <div className='li2'><span className='category-container1-line1-font2'></span></div>
                        </div>
                      </div>
                    </div>
            <div className='introduce-box'>
              <div className='introduce-container'>
              </div>
              설명글
              {/* <textarea autoComplete='off' placeholder='나를 소개해주세요.' rows='4' maxLength='150' className='introduce-textarea'></textarea> */}
            </div>
              </div>
            </div>
          </div>
          <div className='under-call-box'>
            <div className='call-font-box'>
              <span>담당자</span>
            </div>
            <div className='call-box'>
              <div className='call-container1'>
                <img className='call-container1-pic' src={require('./img/person-pic.png')} />
                <span>이희돈 팀장</span>
              </div>
              <div className='call-container2'>
                <img className='call-container2-pic' src={require('./img/call-pic.png')} />
                <span>010-2104-7539</span>
              </div>
              <div className='call-container3'>
                <img className='call-container3-pic' src={require('./img/email.png')} />
                <span>intec7@naver.com</span>
              </div>
            </div>
            
          </div>




          <div className='minus-box'>
            <div className='minusbar-box'>
              <div className='minusbarfont-box-line'>
                <div className='minus-line'></div>
                <button type='button' className='minusbut'><div className='minusbarfont'>- 접기</div></button>
                <div className='minus-line'></div>
              </div>

            </div>
          </div>



          <div className='purple-box'>
            <div className='purple-container'>
              <div>
                <div className='purple-container-main-font-box'>
                  <span className='purple-container-main-font'>지원 히스토리</span>
                </div>
                <div className='check-box'>
                  <div className='check-box1'>
                    <div className='check1'><span className='check'><FontAwesomeIcon icon={faCheck} /></span></div>
                  <div className='check1-font'><span className='check1-font1'>지원 완료</span><span className='check1-font1-1'>2024-05-08 05:21:46</span></div>
                  </div>
                  <div className='check-line1'></div>
                  <div className='check-box2'>
                    <div className='check2'><span className='check'><FontAwesomeIcon icon={faCheck} /></span></div>
                    <div className='check2-font'><span className='check1-font2'>지원서 열람</span><span className='check1-font1-2'>2024-05-20 10:18:27</span></div>
                  </div>
                  <div className='check-line2'></div>
                  <div className='check-box3'>
                    <div className='check3'><div className='check4'></div></div>
                    <div className='check3-font'><span className='check1-font3'>지원서 검토</span><span className='check1-font1-3'>진행중</span></div>
                </div>
                </div>
              </div>
          </div>
          </div>
            </div>

            </form>
      </div>
      </div>
      </main>
    )
}

export default Candidate;