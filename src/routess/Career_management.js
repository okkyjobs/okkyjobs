import './Career_management.css'
import Aside from './Aside';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faThin, faPlus} from "@fortawesome/free-solid-svg-icons";

function Career_management(){
    return(
    <main className='main-class'>
        <div className='CMmain-box'>
            <div className='main-container'>
                <Aside></Aside>
                <div className='cManagement-right-main-box'>
                    <div className='cManagement-manage-font'>
                        이력서 작성
                    </div>
                    <div className='purple-box-backgColor'>
                        <div className='purple-boxes'>
                            <div className='purple-boxes-head-box'><span className='purple-boxes-head-font'>구직 유형</span></div>
                            <div className='purple-containers'>
                                <div className='purple-box1'>
                                    <div className='purple-container1'>
                                    <span className='purple-container1-font'>정규직/계약직</span>
                                    <div className='purple-container1-under-box'>
                                        <span className='purple-container1-under-box-font'>전체구직중</span>
                                    </div>
                                    </div>

                                </div>
                                <div className='purple-box2'>
                                <div className='purple-container2'>
                                    <span className='purple-container2-font'>정규직</span>
                                    <div className='purple-container2-under-box'>
                                        <span className='purple-container2-under-box-font'>소속 근로자 / 4대 보험</span>
                                    </div>
                                    </div>
                                </div>
                                <div className='purple-box3'>
                                <div className='purple-container3'>
                                    <span className='purple-container3-font'>계약직</span>
                                    <div className='purple-container3-under-box'>

                                        <span className='purple-container3-under-box-font'>계약직 / 파견 / 프리랜서</span>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='CMsecond-box'>
                        <div className='CMsecond-container'>
                            <div className='CMsecond-container-head'>
                                <div className='CMsecond-container-head-box1'>
                                    <span className='CMsecond-container-head-font1'>이력서 전체 완성도</span>
                                    <div className='CMsecond-container-head-font2-box'><span className='CMsecond-container-head-font2'>4%</span></div>
                                </div>
                                <div className='CMsecond-container-head-box2'>
                                    <div className='CMsecond-container-head-font3-box'>
                                        <span className='CMsecond-container-head-font3'>60% 이상 작성 시 구직을 시작할 수 있어요. 작성률을 높여주세요!</span>
                                    </div>
                                </div>
                            </div>
                            <div className='career-complete-boxes'>
                                <div className='career-complete-box1'>
                                    <div className='career-complete-container1'>
                                        <span className='career-complete-container1-font'>개인정보</span>
                                        <div className='career-complete-container1-under-box'>
                                            <div className='career-complete-container1-under-box-bar'></div>
                                        </div>
                                    </div>

                                </div>
                                <div className='career-complete-box1'>
                                    <div className='career-complete-container1'>
                                        <span className='career-complete-container1-font'>경력 / 보유기술</span>
                                        <div className='career-complete-container1-under-box'>
                                            <div className='career-complete-container1-under-box-bar'></div>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className='career-complete-box1'>
                                    <div className='career-complete-container1'>
                                        <span className='career-complete-container1-font'>학력</span>
                                        <div className='career-complete-container1-under-box'>
                                            <div className='career-complete-container1-under-box-bar'></div>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className='career-complete-box1'>
                                    <div className='career-complete-container1'>
                                        <span className='career-complete-container1-font'>근무경력</span>
                                        <div className='career-complete-container1-under-box'>
                                            <div className='career-complete-container1-under-box-bar'></div>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className='career-complete-box1'>
                                    <div className='career-complete-container1'>
                                        <span className='career-complete-container1-font'>프로젝트경력</span>
                                        <div className='career-complete-container1-under-box'>
                                            <div className='career-complete-container1-under-box-bar'></div>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className='career-complete-box1'>
                                    <div className='career-complete-container1'>
                                        <span className='career-complete-container1-font'>선호근무조건</span>
                                        <div className='career-complete-container1-under-box'>
                                            <div className='career-complete-container1-under-box-bar'></div>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className='career-complete-box1'>
                                    <div className='career-complete-container1'>
                                        <span className='career-complete-container1-font'>상세소개</span>
                                        <div className='career-complete-container1-under-box'>
                                            <div className='career-complete-container1-under-box-bar'></div>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className='career-complete-box1'>
                                    <div className='career-complete-container1'>
                                        <span className='career-complete-container1-font'>파일 / 링크</span>
                                        <div className='career-complete-container1-under-box'>
                                            <div className='career-complete-container1-under-box-bar'></div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='CMthird-box'>
                        <div className='CMthird-container'>
                            <div className='CMthird-container1'>
                                <div className='CMthird-container1-head'>
                                    <span className='CMthird-container1-font1'>개인정보</span>
                                    <div className='CMthird-container1-font2-box'>
                                        <span className='CMthird-container1-font2'>완성도</span>
                                        <span className='CMthird-container1-font3'>20%</span>
                                    </div>
                                </div>
                            </div>
                            <div className='CMthird-container2'>
                                <div className='CMthird-container2-profile-cat'>
                                    <img className='cat-pic' src={require('./img/profile-cat-pic.png')} />
                                </div>
                                <div className='CMthird-container2-input-first'>
                                    <label className='CMthird-container2-name'>이름<span className='star'>*</span></label>
                                    <div className='CMthird-name-input-box'><input  placeholder='실명 입력'  type='text' className='CMthird-container2-input'></input></div>
                                </div>
                                <div className='check-container-box-shrink'>
                                    <div>
                                        <div className='check-container-box'>
                                            <input className='CMthird-check-box' type='checkbox'></input>
                                            <div className='check-container-box-font'>공개</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='CMthird-container3'>
                                <div className='CMthird-input-boxes'>
                                    <div className='CMthird-input-box1'>
                                        <span className='CMthird-input-box1-font'>연락처<span className='star'>*</span></span>
                                        <input placeholder='010-0000-0000' type='text' className='CMthird-box1-input'></input>
                                    </div>
                                    <div className='CMthird-input-box2-box'>
                                        <div className='CMthird-input-box2'>
                                            <span className='CMthird-input-box2-font'>이메일<span className='star'>*</span></span>
                                                <div className='add-email-box'>
                                                    <input placeholder='이메일 입력란' type='text' className='CMthird-box2-input'></input>
                                                </div>
                                        </div>
                                        <div className='CMthird-input-box2-subbox1'>
                                            <button className='CMthird-input-box2-but'>
                                                <div className='CMthird-input-box2-but-font-box'><span className='CMthird-input-box2-but-font'>이메일 추가</span></div>
                                            </button>
                                        </div>
                                    </div>
                                    <div className='CMthird-input-box3'>
                                        <span className='CMthird-input-box3-font'>한 줄 소개</span>
                                        <input placeholder='작성된 내용 Talent 목록에 노출됩니다. 자신을 소개해서 기업의 이목을 끌어보세요' type='text' className='CMthird-box3-input'></input>
                                    </div>
                                    <div className='text-count'>
                                        <span className='introduce-textCount'>0/50</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='CMforth-box'>
                        <div className='CMforth-container'>
                            <div className='CMforth-container1'>
                                <div className='CMforth-container1-head'>
                                    <span className='CMforth-container1-font1'>경력/보유기술</span>
                                    <div className='CMforth-container1-font2-box'>
                                        <span className='CMforth-container1-font2'>완성도</span>
                                        <span className='CMforth-container1-font3'>0%</span>
                                    </div>
                                </div>
                            </div>
                            <div className='CMforth-container3'>
                                <div className='CMforth-input-boxes'>
                                    <div className='CMforth-input-box1'>
                                        <span className='CMforth-input-box1-font'>직군<span className='star'>*</span></span>
                                        <div className='work-box1'>
                                            <select  className='work-input'>
                                            <option value='-1'>직군을 선택해주세요.</option>
                                            <option value='1'>개발</option>
                                            <option value='2'>기획</option>
                                            <option value='3'>디자인</option>
                                            <option value='4'>마케팅</option>
                                            <option value='5'>기타</option>
                                            <option value='6'>무직</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className='CMforth-input-box2'>
                                        <span className='CMforth-input-box2-font'>직무<span className='star'>*</span></span>
                                        <div className='work-box2'>
                                            <select  className='work-input'>
                                            <option value='-1'>직무을 선택해주세요.</option>
                                            <option value='1'>백엔드</option>
                                            <option value='2'>프론트엔드</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className='CMforth-input-box3'>
                                        <span className='CMforth-input-box3-font'>보유기술<span className='star'>*</span></span>
                                        <div className='work-box3'>
                                            <select  className='work-input'>
                                            <option value='-1'>보유기술을 선택해주세요.</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className='CMforth-input-box4'>
                                        <span className='CMforth-input-box4-font'>전체경력<span className='star'>*</span></span>
                                        <div className='work-box4'>
                                            <select  className='work-input'>
                                            <option value='-1'>전체경력을 선택해주세요.</option>
                                            <option value='1'>백엔드</option>
                                            <option value='2'>프론트엔드</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='CMfifth-box'>
                        <div className='CMfifth-container'>
                            <div className='CMfifth-container-head'>
                                <span className='CMfifth-container-head-font'>학력</span>
                                <div className='CMfifth-container1-font2-box'>
                                    <span className='CMfifth-container1-font2'>완성도</span>
                                    <span className='CMfifth-container1-font3'>0%</span>
                                </div>
                            </div>
                            <div className='CMfifth-box-container1'>
                            <button type='button' className='grade-input-box1'>
                                <img className='plus-icon' src={require('./img/plus-icon.png')} />
                                {/* <div className='plus-text'><FontAwesomeIcon icon={faPlus}/></div> */}
                                <div><span className='plus-font'>추가하기</span></div>
                            </button>
                        </div>
                    </div>
                  </div>
                  <div className='CMsixth-box'>
                        <div className='CMsixth-container'>
                            <div className='CMsixth-container-head'>
                                <span className='CMsixth-container-head-font'>근무경력</span>
                                <div className='CMsixth-container1-font2-box'>
                                    <span className='CMsixth-container1-font2'>완성도</span>
                                    <span className='CMsixth-container1-font3'>0%</span>
                                </div>
                            </div>
                            <div className='CMsixth-box-container1'>
                            <button type='button' className='grade-input-box2'>
                                <img className='plus-icon' src={require('./img/plus-icon.png')} />
                                {/* <div className='plus-text'><FontAwesomeIcon icon={faPlus}/></div> */}
                                <div><span className='plus-font'>추가하기</span></div>
                            </button>
                        </div>
                    </div>
                  </div>
                  <div className='CMseventh-box'>
                        <div className='CMseventh-container'>
                            <div className='CMseventh-container-head'>
                                <span className='CMseventh-container-head-font'>프로젝트 경력</span>
                                <div className='CMseventh-container1-font2-box'>
                                    <span className='CMseventh-container1-font2'>완성도</span>
                                    <span className='CMseventh-container1-font3'>0%</span>
                                </div>
                            </div>
                            <div className='CMseventh-box-container1'>
                            <button type='button' className='grade-input-box3'>
                                <img className='plus-icon' src={require('./img/plus-icon.png')} />
                                {/* <div className='plus-text'><FontAwesomeIcon icon={faPlus}/></div> */}
                                <div><span className='plus-font'>추가하기</span></div>
                            </button>
                        </div>
                    </div>
                  </div>
                  <div className='CMeighth-box'>
                    <div className='CMeighth-container'>
                        <div className='CMeighth-container-head'>
                            <span className='CMeighth-container-head-font'>선호근무조건</span>
                            <div className='CMeighth-container1-font2-box'>
                                <span className='CMeighth-container1-font2'>완성도</span>
                                <span className='CMeighth-container1-font3'>0%</span>
                            </div>
                        </div>
                        <div className='CMeighth-container-main'>
                            <div className='CMeighth-container-main1'>
                                <span className='CMeighth-container-main1-font1'>프로젝트 시작 가능일<span className='star'>*</span></span>
                                <div className='CMeighth-container-main1-subbox1'>
                                    <div className='CMeighth-container-main1-subbox2'>
                                        <img className='CMeighth-container-main1-subbox2-pic1' src={require('./img/calender-pic.png')} />
                                        <input className='CMeighth-container-main1-subbox2-input' placeholder='년,월,일'></input>
                                    </div>
                                </div>
                            </div>
                            <div className='CMeighth-container-main2'>
                                <span className='CMeighth-container-main2-font1'>프리랜서 유형<span className='star'>*</span></span>
                                <div className='CMeighth-container-main2-box1'>
                                    <div className='CMeighth-container-main2-subbox1'>
                                        <input className='CMeighth-container-main2-subbox1-checkbox1' type='radio'></input>
                                        <span className='CMeighth-container-main2-subbox1-font1'>개인</span>
                                    </div>
                                    <div className='CMeighth-container-main2-subbox2'>
                                        <input className='CMeighth-container-main2-subbox2-checkbox1' type='radio'></input>
                                        <span className='CMeighth-container-main2-subbox2-font1'>팀/회사</span>
                                    </div>
                                </div>
                            </div>
                            <div className='CMeighth-container-main3'>
                                <span className='CMeighth-container-main3-font1'>팀/회사명</span>
                                <div className='CMeighth-container-main3-subbox1'>
                                    <div className='CMeighth-container-main3-subbox2'>
                                        <input className='CMeighth-container-main1-subbox2-input' placeholder='팀/회사명을 입력해주세요.'></input>
                                    </div>
                                </div>
                            </div>
                            <div className='CMeighth-container-main4'>
                                <span className='CMeighth-container-main4-font1'>사업자 유형</span>
                                <div className='CMeighth-container-main4-box'>
                                    <div className='CMeighth-container-main4-subbox1'>
                                        <input type='radio'></input>
                                        <span>해당없음</span>
                                    </div>
                                    <div className='CMeighth-container-main4-subbox2'>
                                        <input type='radio'></input>
                                        <span>개인사업자</span>
                                    </div>
                                    <div className='CMeighth-container-main4-subbox3'>
                                        <input type='radio'></input>
                                        <span>법인사업자</span>
                                    </div>
                                </div>
                            </div>
                            <div className='CMeighth-container-main5'>
                                <span className='CMeighth-container-main5-font1'>희망근무지</span>
                                <div className='CMeighth-container-main5-work-box'>
                                    <select  className='work-input'>
                                    <option value='-1'>시을 선택하세요.</option>
                                    <option value='1'>개발</option>
                                    <option value='2'>기획</option>
                                    <option value='3'>디자인</option>
                                    <option value='4'>마케팅</option>
                                    <option value='5'>기타</option>
                                    <option value='6'>무직</option>
                                    </select>
                                    <select className='work-input' >
                                    <option value='-1'>군/구를 선택하세요.</option>
                                    </select>
                                </div>
                            </div>
                            <div className='CMeighth-container-main6'>
                                <span className='CMeighth-container-main6-font1'>희망 근무 유형<span className='star'>*</span></span>
                                <div className='CMeighth-container-main6-box'>
                                    <div className='CMeighth-container-main6-subbox1'>
                                        <input type='radio'></input>
                                        <span>상근</span>
                                    </div>
                                    <div className='CMeighth-container-main6-subbox2'>
                                        <input type='radio'></input>
                                        <span>재택</span>
                                    </div>
                                    <div className='CMeighth-container-main6-subbox3'>
                                        <input type='radio'></input>
                                        <span>협의</span>
                                    </div>
                                </div>
                            </div>
                            <div className='CMeighth-container-main7'>
                                <span className='CMeighth-container-main7-font1'>희망 월 급여<span className='star'>*</span></span>
                                    <div className='CMeighth-container-main7-box'>
                                        <div className='CMeighth-container-main7-subbox1'>
                                        <input className='CMeighth-container-main7-box-input' placeholder='희망 월 급여를 입력해주세요.'></input>
                                        <div><span className='CMeighth-container-main7-subbox1-font1'>만원</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                  </div>
                  
                  <div className='CMninth-box'>
                    <div className='CMninth-container'>
                        <div className='CMninth-container-head'>
                        <span className='CMninth-container-head-font'>상세 소개</span>
                        <div className='CMninth-container1-font2-box'>
                            <span className='CMninth-container1-font2'>완성도</span>
                            <span className='CMninth-container1-font3'>0%</span>
                        </div>
                        </div>
                        <div>
                            <div className='CMninth-container-main'>
                                <div className='CMninth-container-main-box'>
                                    <div className='CMninth-container-main-container'>
                                        <div className='CMninth-container-main-subbox1'>
                                            <img className='CMninth-container-main-subbox1-pic' src={require('./img/info-pic.png')} />
                                        </div>
                                        <div className='CMninth-container-main-subbox2'>
                                            <span>· 더 나은 구직을 위해 나를 자유롭게 표현해 보세요.</span>
                                            <span>· 이름, 이메일, 전화번호와 같은 개인정보는 관리자에 의해 삭제될 수 있습니다.</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <textarea placeholder=' · 자기소개 
                                                                        · 희망 프로젝트 
                                                                        · 팀 구직(팀 소개).' rows='7' maxLength='10000' className='CMninth-textarea'></textarea>
                            <div className='text-count'>
                                <span className='introduce-textCount'>0/10000</span>
                            </div>
                        </div>
                    </div>
                  </div>

                  <div className='CMntenth-box'>
                    <div className='CMntenth-container'>
                        <div className='CMntenth-container-head'>
                        <span className='CMntenth-container-head-font'>파일/링크</span>
                        <div className='CMntenth-container1-font2-box'>
                            <span className='CMntenth-container1-font2'>완성도</span>
                            <span className='CMntenth-container1-font3'>0%</span>
                        </div>
                        </div>
                        <div>
                            <div className='CMntenth-container-main'>
                                <div className='CMntenth-container-main-box'>
                                    <div className='CMntenth-container-main1-subbox1'>
                                        <div className='CMntenth-container-main1-subbox1-link'>
                                                <div className='CMntenth-box-container1'>
                                                    <div>
                                                        <input type='file' className='hidden'/>
                                                        <button className='file-input-box1'>
                                                            <div className='clip-icon-box'>
                                                                <div className='clip-padd'>
                                                                    <img className='clip-icon' src={require('./img/clip-icon.png')} />
                                                                </div>
                                                            </div>
                                                            <div className='plus-icon1-box'>
                                                                <img className='plus-icon1' src={require('./img/plus-icon.png')} />
                                                            </div>
                                                            <div className='plus1-font-box'><span className='plus1-font'>이력서 파일 추가</span></div>
                                                            <div className='plus2-font-box'><span className='plus2-font'>최대 10MB(pdf, doc, docx)</span></div>
                                                        </button>
                                                    </div>
                                                    <div>
                                                        <input type='file' className='hidden'/>
                                                        <button className='file-input-box1'>
                                                            <div className='clip-icon-box'>
                                                                <div className='clip-padd'>
                                                                    <img className='clip-icon' src={require('./img/clip-icon.png')} />
                                                                </div>
                                                            </div>
                                                            <div className='plus-icon1-box'>
                                                                <img className='plus-icon1' src={require('./img/plus-icon.png')} />
                                                            </div>
                                                            <div className='plus1-font-box'><span className='plus1-font'>포트폴리오 파일 추가</span></div>
                                                            <div className='plus2-font-box'><span className='plus2-font'>최대 10MB(pdf, doc, docx)</span></div>
                                                        </button>
                                                    </div>
                                                    <div>
                                                        <input type='file' className='hidden'/>
                                                        <button className='file-input-box1'>
                                                            <div className='clip-icon-box'>
                                                                <div className='clip-padd'>
                                                                    <img className='clip-icon' src={require('./img/clip-icon.png')} />
                                                                </div>
                                                            </div>
                                                            <div className='plus-icon1-box'>
                                                                <img className='plus-icon1' src={require('./img/plus-icon.png')} />
                                                            </div>
                                                            <div className='plus1-font-box'><span className='plus1-font'>기타 파일 추가</span></div>
                                                            <div className='plus2-font-box'><span className='plus2-font'>최대 10MB(pdf, doc, docx)</span></div>
                                                        </button>
                                                    </div>
                                                    <div>
                                                        <input type='file' className='hidden'/>
                                                        <button className='file-input-box1'>
                                                            <div className='clip-icon-box'>
                                                                <div className='clip-padd'>
                                                                    <img className='clip-icon' src={require('./img/clip-icon.png')} />
                                                                </div>
                                                            </div>
                                                            <div className='plus-icon1-box'>
                                                                <img className='plus-icon1' src={require('./img/plus-icon.png')} />
                                                            </div>
                                                            <div className='plus1-font-box'><span className='plus1-font'>웹 URL 추가 ( 0 / 5 )</span></div>
                                                        </button>
                                                    </div>
                                                </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                  </div>

                <div className='CMeleventh-box'>
                    <div className='CMeleventh-container'>
                        <div className='CMeleventh-container-subbox1'>
                            <button className='CMeleventh-container-subbox1-but1'>
                                <div className='CMeleventh-container-subbox1-but1-padd'><span className='CMeleventh-container-subbox1-but1-font'>임시저장</span></div>
                            </button>
                        </div>
                        <div className='CMeleventh-container-subbox2'>
                            <button className='CMeleventh-container-subbox2-but1'>
                            <div className='CMeleventh-container-subbox2-but1-padd'><span className='CMeleventh-container-subbox2-but1-font'>저장</span></div>
                            </button>
                        </div>
                    </div>
                </div>


                </div>
            </div>
        </div>
    </main>
    )
}

export default Career_management;