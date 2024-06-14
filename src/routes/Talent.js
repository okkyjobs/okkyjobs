import React from 'react'
import './Talent.css';
import GeneralModal from '../modals/GeneralModal';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';






function Talent() {
  

  const [index, setIndex] = React.useState('-1');
  const onSelect = (event) => {
    setIndex(event.target.value);
  }
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  
  

  const [indexB, setIndexB] = React.useState('-1');
  const onSelectB = (eventB) => {
    setIndexB(eventB.target.value);
  }
  const [isVisibleB, setIsVisibleB] = useState(false);

  const toggleVisibilityB = () => {
    setIsVisibleB(!isVisibleB);
  };
  
  

  const [indexC, setIndexC] = React.useState('-1');
  const onSelectC = (eventC) => {
    setIndexC(eventC.target.value);
  }
  const [isVisibleC, setIsVisibleC] = useState(false);

  const toggleVisibilityC = () => {
    setIsVisibleC(!isVisibleC);
  };
  
  

  const [indexD, setIndexD] = React.useState('-1');
  const onSelectD = (eventD) => {
    setIndexD(eventD.target.value);
  }
  const [isVisibleD, setIsVisibleD] = useState(false);

  const toggleVisibilityD = () => {
    setIsVisibleD(!isVisibleD);
  };

  

  const [indexE, setIndexE] = React.useState('-1');
  const onSelectE = (eventE) => {
    setIndexE(eventE.target.value);
  }
  const [isVisibleE, setIsVisibleE] = useState(false);

  const toggleVisibilityE = () => {
    setIsVisibleE(!isVisibleE);
  };

  

  const [indexF, setIndexF] = React.useState('-1');
  const onSelectF = (eventF) => {
    setIndexF(eventF.target.value);
  }
  const [isVisibleF, setIsVisibleF] = useState(false);

  const toggleVisibilityF = () => {
    setIsVisibleF(!isVisibleF);
  };

  

  const [indexG, setIndexG] = React.useState('-1');
  const onSelectG = (eventG) => {
    setIndexG(eventG.target.value);
  }
  const [isVisibleG, setIsVisibleG] = useState(false);

  const toggleVisibilityG = () => {
    setIsVisibleG(!isVisibleG);
  };


  

  const [indexH, setIndexH] = React.useState('-1');
  const onSelectH = (eventH) => {
    setIndexH(eventH.target.value);
  }
  const [isVisibleH, setIsVisibleH] = useState(false);

  const toggleVisibilityH = () => {
    setIsVisibleH(!isVisibleH);
  };
  

  const [indexI, setIndexI] = React.useState('-1');
  const onSelectI = (eventI) => {
    setIndexI(eventI.target.value);
  }
  const [isVisibleI, setIsVisibleI] = useState(false);

  const toggleVisibilityI = () => {
    setIsVisibleI(!isVisibleI);
  };


  

  const [indexJ, setIndexJ] = React.useState('-1');
  const onSelectJ = (eventJ) => {
    setIndexJ(eventJ.target.value);
  }
  const [isVisibleJ, setIsVisibleJ] = useState(false);

  const toggleVisibilityJ = () => {
    setIsVisibleJ(!isVisibleJ);
  };


  
  // const subAreas = areas.find((area) => area.name === selectedArea)?.subArea || [];

  


    return(
        
        <div className='category_and_middle_box'>
          <div className='category2'>  
          
            <div className='category-button'> 
              <div className='resume-management'>
                <button type='button'><img className='resume' src={require('./img/resume_memo.jpg')}></img>이력서 관리</button>
              </div>
            <div className='category-button-in'>
              <div className='fixed-filter'>
                <div className='filter-main'>
                  <div>
                  <img className='filter-main-list' src={require('./img/list.PNG')}/>
                  <span className='filter'> 인재를 쉽게 찾는 스마트 필터</span>
                  </div>
                </div>
                <div className='scroll-y'>
                  
                  <div className='type'>
                    <div>
                      <div>
                        <div className='button-and-img'>
                          <button onClick={toggleVisibilityB} className='button-a' type='button'>
                            유형</button>
                            {isVisibleB && (
                              <div>
                                <Xb/>
                              </div>
                            )}
                            <img className='arrow' src={require('./img/submit.PNG')}/>
                        </div>
                      </div>
                      <div>

                      </div>
                    </div>
                  </div>
                  <div className='position-main'>
                    <button onClick={toggleVisibility}>포지션</button>
                    {isVisible && (
                      <div>
                        <Xa/>
                      </div>
                    )}
                    <img className='' src={require('./img/submit.PNG')}/>
                  </div>
                  <div className='skill'>
                    <button onClick={toggleVisibilityC}>보유기술</button>
                    {isVisibleC && (
                      <div>
                        <Xc/>
                      </div>
                    )}
                    <img className='' src={require('./img/submit.PNG')}/>
                  </div>
                  <div className='career'>
                    <button onClick={toggleVisibilityD}>전체경력</button>
                    {isVisibleD && (
                      <div>
                        <Xd/>
                      </div>
                    )}
                    <img className='' src={require('./img/submit.PNG')}/>
                  </div>
                  <div className='money'>
                    <button onClick={toggleVisibilityE}>희망급여</button>
                    {isVisibleE && (
                      <div>
                        <Xe/>
                      </div>
                    )}
                    <img className='' src={require('./img/submit.PNG')}/>
                  </div>
                  <div className='area'>
                    <button onClick={toggleVisibilityF}>근무지역</button>
                    {isVisibleF && (
                      <div>
                        <Xf/>
                      </div>
                    )}
                    <img className='' src={require('./img/submit.PNG')}/>
                  </div>
                  <div className='jobway'>
                    <button onClick={toggleVisibilityG}>근무방식</button>
                    {isVisibleG && (
                      <div>
                        <Xg/>
                      </div>
                    )}
                    <img className='' src={require('./img/submit.PNG')}/>
                  </div>

                  <div className='corporation-filter'>
                    <div>
                      <span className='filter'> 기업회원 전용 필터</span>
                    </div>
                  </div>

                  <div className='ability'>
                    <button onClick={toggleVisibilityH}>학력</button>
                    {isVisibleH && (
                      <div>
                        <Xh/>
                      </div>
                    )}
                    <img className='' src={require('./img/submit.PNG')}/>
                  </div>
                  <div className='start'>
                    <button onClick={toggleVisibilityI}>근무시작일</button>
                    {isVisibleI && (
                      <div>
                        <Xi/>
                      </div>
                    )}
                    <img className='' src={require('./img/submit.PNG')}/>
                  </div>
                  <div className='freelance'>
                    <button onClick={toggleVisibilityJ}>프리랜서 유형</button>
                    {isVisibleJ && (
                      <div>
                        <Xj/>
                      </div>
                    )}
                    <img className='' src={require('./img/submit.PNG')}/>
                  </div>
                  {/* <div className='interview-way'>
                    <button>인터뷰 진행 방법</button>
                    <img className='' src={require('./img/submit.PNG')}/>
                  </div> */}
                
                </div>
              </div>
              
              <div className='save'>
                <div className='save1'>
                  <input className='save1-checkbox' type='checkbox'></input>
                  <input className='saveinput' placeholder='저장'></input>
                </div>
                <div className='questionimg'>
                  <img className='question' src={require('./img/question.PNG')}/>
                </div>
                <div className='reset'>
                  <input type='button' className='reset1'></input>
                </div>
                <img className='resetimg' src={require('./img/resetimg.jpg')}/>
                <div className='reset'>
                  <input type='button' className='reset2'></input>
                </div>
                <div className='filtersearch'>
                  <span>필터로 검색</span>
                  <img className='magnifier' src={require('./img/Magnifier.jpg')}/>
                </div>
                  
              </div>
            </div>
         </div>
        </div>
        <div className='middle-box'>
            <div className='middle-box-in'>
                    <span className='event-text'>개발자가 없으면 세상은 멈춘다.</span>
                    <select className='talent-sequence-button'>
                    {/* <img className='talent-sequence-button img' src={require('./img/list2.png')}/> */}

                      talent-sequence-button img
                    {/* <button className='talent-sequence-button' type='button'></button> */}
                      <option value='-1'><input type='checkbox'></input>최신순</option>
                      <option value='1'>과거순</option>
                      <option value='2'>완성도순</option>
                        
                    </select>
            </div>

          <div className='middle-text-all'>
            <a className='middle-text-all-a' href='/talents/talentsCode'>
            <div className='middle-text'>
              <div className='middle-text-ex'>
                <div className='middle-text-in'>
                    <img className='profile-img' src={require('./img/empty-profile.jpg')}/>
                  <div className='middle-text-in1'>
                    <span className='resume-name'>박OO</span>
                    <span className='recume-code'>#852</span>
                    <div className='resume-tag'>
                      <sapn className='now'>방금 등록된</sapn>
                      <sapn className='well'>잘 잘성된</sapn>
                    </div>
                  </div>
                </div>
                <div onClick={GeneralModal}>
                  <img className='scrap-mark' src={require('./img/scrap.jpg')}/>
                </div>
              </div>

              <div className='resume-content'>
                <div className='resume-content-left'>
                  <span>총 20년 이상의 경력으로 개발 직군의 백엔드개발, 풀스택 개발, 프론트개발 직무로 계약직에 지원합니다.(대학교 4년제) 학사 학위를 보유하고 있으며, 서울 전체, 경기 고양시 덕양구, 경기 고양시 일산 동구, 경기 고양시 일산 서구, 경기 파주시 지역에서 2024-06-11 부터 근무가 가능합니다. 근무 유형은 협의 가능하고 월 급여 850만원을 희망합니다.</span>
                </div>
                <div className='resume-right'>
                  <div className='resume-right-top'>
                    <div className='resume-right-top-work-experience'>
                      <span className='resume-right-top-num'>3개</span>
                      <span><br/>근무 경력</span>
                    </div>
                    <div className='resume-right-top-project'>
                      <span className='resume-right-top-num'>2개</span>
                      <span><br/>프로젝트</span>
                    </div>
                    <div className='resume-right-top-portfolio'>
                      <span className='resume-right-top-num'>5개</span>
                      <span><br/>포트폴리오</span>
                    </div>
                  </div>
                  <div className='resume-right-bottom'>
                    <span className='introduce-one-line'>"안녕하세요^^" 등의 한 줄 소개 쓰는 곳</span>
                  </div>
                </div>
              </div>
              <div className='resume-bottom'>
                <div className='resume-bottom-tag'>
                    <span>java</span>
                    <span>css</span>
                    <span>html</span>
                    <span>sql</span>
                    <span>linux</span>
                </div>
                {/* <div className='read-resume'>
                  <button className='read-resume-button' type='button'><img src={require('./img/read-resume.jpg')}/>바로 이력서 열람하여 진행</button>
                </div> */}
              </div>
            </div>
            </a>



            <div className='middle-text'>
              <div className='middle-text-ex'>
                <div className='middle-text-in'>
                    <img className='profile-img' src={require('./img/empty-profile.jpg')}/>
                  <div className='middle-text-in1'>
                    <span className='resume-name'>박OO</span>
                    <span className='recume-code'>#852</span>
                    <div className='resume-tag'>
                      <sapn className='now'>방금 등록된</sapn>
                      <sapn className='well'>잘 잘성된</sapn>
                    </div>
                  </div>
                </div>
                <div>
                  <img className='scrap-mark' src={require('./img/scrap.jpg')}/>
                </div>
              </div>

              <div className='resume-content'>
                <div className='resume-content-left'>
                  <span>총 20년 이상의 경력으로 개발 직군의 백엔드개발, 풀스택 개발, 프론트개발 직무로 계약직에 지원합니다(대학교 4학년제) 학사 학위를 보유하고 있으며, 서울 전체, 경기 고양시 덕양구, 경기 고양시 일산 동구, 경기 고양시 일산 서구, 경기 파주시 지역에서 2024-06-11 부터 근무가 가능합니다. 근무 유형은 협의 가능하고 월 급여 850만원을 희망합니다.</span>
                </div>
                <div className='resume-right'>
                  <div className='resume-right-top'>
                    <div className='resume-right-top-work-experience'>
                      <span className='resume-right-top-num'>3개</span>
                      <span><br/>근무 경력</span>
                    </div>
                    <div className='resume-right-top-project'>
                      <span className='resume-right-top-num'>2개</span>
                      <span><br/>프로젝트</span>
                    </div>
                    <div className='resume-right-top-portfolio'>
                      <span className='resume-right-top-num'>5개</span>
                      <span><br/>프트폴리오</span>
                    </div>
                  </div>
                  <div className='resume-right-bottom'>
                    <span className='introduce-one-line'>"안녕하세요^^" 등의 한 줄 소개 쓰는 곳</span>
                  </div>
                </div>
              </div>
              <div className='resume-bottom'>
                <div className='resume-bottom-tag'>
                    <span>java</span>
                    <span>css</span>
                    <span>html</span>
                    <span>sql</span>
                    <span>linux</span>
                </div>
                {/* <div className='read-resume'>
                  <button className='read-resume-button' type='button'><img src={require('./img/read-resume.jpg')}/>바로 이력서 열람하여 진행</button>
                </div> */}
              </div>
            </div>
            <div className='middle-text'>
              <div className='middle-text-ex'>
                <div className='middle-text-in'>
                    <img className='profile-img' src={require('./img/empty-profile.jpg')}/>
                  <div className='middle-text-in1'>
                    <span className='resume-name'>박OO</span>
                    <span className='recume-code'>#852</span>
                    <div className='resume-tag'>
                      <sapn className='now'>방금 등록된</sapn>
                      <sapn className='well'>잘 잘성된</sapn>
                    </div>
                  </div>
                </div>
                <div>
                  <img className='scrap-mark' src={require('./img/scrap.jpg')}/>
                </div>
              </div>

              <div className='resume-content'>
                <div className='resume-content-left'>
                  <span>총 20년 이상의 경력으로 개발 직군의 백엔드개발, 풀스택 개발, 프론트개발 직무로 계약직에 지원합니다(대학교 4학년제) 학사 학위를 보유하고 있으며, 서울 전체, 경기 고양시 덕양구, 경기 고양시 일산 동구, 경기 고양시 일산 서구, 경기 파주시 지역에서 2024-06-11 부터 근무가 가능합니다. 근무 유형은 협의 가능하고 월 급여 850만원을 희망합니다.</span>
                </div>
                <div className='resume-right'>
                  <div className='resume-right-top'>
                    <div className='resume-right-top-work-experience'>
                      <span className='resume-right-top-num'>3개</span>
                      <span><br/>근무 경력</span>
                    </div>
                    <div className='resume-right-top-project'>
                      <span className='resume-right-top-num'>2개</span>
                      <span><br/>프로젝트</span>
                    </div>
                    <div className='resume-right-top-portfolio'>
                      <span className='resume-right-top-num'>5개</span>
                      <span><br/>프트폴리오</span>
                    </div>
                  </div>
                  <div className='resume-right-bottom'>
                    <span className='introduce-one-line'>"안녕하세요^^" 등의 한 줄 소개 쓰는 곳</span>
                  </div>
                </div>
              </div>
              <div className='resume-bottom'>
                <div className='resume-bottom-tag'>
                    <span>java</span>
                    <span>css</span>
                    <span>html</span>
                    <span>sql</span>
                    <span>linux</span>
                </div>
                {/* <div className='read-resume'>
                  <button className='read-resume-button' type='button'><img src={require('./img/read-resume.jpg')}/>바로 이력서 열람하여 진행</button>
                </div> */}
              </div>
            </div>


            <div className='middle-text'>
            <div className='middle-text-ex'>
              <div className='middle-text-in'>
                  <img className='profile-img' src={require('./img/empty-profile.jpg')}/>
                <div className='middle-text-in1'>
                  <span className='resume-name'>박OO</span>
                  <span className='recume-code'>#852</span>
                  <div className='resume-tag'>
                    <sapn className='now'>방금 등록된</sapn>
                    <sapn className='well'>잘 잘성된</sapn>
                  </div>
                </div>
              </div>
              <div>
                <img className='scrap-mark' src={require('./img/scrap.jpg')}/>
              </div>
            </div>

            <div className='resume-content'>
              <div className='resume-content-left'>
                <span>총 20년 이상의 경력으로 개발 직군의 백엔드개발, 풀스택 개발, 프론트개발 직무로 계약직에 지원합니다(대학교 4학년제) 학사 학위를 보유하고 있으며, 서울 전체, 경기 고양시 덕양구, 경기 고양시 일산 동구, 경기 고양시 일산 서구, 경기 파주시 지역에서 2024-06-11 부터 근무가 가능합니다. 근무 유형은 협의 가능하고 월 급여 850만원을 희망합니다.</span>
              </div>
              <div className='resume-right'>
                <div className='resume-right-top'>
                  <div className='resume-right-top-work-experience'>
                    <span className='resume-right-top-num'>3개</span>
                    <span><br/>근무 경력</span>
                  </div>
                  <div className='resume-right-top-project'>
                    <span className='resume-right-top-num'>2개</span>
                    <span><br/>프로젝트</span>
                  </div>
                  <div className='resume-right-top-portfolio'>
                    <span className='resume-right-top-num'>5개</span>
                    <span><br/>프트폴리오</span>
                  </div>
                </div>
                <div className='resume-right-bottom'>
                  <span className='introduce-one-line'>"안녕하세요^^" 등의 한 줄 소개 쓰는 곳</span>
                </div>
              </div>
            </div>
            <div className='resume-bottom'>
              <div className='resume-bottom-tag'>
                  <span>java</span>
                  <span>css</span>
                  <span>html</span>
                  <span>sql</span>
                  <span>linux</span>
              </div>
              {/* <div className='read-resume'>
                <button className='read-resume-button' type='button'><img src={require('./img/read-resume.jpg')}/>바로 이력서 열람하여 진행</button>
              </div> */}
            </div>
          </div>

          
          <div className='middle-text'>
            <div className='middle-text-ex'>
              <div className='middle-text-in'>
                  <img className='profile-img' src={require('./img/empty-profile.jpg')}/>
                <div className='middle-text-in1'>
                  <span className='resume-name'>박OO</span>
                  <span className='recume-code'>#852</span>
                  <div className='resume-tag'>
                    <sapn className='now'>방금 등록된</sapn>
                    <sapn className='well'>잘 잘성된</sapn>
                  </div>
                </div>
              </div>
              <div>
                <img className='scrap-mark' src={require('./img/scrap.jpg')}/>
              </div>
            </div>

            <div className='resume-content'>
              <div className='resume-content-left'>
                <span>총 20년 이상의 경력으로 개발 직군의 백엔드개발, 풀스택 개발, 프론트개발 직무로 계약직에 지원합니다(대학교 4학년제) 학사 학위를 보유하고 있으며, 서울 전체, 경기 고양시 덕양구, 경기 고양시 일산 동구, 경기 고양시 일산 서구, 경기 파주시 지역에서 2024-06-11 부터 근무가 가능합니다. 근무 유형은 협의 가능하고 월 급여 850만원을 희망합니다.</span>
              </div>
              <div className='resume-right'>
                <div className='resume-right-top'>
                  <div className='resume-right-top-work-experience'>
                    <span className='resume-right-top-num'>3개</span>
                    <span><br/>근무 경력</span>
                  </div>
                  <div className='resume-right-top-project'>
                    <span className='resume-right-top-num'>2개</span>
                    <span><br/>프로젝트</span>
                  </div>
                  <div className='resume-right-top-portfolio'>
                    <span className='resume-right-top-num'>5개</span>
                    <span><br/>프트폴리오</span>
                  </div>
                </div>
                <div className='resume-right-bottom'>
                  <span className='introduce-one-line'>"안녕하세요^^" 등의 한 줄 소개 쓰는 곳</span>
                </div>
              </div>
            </div>
            <div className='resume-bottom'>
              <div className='resume-bottom-tag'>
                  <span>java</span>
                  <span>css</span>
                  <span>html</span>
                  <span>sql</span>
                  <span>linux</span>
              </div>
              {/* <div className='read-resume'>
                <button className='read-resume-button' type='button'><img src={require('./img/read-resume.jpg')}/>바로 이력서 열람하여 진행</button>
              </div> */}
            </div>
          </div>


          <div className='middle-text'>
            <div className='middle-text-ex'>
              <div className='middle-text-in'>
                  <img className='profile-img' src={require('./img/empty-profile.jpg')}/>
                <div className='middle-text-in1'>
                  <span className='resume-name'>박OO</span>
                  <span className='recume-code'>#852</span>
                  <div className='resume-tag'>
                    <sapn className='now'>방금 등록된</sapn>
                    <sapn className='well'>잘 잘성된</sapn>
                  </div>
                </div>
              </div>
              <div>
                <img className='scrap-mark' src={require('./img/scrap.jpg')}/>
              </div>
            </div>

            <div className='resume-content'>
              <div className='resume-content-left'>
                <span>총 20년 이상의 경력으로 개발 직군의 백엔드개발, 풀스택 개발, 프론트개발 직무로 계약직에 지원합니다(대학교 4학년제) 학사 학위를 보유하고 있으며, 서울 전체, 경기 고양시 덕양구, 경기 고양시 일산 동구, 경기 고양시 일산 서구, 경기 파주시 지역에서 2024-06-11 부터 근무가 가능합니다. 근무 유형은 협의 가능하고 월 급여 850만원을 희망합니다.</span>
              </div>
              <div className='resume-right'>
                <div className='resume-right-top'>
                  <div className='resume-right-top-work-experience'>
                    <span className='resume-right-top-num'>3개</span>
                    <span><br/>근무 경력</span>
                  </div>
                  <div className='resume-right-top-project'>
                    <span className='resume-right-top-num'>2개</span>
                    <span><br/>프로젝트</span>
                  </div>
                  <div className='resume-right-top-portfolio'>
                    <span className='resume-right-top-num'>5개</span>
                    <span><br/>프트폴리오</span>
                  </div>
                </div>
                <div className='resume-right-bottom'>
                  <span className='introduce-one-line'>"안녕하세요^^" 등의 한 줄 소개 쓰는 곳</span>
                </div>
              </div>
            </div>
            <div className='resume-bottom'>
              <div className='resume-bottom-tag'>
                  <span>java</span>
                  <span>css</span>
                  <span>html</span>
                  <span>sql</span>
                  <span>linux</span>
              </div>
              {/* <div className='read-resume'>
                <button className='read-resume-button' type='button'><img src={require('./img/read-resume.jpg')}/>바로 이력서 열람하여 진행</button>
              </div> */}
            </div>
          </div>



          <div className='middle-text'>
            <div className='middle-text-ex'>
              <div className='middle-text-in'>
                  <img className='profile-img' src={require('./img/empty-profile.jpg')}/>
                <div className='middle-text-in1'>
                  <span className='resume-name'>박OO</span>
                  <span className='recume-code'>#852</span>
                  <div className='resume-tag'>
                    <sapn className='now'>방금 등록된</sapn>
                    <sapn className='well'>잘 잘성된</sapn>
                  </div>
                </div>
              </div>
              <div>
                <img className='scrap-mark' src={require('./img/scrap.jpg')}/>
              </div>
            </div>

            <div className='resume-content'>
              <div className='resume-content-left'>
                <span>총 20년 이상의 경력으로 개발 직군의 백엔드개발, 풀스택 개발, 프론트개발 직무로 계약직에 지원합니다(대학교 4학년제) 학사 학위를 보유하고 있으며, 서울 전체, 경기 고양시 덕양구, 경기 고양시 일산 동구, 경기 고양시 일산 서구, 경기 파주시 지역에서 2024-06-11 부터 근무가 가능합니다. 근무 유형은 협의 가능하고 월 급여 850만원을 희망합니다.</span>
              </div>
              <div className='resume-right'>
                <div className='resume-right-top'>
                  <div className='resume-right-top-work-experience'>
                    <span className='resume-right-top-num'>3개</span>
                    <span><br/>근무 경력</span>
                  </div>
                  <div className='resume-right-top-project'>
                    <span className='resume-right-top-num'>2개</span>
                    <span><br/>프로젝트</span>
                  </div>
                  <div className='resume-right-top-portfolio'>
                    <span className='resume-right-top-num'>5개</span>
                    <span><br/>프트폴리오</span>
                  </div>
                </div>
                <div className='resume-right-bottom'>
                  <span className='introduce-one-line'>"안녕하세요^^" 등의 한 줄 소개 쓰는 곳</span>
                </div>
              </div>
            </div>
            <div className='resume-bottom'>
              <div className='resume-bottom-tag'>
                  <span>java</span>
                  <span>css</span>
                  <span>html</span>
                  <span>sql</span>
                  <span>linux</span>
              </div>
              {/* <div className='read-resume'>
                <button className='read-resume-button' type='button'><img src={require('./img/read-resume.jpg')}/>바로 이력서 열람하여 진행</button>
              </div> */}
            </div>
          </div>



          <div className='middle-text'>
            <div className='middle-text-ex'>
              <div className='middle-text-in'>
                  <img className='profile-img' src={require('./img/empty-profile.jpg')}/>
                <div className='middle-text-in1'>
                  <span className='resume-name'>박OO</span>
                  <span className='recume-code'>#852</span>
                  <div className='resume-tag'>
                    <sapn className='now'>방금 등록된</sapn>
                    <sapn className='well'>잘 잘성된</sapn>
                  </div>
                </div>
              </div>
              <div>
                <img className='scrap-mark' src={require('./img/scrap.jpg')}/>
              </div>
            </div>

            <div className='resume-content'>
              <div className='resume-content-left'>
                <span>총 20년 이상의 경력으로 개발 직군의 백엔드개발, 풀스택 개발, 프론트개발 직무로 계약직에 지원합니다(대학교 4학년제) 학사 학위를 보유하고 있으며, 서울 전체, 경기 고양시 덕양구, 경기 고양시 일산 동구, 경기 고양시 일산 서구, 경기 파주시 지역에서 2024-06-11 부터 근무가 가능합니다. 근무 유형은 협의 가능하고 월 급여 850만원을 희망합니다.</span>
              </div>
              <div className='resume-right'>
                <div className='resume-right-top'>
                  <div className='resume-right-top-work-experience'>
                    <span className='resume-right-top-num'>3개</span>
                    <span><br/>근무 경력</span>
                  </div>
                  <div className='resume-right-top-project'>
                    <span className='resume-right-top-num'>2개</span>
                    <span><br/>프로젝트</span>
                  </div>
                  <div className='resume-right-top-portfolio'>
                    <span className='resume-right-top-num'>5개</span>
                    <span><br/>프트폴리오</span>
                  </div>
                </div>
                <div className='resume-right-bottom'>
                  <span className='introduce-one-line'>"안녕하세요^^" 등의 한 줄 소개 쓰는 곳</span>
                </div>
              </div>
            </div>
            <div className='resume-bottom'>
              <div className='resume-bottom-tag'>
                  <span>java</span>
                  <span>css</span>
                  <span>html</span>
                  <span>sql</span>
                  <span>linux</span>
              </div>
              {/* <div className='read-resume'>
                <button className='read-resume-button' type='button'><img src={require('./img/read-resume.jpg')}/>바로 이력서 열람하여 진행</button>
              </div> */}
            </div>
          </div>



          <div className='middle-text'>
            <div className='middle-text-ex'>
              <div className='middle-text-in'>
                  <img className='profile-img' src={require('./img/empty-profile.jpg')}/>
                <div className='middle-text-in1'>
                  <span className='resume-name'>박OO</span>
                  <span className='recume-code'>#852</span>
                  <div className='resume-tag'>
                    <sapn className='now'>방금 등록된</sapn>
                    <sapn className='well'>잘 잘성된</sapn>
                  </div>
                </div>
              </div>
              <div>
                <img className='scrap-mark' src={require('./img/scrap.jpg')}/>
              </div>
            </div>

            <div className='resume-content'>
              <div className='resume-content-left'>
                <span>총 20년 이상의 경력으로 개발 직군의 백엔드개발, 풀스택 개발, 프론트개발 직무로 계약직에 지원합니다(대학교 4학년제) 학사 학위를 보유하고 있으며, 서울 전체, 경기 고양시 덕양구, 경기 고양시 일산 동구, 경기 고양시 일산 서구, 경기 파주시 지역에서 2024-06-11 부터 근무가 가능합니다. 근무 유형은 협의 가능하고 월 급여 850만원을 희망합니다.</span>
              </div>
              <div className='resume-right'>
                <div className='resume-right-top'>
                  <div className='resume-right-top-work-experience'>
                    <span className='resume-right-top-num'>3개</span>
                    <span><br/>근무 경력</span>
                  </div>
                  <div className='resume-right-top-project'>
                    <span className='resume-right-top-num'>2개</span>
                    <span><br/>프로젝트</span>
                  </div>
                  <div className='resume-right-top-portfolio'>
                    <span className='resume-right-top-num'>5개</span>
                    <span><br/>프트폴리오</span>
                  </div>
                </div>
                <div className='resume-right-bottom'>
                  <span className='introduce-one-line'>"안녕하세요^^" 등의 한 줄 소개 쓰는 곳</span>
                </div>
              </div>
            </div>
            <div className='resume-bottom'>
              <div className='resume-bottom-tag'>
                  <span>java</span>
                  <span>css</span>
                  <span>html</span>
                  <span>sql</span>
                  <span>linux</span>
              </div>
              {/* <div className='read-resume'>
                <button className='read-resume-button' type='button'><img src={require('./img/read-resume.jpg')}/>바로 이력서 열람하여 진행</button>
              </div> */}
            </div>
          </div>



          <div className='middle-text'>
            <div className='middle-text-ex'>
              <div className='middle-text-in'>
                  <img className='profile-img' src={require('./img/empty-profile.jpg')}/>
                <div className='middle-text-in1'>
                  <span className='resume-name'>박OO</span>
                  <span className='recume-code'>#852</span>
                  <div className='resume-tag'>
                    <sapn className='now'>방금 등록된</sapn>
                    <sapn className='well'>잘 잘성된</sapn>
                  </div>
                </div>
              </div>
              <div>
                <img className='scrap-mark' src={require('./img/scrap.jpg')}/>
              </div>
            </div>

            <div className='resume-content'>
              <div className='resume-content-left'>
                <span>총 20년 이상의 경력으로 개발 직군의 백엔드개발, 풀스택 개발, 프론트개발 직무로 계약직에 지원합니다(대학교 4학년제) 학사 학위를 보유하고 있으며, 서울 전체, 경기 고양시 덕양구, 경기 고양시 일산 동구, 경기 고양시 일산 서구, 경기 파주시 지역에서 2024-06-11 부터 근무가 가능합니다. 근무 유형은 협의 가능하고 월 급여 850만원을 희망합니다.</span>
              </div>
              <div className='resume-right'>
                <div className='resume-right-top'>
                  <div className='resume-right-top-work-experience'>
                    <span className='resume-right-top-num'>3개</span>
                    <span><br/>근무 경력</span>
                  </div>
                  <div className='resume-right-top-project'>
                    <span className='resume-right-top-num'>2개</span>
                    <span><br/>프로젝트</span>
                  </div>
                  <div className='resume-right-top-portfolio'>
                    <span className='resume-right-top-num'>5개</span>
                    <span><br/>프트폴리오</span>
                  </div>
                </div>
                <div className='resume-right-bottom'>
                  <span className='introduce-one-line'>"안녕하세요^^" 등의 한 줄 소개 쓰는 곳</span>
                </div>
              </div>
            </div>
            <div className='resume-bottom'>
              <div className='resume-bottom-tag'>
                  <span>java</span>
                  <span>css</span>
                  <span>html</span>
                  <span>sql</span>
                  <span>linux</span>
              </div>
              {/* <div className='read-resume'>
                <button className='read-resume-button' type='button'><img src={require('./img/read-resume.jpg')}/>바로 이력서 열람하여 진행</button>
              </div> */}
            </div>
          </div>



          <div className='middle-text'>
            <div className='middle-text-ex'>
              <div className='middle-text-in'>
                  <img className='profile-img' src={require('./img/empty-profile.jpg')}/>
                <div className='middle-text-in1'>
                  <span className='resume-name'>박OO</span>
                  <span className='recume-code'>#852</span>
                  <div className='resume-tag'>
                    <sapn className='now'>방금 등록된</sapn>
                    <sapn className='well'>잘 잘성된</sapn>
                  </div>
                </div>
              </div>
              <div>
                <img className='scrap-mark' src={require('./img/scrap.jpg')}/>
              </div>
            </div>

            <div className='resume-content'>
              <div className='resume-content-left'>
                <span>총 20년 이상의 경력으로 개발 직군의 백엔드개발, 풀스택 개발, 프론트개발 직무로 계약직에 지원합니다(대학교 4학년제) 학사 학위를 보유하고 있으며, 서울 전체, 경기 고양시 덕양구, 경기 고양시 일산 동구, 경기 고양시 일산 서구, 경기 파주시 지역에서 2024-06-11 부터 근무가 가능합니다. 근무 유형은 협의 가능하고 월 급여 850만원을 희망합니다.</span>
              </div>
              <div className='resume-right'>
                <div className='resume-right-top'>
                  <div className='resume-right-top-work-experience'>
                    <span className='resume-right-top-num'>3개</span>
                    <span><br/>근무 경력</span>
                  </div>
                  <div className='resume-right-top-project'>
                    <span className='resume-right-top-num'>2개</span>
                    <span><br/>프로젝트</span>
                  </div>
                  <div className='resume-right-top-portfolio'>
                    <span className='resume-right-top-num'>5개</span>
                    <span><br/>프트폴리오</span>
                  </div>
                </div>
                <div className='resume-right-bottom'>
                  <span className='introduce-one-line'>"안녕하세요^^" 등의 한 줄 소개 쓰는 곳</span>
                </div>
              </div>
            </div>
            <div className='resume-bottom'>
              <div className='resume-bottom-tag'>
                  <span>java</span>
                  <span>css</span>
                  <span>html</span>
                  <span>sql</span>
                  <span>linux</span>
              </div>
              {/* <div className='read-resume'>
                <button className='read-resume-button' type='button'><img src={require('./img/read-resume.jpg')}/>바로 이력서 열람하여 진행</button>
              </div> */}
            </div>
          </div>



          <div className='middle-text'>
            <div className='middle-text-ex'>
              <div className='middle-text-in'>
                  <img className='profile-img' src={require('./img/empty-profile.jpg')}/>
                <div className='middle-text-in1'>
                  <span className='resume-name'>박OO</span>
                  <span className='recume-code'>#852</span>
                  <div className='resume-tag'>
                    <sapn className='now'>방금 등록된</sapn>
                    <sapn className='well'>잘 잘성된</sapn>
                  </div>
                </div>
              </div>
              <div>
                <img className='scrap-mark' src={require('./img/scrap.jpg')}/>
              </div>
            </div>

            <div className='resume-content'>
              <div className='resume-content-left'>
                <span>총 20년 이상의 경력으로 개발 직군의 백엔드개발, 풀스택 개발, 프론트개발 직무로 계약직에 지원합니다(대학교 4학년제) 학사 학위를 보유하고 있으며, 서울 전체, 경기 고양시 덕양구, 경기 고양시 일산 동구, 경기 고양시 일산 서구, 경기 파주시 지역에서 2024-06-11 부터 근무가 가능합니다. 근무 유형은 협의 가능하고 월 급여 850만원을 희망합니다.</span>
              </div>
              <div className='resume-right'>
                <div className='resume-right-top'>
                  <div className='resume-right-top-work-experience'>
                    <span className='resume-right-top-num'>3개</span>
                    <span><br/>근무 경력</span>
                  </div>
                  <div className='resume-right-top-project'>
                    <span className='resume-right-top-num'>2개</span>
                    <span><br/>프로젝트</span>
                  </div>
                  <div className='resume-right-top-portfolio'>
                    <span className='resume-right-top-num'>5개</span>
                    <span><br/>프트폴리오</span>
                  </div>
                </div>
                <div className='resume-right-bottom'>
                  <span className='introduce-one-line'>"안녕하세요^^" 등의 한 줄 소개 쓰는 곳</span>
                </div>
              </div>
            </div>
            <div className='resume-bottom'>
              <div className='resume-bottom-tag'>
                  <span>java</span>
                  <span>css</span>
                  <span>html</span>
                  <span>sql</span>
                  <span>linux</span>
              </div>
              {/* <div className='read-resume'>
                <button className='read-resume-button' type='button'><img src={require('./img/read-resume.jpg')}/>바로 이력서 열람하여 진행</button>
              </div> */}
            </div>
          </div>



          <div className='middle-text'>
            <div className='middle-text-ex'>
              <div className='middle-text-in'>
                  <img className='profile-img' src={require('./img/empty-profile.jpg')}/>
                <div className='middle-text-in1'>
                  <span className='resume-name'>박OO</span>
                  <span className='recume-code'>#852</span>
                  <div className='resume-tag'>
                    <sapn className='now'>방금 등록된</sapn>
                    <sapn className='well'>잘 잘성된</sapn>
                  </div>
                </div>
              </div>
              <div>
                <img className='scrap-mark' src={require('./img/scrap.jpg')}/>
              </div>
            </div>

            <div className='resume-content'>
              <div className='resume-content-left'>
                <span>총 20년 이상의 경력으로 개발 직군의 백엔드개발, 풀스택 개발, 프론트개발 직무로 계약직에 지원합니다(대학교 4학년제) 학사 학위를 보유하고 있으며, 서울 전체, 경기 고양시 덕양구, 경기 고양시 일산 동구, 경기 고양시 일산 서구, 경기 파주시 지역에서 2024-06-11 부터 근무가 가능합니다. 근무 유형은 협의 가능하고 월 급여 850만원을 희망합니다.</span>
              </div>
              <div className='resume-right'>
                <div className='resume-right-top'>
                  <div className='resume-right-top-work-experience'>
                    <span className='resume-right-top-num'>3개</span>
                    <span><br/>근무 경력</span>
                  </div>
                  <div className='resume-right-top-project'>
                    <span className='resume-right-top-num'>2개</span>
                    <span><br/>프로젝트</span>
                  </div>
                  <div className='resume-right-top-portfolio'>
                    <span className='resume-right-top-num'>5개</span>
                    <span><br/>프트폴리오</span>
                  </div>
                </div>
                <div className='resume-right-bottom'>
                  <span className='introduce-one-line'>"안녕하세요^^" 등의 한 줄 소개 쓰는 곳</span>
                </div>
              </div>
            </div>
            <div className='resume-bottom'>
              <div className='resume-bottom-tag'>
                  <span>java</span>
                  <span>css</span>
                  <span>html</span>
                  <span>sql</span>
                  <span>linux</span>
              </div>
              {/* <div className='read-resume'>
                <button className='read-resume-button' type='button'><img src={require('./img/read-resume.jpg')}/>바로 이력서 열람하여 진행</button>
              </div> */}
            </div>
          </div>



          <div className='middle-text'>
            <div className='middle-text-ex'>
              <div className='middle-text-in'>
                  <img className='profile-img' src={require('./img/empty-profile.jpg')}/>
                <div className='middle-text-in1'>
                  <span className='resume-name'>박OO</span>
                  <span className='recume-code'>#852</span>
                  <div className='resume-tag'>
                    <sapn className='now'>방금 등록된</sapn>
                    <sapn className='well'>잘 잘성된</sapn>
                  </div>
                </div>
              </div>
              <div>
                <img className='scrap-mark' src={require('./img/scrap.jpg')}/>
              </div>
            </div>

            <div className='resume-content'>
              <div className='resume-content-left'>
                <span>총 20년 이상의 경력으로 개발 직군의 백엔드개발, 풀스택 개발, 프론트개발 직무로 계약직에 지원합니다(대학교 4학년제) 학사 학위를 보유하고 있으며, 서울 전체, 경기 고양시 덕양구, 경기 고양시 일산 동구, 경기 고양시 일산 서구, 경기 파주시 지역에서 2024-06-11 부터 근무가 가능합니다. 근무 유형은 협의 가능하고 월 급여 850만원을 희망합니다.</span>
              </div>
              <div className='resume-right'>
                <div className='resume-right-top'>
                  <div className='resume-right-top-work-experience'>
                    <span className='resume-right-top-num'>3개</span>
                    <span><br/>근무 경력</span>
                  </div>
                  <div className='resume-right-top-project'>
                    <span className='resume-right-top-num'>2개</span>
                    <span><br/>프로젝트</span>
                  </div>
                  <div className='resume-right-top-portfolio'>
                    <span className='resume-right-top-num'>5개</span>
                    <span><br/>프트폴리오</span>
                  </div>
                </div>
                <div className='resume-right-bottom'>
                  <span className='introduce-one-line'>"안녕하세요^^" 등의 한 줄 소개 쓰는 곳</span>
                </div>
              </div>
            </div>
            <div className='resume-bottom'>
              <div className='resume-bottom-tag'>
                  <span>java</span>
                  <span>css</span>
                  <span>html</span>
                  <span>sql</span>
                  <span>linux</span>
              </div>
              {/* <div className='read-resume'>
                <button className='read-resume-button' type='button'><img src={require('./img/read-resume.jpg')}/>바로 이력서 열람하여 진행</button>
              </div> */}
            </div>
          </div>



          <div className='middle-text'>
            <div className='middle-text-ex'>
              <div className='middle-text-in'>
                  <img className='profile-img' src={require('./img/empty-profile.jpg')}/>
                <div className='middle-text-in1'>
                  <span className='resume-name'>박OO</span>
                  <span className='recume-code'>#852</span>
                  <div className='resume-tag'>
                    <sapn className='now'>방금 등록된</sapn>
                    <sapn className='well'>잘 잘성된</sapn>
                  </div>
                </div>
              </div>
              <div>
                <img className='scrap-mark' src={require('./img/scrap.jpg')}/>
              </div>
            </div>

            <div className='resume-content'>
              <div className='resume-content-left'>
                <span>총 20년 이상의 경력으로 개발 직군의 백엔드개발, 풀스택 개발, 프론트개발 직무로 계약직에 지원합니다(대학교 4학년제) 학사 학위를 보유하고 있으며, 서울 전체, 경기 고양시 덕양구, 경기 고양시 일산 동구, 경기 고양시 일산 서구, 경기 파주시 지역에서 2024-06-11 부터 근무가 가능합니다. 근무 유형은 협의 가능하고 월 급여 850만원을 희망합니다.</span>
              </div>
              <div className='resume-right'>
                <div className='resume-right-top'>
                  <div className='resume-right-top-work-experience'>
                    <span className='resume-right-top-num'>3개</span>
                    <span><br/>근무 경력</span>
                  </div>
                  <div className='resume-right-top-project'>
                    <span className='resume-right-top-num'>2개</span>
                    <span><br/>프로젝트</span>
                  </div>
                  <div className='resume-right-top-portfolio'>
                    <span className='resume-right-top-num'>5개</span>
                    <span><br/>프트폴리오</span>
                  </div>
                </div>
                <div className='resume-right-bottom'>
                  <span className='introduce-one-line'>"안녕하세요^^" 등의 한 줄 소개 쓰는 곳</span>
                </div>
              </div>
            </div>
            <div className='resume-bottom'>
              <div className='resume-bottom-tag'>
                  <span>java</span>
                  <span>css</span>
                  <span>html</span>
                  <span>sql</span>
                  <span>linux</span>
              </div>
              {/* <div className='read-resume'>
                <button className='read-resume-button' type='button'><img src={require('./img/read-resume.jpg')}/>바로 이력서 열람하여 진행</button>
              </div> */}
            </div>
          </div>



          <div className='middle-text'>
            <div className='middle-text-ex'>
              <div className='middle-text-in'>
                  <img className='profile-img' src={require('./img/empty-profile.jpg')}/>
                <div className='middle-text-in1'>
                  <span className='resume-name'>박OO</span>
                  <span className='recume-code'>#852</span>
                  <div className='resume-tag'>
                    <sapn className='now'>방금 등록된</sapn>
                    <sapn className='well'>잘 잘성된</sapn>
                  </div>
                </div>
              </div>
              <div>
                <img className='scrap-mark' src={require('./img/scrap.jpg')}/>
              </div>
            </div>

            <div className='resume-content'>
              <div className='resume-content-left'>
                <span>총 20년 이상의 경력으로 개발 직군의 백엔드개발, 풀스택 개발, 프론트개발 직무로 계약직에 지원합니다(대학교 4학년제) 학사 학위를 보유하고 있으며, 서울 전체, 경기 고양시 덕양구, 경기 고양시 일산 동구, 경기 고양시 일산 서구, 경기 파주시 지역에서 2024-06-11 부터 근무가 가능합니다. 근무 유형은 협의 가능하고 월 급여 850만원을 희망합니다.</span>
              </div>
              <div className='resume-right'>
                <div className='resume-right-top'>
                  <div className='resume-right-top-work-experience'>
                    <span className='resume-right-top-num'>3개</span>
                    <span><br/>근무 경력</span>
                  </div>
                  <div className='resume-right-top-project'>
                    <span className='resume-right-top-num'>2개</span>
                    <span><br/>프로젝트</span>
                  </div>
                  <div className='resume-right-top-portfolio'>
                    <span className='resume-right-top-num'>5개</span>
                    <span><br/>프트폴리오</span>
                  </div>
                </div>
                <div className='resume-right-bottom'>
                  <span className='introduce-one-line'>"안녕하세요^^" 등의 한 줄 소개 쓰는 곳</span>
                </div>
              </div>
            </div>
            <div className='resume-bottom'>
              <div className='resume-bottom-tag'>
                  <span>java</span>
                  <span>css</span>
                  <span>html</span>
                  <span>sql</span>
                  <span>linux</span>
              </div>
              {/* <div className='read-resume'>
                <button className='read-resume-button' type='button'><img src={require('./img/read-resume.jpg')}/>바로 이력서 열람하여 진행</button>
              </div> */}
            </div>
          </div>



          <div className='middle-text'>
            <div className='middle-text-ex'>
              <div className='middle-text-in'>
                  <img className='profile-img' src={require('./img/empty-profile.jpg')}/>
                <div className='middle-text-in1'>
                  <span className='resume-name'>박OO</span>
                  <span className='recume-code'>#852</span>
                  <div className='resume-tag'>
                    <sapn className='now'>방금 등록된</sapn>
                    <sapn className='well'>잘 잘성된</sapn>
                  </div>
                </div>
              </div>
              <div>
                <img className='scrap-mark' src={require('./img/scrap.jpg')}/>
              </div>
            </div>

            <div className='resume-content'>
              <div className='resume-content-left'>
                <span>총 20년 이상의 경력으로 개발 직군의 백엔드개발, 풀스택 개발, 프론트개발 직무로 계약직에 지원합니다(대학교 4학년제) 학사 학위를 보유하고 있으며, 서울 전체, 경기 고양시 덕양구, 경기 고양시 일산 동구, 경기 고양시 일산 서구, 경기 파주시 지역에서 2024-06-11 부터 근무가 가능합니다. 근무 유형은 협의 가능하고 월 급여 850만원을 희망합니다.</span>
              </div>
              <div className='resume-right'>
                <div className='resume-right-top'>
                  <div className='resume-right-top-work-experience'>
                    <span className='resume-right-top-num'>3개</span>
                    <span><br/>근무 경력</span>
                  </div>
                  <div className='resume-right-top-project'>
                    <span className='resume-right-top-num'>2개</span>
                    <span><br/>프로젝트</span>
                  </div>
                  <div className='resume-right-top-portfolio'>
                    <span className='resume-right-top-num'>5개</span>
                    <span><br/>프트폴리오</span>
                  </div>
                </div>
                <div className='resume-right-bottom'>
                  <span className='introduce-one-line'>"안녕하세요^^" 등의 한 줄 소개 쓰는 곳</span>
                </div>
              </div>
            </div>
            <div className='resume-bottom'>
              <div className='resume-bottom-tag'>
                  <span>java</span>
                  <span>css</span>
                  <span>html</span>
                  <span>sql</span>
                  <span>linux</span>
              </div>
              {/* <div className='read-resume'>
                <button className='read-resume-button' type='button'><img src={require('./img/read-resume.jpg')}/>바로 이력서 열람하여 진행</button>
              </div> */}
            </div>
          </div>



          <div className='middle-text'>
            <div className='middle-text-ex'>
              <div className='middle-text-in'>
                  <img className='profile-img' src={require('./img/empty-profile.jpg')}/>
                <div className='middle-text-in1'>
                  <span className='resume-name'>박OO</span>
                  <span className='recume-code'>#852</span>
                  <div className='resume-tag'>
                    <sapn className='now'>방금 등록된</sapn>
                    <sapn className='well'>잘 잘성된</sapn>
                  </div>
                </div>
              </div>
              <div>
                <img className='scrap-mark' src={require('./img/scrap.jpg')}/>
              </div>
            </div>

            <div className='resume-content'>
              <div className='resume-content-left'>
                <span>총 20년 이상의 경력으로 개발 직군의 백엔드개발, 풀스택 개발, 프론트개발 직무로 계약직에 지원합니다(대학교 4학년제) 학사 학위를 보유하고 있으며, 서울 전체, 경기 고양시 덕양구, 경기 고양시 일산 동구, 경기 고양시 일산 서구, 경기 파주시 지역에서 2024-06-11 부터 근무가 가능합니다. 근무 유형은 협의 가능하고 월 급여 850만원을 희망합니다.</span>
              </div>
              <div className='resume-right'>
                <div className='resume-right-top'>
                  <div className='resume-right-top-work-experience'>
                    <span className='resume-right-top-num'>3개</span>
                    <span><br/>근무 경력</span>
                  </div>
                  <div className='resume-right-top-project'>
                    <span className='resume-right-top-num'>2개</span>
                    <span><br/>프로젝트</span>
                  </div>
                  <div className='resume-right-top-portfolio'>
                    <span className='resume-right-top-num'>5개</span>
                    <span><br/>프트폴리오</span>
                  </div>
                </div>
                <div className='resume-right-bottom'>
                  <span className='introduce-one-line'>"안녕하세요^^" 등의 한 줄 소개 쓰는 곳</span>
                </div>
              </div>
            </div>
            <div className='resume-bottom'>
              <div className='resume-bottom-tag'>
                  <span>java</span>
                  <span>css</span>
                  <span>html</span>
                  <span>sql</span>
                  <span>linux</span>
              </div>
              {/* <div className='read-resume'>
                <button className='read-resume-button' type='button'><img src={require('./img/read-resume.jpg')}/>바로 이력서 열람하여 진행</button>
              </div> */}
            </div>
          </div>



          <div className='middle-text'>
            <div className='middle-text-ex'>
              <div className='middle-text-in'>
                  <img className='profile-img' src={require('./img/empty-profile.jpg')}/>
                <div className='middle-text-in1'>
                  <span className='resume-name'>박OO</span>
                  <span className='recume-code'>#852</span>
                  <div className='resume-tag'>
                    <sapn className='now'>방금 등록된</sapn>
                    <sapn className='well'>잘 잘성된</sapn>
                  </div>
                </div>
              </div>
              <div>
                <img className='scrap-mark' src={require('./img/scrap.jpg')}/>
              </div>
            </div>

            <div className='resume-content'>
              <div className='resume-content-left'>
                <span>총 20년 이상의 경력으로 개발 직군의 백엔드개발, 풀스택 개발, 프론트개발 직무로 계약직에 지원합니다(대학교 4학년제) 학사 학위를 보유하고 있으며, 서울 전체, 경기 고양시 덕양구, 경기 고양시 일산 동구, 경기 고양시 일산 서구, 경기 파주시 지역에서 2024-06-11 부터 근무가 가능합니다. 근무 유형은 협의 가능하고 월 급여 850만원을 희망합니다.</span>
              </div>
              <div className='resume-right'>
                <div className='resume-right-top'>
                  <div className='resume-right-top-work-experience'>
                    <span className='resume-right-top-num'>3개</span>
                    <span><br/>근무 경력</span>
                  </div>
                  <div className='resume-right-top-project'>
                    <span className='resume-right-top-num'>2개</span>
                    <span><br/>프로젝트</span>
                  </div>
                  <div className='resume-right-top-portfolio'>
                    <span className='resume-right-top-num'>5개</span>
                    <span><br/>프트폴리오</span>
                  </div>
                </div>
                <div className='resume-right-bottom'>
                  <span className='introduce-one-line'>"안녕하세요^^" 등의 한 줄 소개 쓰는 곳</span>
                </div>
              </div>
            </div>
            <div className='resume-bottom'>
              <div className='resume-bottom-tag'>
                  <span>java</span>
                  <span>css</span>
                  <span>html</span>
                  <span>sql</span>
                  <span>linux</span>
              </div>
              {/* <div className='read-resume'>
                <button className='read-resume-button' type='button'><img src={require('./img/read-resume.jpg')}/>바로 이력서 열람하여 진행</button>
              </div> */}
            </div>
          </div>


          <div className='middle-text'>
            <div className='middle-text-ex'>
              <div className='middle-text-in'>
                  <img className='profile-img' src={require('./img/empty-profile.jpg')}/>
                <div className='middle-text-in1'>
                  <span className='resume-name'>박OO</span>
                  <span className='recume-code'>#852</span>
                  <div className='resume-tag'>
                    <sapn className='now'>방금 등록된</sapn>
                    <sapn className='well'>잘 잘성된</sapn>
                  </div>
                </div>
              </div>
              <div>
                <img className='scrap-mark' src={require('./img/scrap.jpg')}/>
              </div>
            </div>

            <div className='resume-content'>
              <div className='resume-content-left'>
                <span>총 20년 이상의 경력으로 개발 직군의 백엔드개발, 풀스택 개발, 프론트개발 직무로 계약직에 지원합니다(대학교 4학년제) 학사 학위를 보유하고 있으며, 서울 전체, 경기 고양시 덕양구, 경기 고양시 일산 동구, 경기 고양시 일산 서구, 경기 파주시 지역에서 2024-06-11 부터 근무가 가능합니다. 근무 유형은 협의 가능하고 월 급여 850만원을 희망합니다.</span>
              </div>
              <div className='resume-right'>
                <div className='resume-right-top'>
                  <div className='resume-right-top-work-experience'>
                    <span className='resume-right-top-num'>3개</span>
                    <span><br/>근무 경력</span>
                  </div>
                  <div className='resume-right-top-project'>
                    <span className='resume-right-top-num'>2개</span>
                    <span><br/>프로젝트</span>
                  </div>
                  <div className='resume-right-top-portfolio'>
                    <span className='resume-right-top-num'>5개</span>
                    <span><br/>프트폴리오</span>
                  </div>
                </div>
                <div className='resume-right-bottom'>
                  <span className='introduce-one-line'>"안녕하세요^^" 등의 한 줄 소개 쓰는 곳</span>
                </div>
              </div>
            </div>
            <div className='resume-bottom'>
              <div className='resume-bottom-tag'>
                  <span>java</span>
                  <span>css</span>
                  <span>html</span>
                  <span>sql</span>
                  <span>linux</span>
              </div>
              {/* <div className='read-resume'>
                <button className='read-resume-button' type='button'><img src={require('./img/read-resume.jpg')}/>바로 이력서 열람하여 진행</button>
              </div> */}
            </div>
          </div>
            
            </div>
          </div>

                
            <div className='talent-page-previous-next'>
                    <div className='previous'>
                        <span>←  Previous</span>
                    </div>

                    <div className='page-num'>
                        <span>1</span>
                        <span>2</span>
                        <span>3</span>
                        <span>4</span>
                        <span>5</span>
                        <span className='dot'>···</span>
                        <span>32</span>
                    </div>

                    <div className='next'>
                        <span>Next →</span>
                    </div>

            </div>
        </div>
    );   
}


function Xa(){
  const [index, setIndex] = React.useState('-1');
  const onSelect = (event) => {
    setIndex(event.target.value);
  }

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const [selectedIndex, setSelectedIndex] = useState('');


  const handleSelectChange = (event) => {
    setSelectedIndex(event.target.value);
  };

  return(
    <div className='work-box'>
      <select size={7} value={selectedIndex} onChange={handleSelectChange} className='work-input'>
        <option value='1'>개발</option>
        <option value='2'>기획</option>
        <option value='3'>디자인</option>
        <option value='4'>전략/마케팅</option>
        <option value='5'>기타</option>
      </select>

      {selectedIndex && (
        <div className='work-input'>
          {selectedIndex === '1' && <A/>}
          {selectedIndex === '2' && <B/>}
          {selectedIndex === '3' && <C/>}
          {selectedIndex === '4' && <D/>}
          {selectedIndex === '5' && <E/>}
        </div>
              )}
    </div>
      )

}



function Xb(){
  const [indexB, setIndexB] = React.useState('-1');
  const onSelectB = (eventB) => {
    setIndexB(eventB.target.value);
  }

  const [isVisibleB, setIsVisibleB] = useState(false);

  const toggleVisibilityB = () => {
    setIsVisibleB(!isVisibleB);
  };

  const [selectedIndexB, setSelectedIndexB] = useState('');


  const handleSelectChangeB = (eventB) => {
    setSelectedIndexB(eventB.target.value);
  };

  return(
    <div className='Xb-work-box3'>
      <div className=''>
        <input type='checkbox'></input>
        <span>계약직</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>정규직</span>
      </div>
    </div>
    )
}




function Xc(){
  const [indexC, setIndexC] = React.useState('-1');
  const onSelectC = (eventC) => {
    setIndexC(eventC.target.value);
  }

  const [isVisibleC, setIsVisibleC] = useState(false);

  const toggleVisibilityC = () => {
    setIsVisibleC(!isVisibleC);
  };

  const [selectedIndexC, setSelectedIndexC] = useState('');


  const handleSelectChangeC = (eventC) => {
    setSelectedIndexC(eventC.target.value);
  };

  return(
    <div className='Xc-work-box3'>
      <div>
        <input type='input' placeholder='스킬을 입력해주세요'></input>
      </div>
    </div>
    )
}


function Xd(){
  const [indexD, setIndexD] = React.useState('-1');
  const onSelectD = (eventD) => {
    setIndexD(eventD.target.value);
  }

  const [isVisibleD, setIsVisibleD] = useState(false);

  const toggleVisibilityD = () => {
    setIsVisibleD(!isVisibleD);
  };

  const [selectedIndexD, setSelectedIndexD] = useState('');


  const handleSelectChangeD = (eventD) => {
    setSelectedIndexD(eventD.target.value);
  };

  return(
    <div className='Xd-work-box3'>
    <div>
      <select className=''>
          <option value='0'>선택</option>
          <option value='1'>신입</option>
          <option value='2'>1년</option>
          <option value='3'>2년</option>
          <option value='4'>3년</option>
          <option value='5'>4년</option>
          <option value='6'>5년</option>
          <option value='7'>6년</option>
          <option value='8'>7년</option>
          <option value='9'>8년</option>
          <option value='10'>9년</option>
          <option value='11'>10년</option>
          <option value='12'>11년</option>
          <option value='13'>12년</option>
          <option value='14'>13년</option>
          <option value='15'>14년</option>
          <option value='16'>15년</option>
          <option value='17'>16년</option>
          <option value='18'>17년</option>
          <option value='19'>18년</option>
          <option value='20'>19년</option>
          <option value='21'>20년</option>
            
        </select>
    </div>
    <h4> ~ </h4>
    <div>
      <select className=''>
          <option value='0'>선택</option>
          <option value='1'>신입</option>
          <option value='2'>1년</option>
          <option value='3'>2년</option>
          <option value='4'>3년</option>
          <option value='5'>4년</option>
          <option value='6'>5년</option>
          <option value='7'>6년</option>
          <option value='8'>7년</option>
          <option value='9'>8년</option>
          <option value='10'>9년</option>
          <option value='11'>10년</option>
          <option value='12'>11년</option>
          <option value='13'>12년</option>
          <option value='14'>13년</option>
          <option value='15'>14년</option>
          <option value='16'>15년</option>
          <option value='17'>16년</option>
          <option value='18'>17년</option>
          <option value='19'>18년</option>
          <option value='20'>19년</option>
          <option value='21'>20년</option>
            
        </select>
    </div>
  </div>
    
    )
}



function Xe(){
  const [indexE, setIndexE] = React.useState('-1');
  const onSelectE = (eventE) => {
    setIndexE(eventE.target.value);
  }

  const [isVisibleE, setIsVisibleE] = useState(false);

  const toggleVisibilityE = () => {
    setIsVisibleE(!isVisibleE);
  };

  const [selectedIndexE, setSelectedIndexE] = useState('');


  const handleSelectChangeE = (eventE) => {
    setSelectedIndexE(eventE.target.value);
  };

  return(
    <div className='Xe-work-box3'>
    <div>
      <select className=''>
          <option value='0'>선택</option>
          <option value='1'>~200만원</option>
          <option value='2'>200만원</option>
          <option value='3'>300만원</option>
          <option value='4'>400만원</option>
          <option value='5'>500만원</option>
          <option value='6'>600만원</option>
          <option value='7'>700만원</option>
          <option value='8'>800만원</option>
          <option value='9'>900만원</option>
          <option value='10'>1000만원</option>
            
        </select>
    </div>
    <h4> ~ </h4>
    <div>
      <select className=''>
      <option value='0'>선택</option>
          <option value='1'>~200만원</option>
          <option value='2'>200만원</option>
          <option value='3'>300만원</option>
          <option value='4'>400만원</option>
          <option value='5'>500만원</option>
          <option value='6'>600만원</option>
          <option value='7'>700만원</option>
          <option value='8'>800만원</option>
          <option value='9'>900만원</option>
          <option value='10'>1000만원</option>
            
        </select>
    </div>
  </div>
    
    )
}




function Xf(){
  const [indexF, setIndexF] = React.useState('-1');
  const onSelectF = (eventF) => {
    setIndexF(eventF.target.value);
  }

  const [isVisibleF, setIsVisibleF] = useState(false);

  const toggleVisibilityF = () => {
    setIsVisibleF(!isVisibleF);
  };

  const [selectedIndexF, setSelectedIndexF] = useState('');


  const handleSelectChangeF = (eventF) => {
    setSelectedIndexF(eventF.target.value);
  };
  

  return(
    <div className='work-box4'>
      <select size={7} value={selectedIndexF} onChange={handleSelectChangeF} className='work-input4'>
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

      {selectedIndexF && (
        <div className='work-input'>
          {selectedIndexF === '1' && <XfA/>}
          {selectedIndexF === '2' && <XfB/>}
          {selectedIndexF === '3' && <XfC/>}
          {selectedIndexF === '4' && <XfD/>}
          {selectedIndexF === '5' && <XfE/>}
          {selectedIndexF === '6' && <XfF/>}
          {selectedIndexF === '7' && <XfG/>}
          {selectedIndexF === '8' && <XfH/>}
          {selectedIndexF === '9' && <XfI/>}
          {selectedIndexF === '10' && <XfJ/>}
          {selectedIndexF === '11' && <XfK/>}
          {selectedIndexF === '12' && <XfL/>}
          {selectedIndexF === '13' && <XfM/>}
          {selectedIndexF === '14' && <XfN/>}
          {selectedIndexF === '15' && <XfO/>}
          {selectedIndexF === '16' && <XfP/>}
          {selectedIndexF === '17' && <XfQ/>}
        </div>
              )}
    </div>
      )

}


function XfA(){
  // let area1 = ["구/군 선택","강남구","강동구","강북구","강서구","관악구","광진구","구로구","금천구","노원구","도봉구","동대문구","동작구","마포구","서대문구","서초구","성동구","성북구","송파구","양천구","영등포구","용산구","은평구","종로구","중구","중랑구"];
  return(
    <div className='work-box3'>
      <div className=''>
        <input type='checkbox'></input>
        <span>강남구</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>강동구</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>강북구</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>강서구</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>관악구</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>광진구</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>구로구</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>금천구</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>노원구</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>도봉구</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>동대문구</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>동작구</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>마포구</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>서대문구</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>서초구</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>성동구</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>성북구</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>송파구</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>양천구</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>영등포구</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>용산구</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>은평구</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>종로구</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>중구</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>중랑구</span>
      </div>
    <Outlet></Outlet>
  </div>
  )
}

function XfB(){
  return (
    <div className='work-box3'>
      <div className=''>
        <input type='checkbox'></input>
        <span>강서구</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>금정구</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>기장군</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>남구</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>동구</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>동래구</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>부산진구</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>북구</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>사상구</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>사하구</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>서구</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>수영구</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>연제구</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>영도구</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>중구</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>해운대구</span>
      </div>
    <Outlet></Outlet>
  </div>
  )
}

function XfC(){
  return (
    <div className='work-box3'>
      <div className=''>
        <input type='checkbox'></input>
        <span>남구</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>달서구</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>달성군</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>동구</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>북구</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>서구</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>수성구</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>중구</span>
      </div>
    <Outlet></Outlet>
  </div>
  )
}


function XfD(){
  return (
    <div className='work-box3'>
      <div className=''>
        <input type='checkbox'></input>
        <span>강화군</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>계양구</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>미추홀구</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>남동구</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>동구</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>부평구</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>서구</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>연수구</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>옹진군</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>중구</span>
      </div>
    <Outlet></Outlet>
  </div>
  )
}

function XfE() {
  return (
    <div className='work-box3'>
      <div className=''>
        <input type='checkbox'></input>
        <span>광산구</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>남구</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>동구</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>북구</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>서구</span>
      </div>
      <Outlet></Outlet>
    </div>
  )
}


function XfF() {
  return (
    <div className='work-box3'>
      <div className=''>
        <input type='checkbox'></input>
        <span>대덕구</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>동구</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>서구</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>유성구</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>중구</span>
      </div>
      <Outlet></Outlet>
    </div>
  )
}


function XfG() {
  return (
    <div className='work-box3'>
      <div className=''>
        <input type='checkbox'></input>
        <span>남구</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>동구</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>북구</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>울주군</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>중구</span>
      </div>
      <Outlet></Outlet>
    </div>
  )
}


function XfH() {
  return (
    <div className='work-box3'>
      <div className=''>
        <input type='checkbox'></input>
        <span>세종특별자치시</span>
      </div>
      <Outlet></Outlet>
    </div>
  )
}



function XfI() {
  return (
    <div className='work-box3'>
      <div className=''>
        <input type='checkbox'></input>
        <span>강릉시</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>고성군</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>동해시</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>삼척시</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>속초시</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>양구군</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>양양군</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>영월군</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>원주시</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>인제군</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>정선군</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>철원군</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>춘천시</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>태백시</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>평창군</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>홍천군</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>화천군</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>횡성군</span>
      </div>
      <Outlet></Outlet>
    </div>
  )
}




function XfJ(){
  // let area1 = ["구/군 선택","강남구","강동구","강북구","강서구","관악구","광진구","구로구","금천구","노원구","도봉구","동대문구","동작구","마포구","서대문구","서초구","성동구","성북구","송파구","양천구","영등포구","용산구","은평구","종로구","중구","중랑구"];
  return(
    <div className='work-box3'>
      <div className=''>
        <input type='checkbox'></input>
        <span>고양시</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>과천시</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>광명시</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>광주시</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>구리시</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>구리시</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>군포시</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>김포시</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>남양주시</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>동두천시</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>부천시</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>성남시</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>수원시</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>시흥시</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>안산시</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>안성시</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>안양시</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>양주시</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>오산시</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>용인시</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>의왕시</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>의정부시</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>이천시</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>파주시</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>평택시</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>포천시</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>하남시</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>화성시</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>가평군</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>양평군</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>여주군</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>연천군</span>
      </div>
    <Outlet></Outlet>
  </div>
  )
}


function XfK() {
  return (
    <div className='work-box3'>
      <div className=''>
        <input type='checkbox'></input>
        <span>거제시</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>거창군</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>고성군</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>김해시</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>남해군</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>밀양시</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>사천시</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>산청군</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>양산시</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>의령군</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>진주시</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>창녕군</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>창원시</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>통영시</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>하동군</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>함안군</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>함양군</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>합천군</span>
      </div>
    </div>
  )
}



function XfL() {
  return (
    <div className='work-box3'>
      <div className=''>
        <input type='checkbox'></input>
        <span>경산시</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>경주시</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>고령군</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>구미시</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>군위군</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>김천시</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>문경시</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>봉화군</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>상주시</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>성주군</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>안동시</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>영덕군</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>영양군</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>영주시</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>영천시</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>예천군</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>울릉군</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>울진군</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>의성군</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>청도군</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>청송군</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>칠곡군</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>포항시</span>
      </div>
    </div>
  )
}



function XfM() {
  return (
    <div className='work-box3'>
      <div className=''>
        <input type='checkbox'></input>
        <span>강진군</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>고흥군</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>곡성군</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>광양시</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>구례군</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>나주시</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>담양군</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>목포시</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>무안군</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>보성군</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>순천시</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>신안군</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>여수시</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>영광군</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>영암군</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>완도군</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>장성군</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>장흥군</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>진도군</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>함평군</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>해남군</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>화순군</span>
      </div>
    </div>
  )
}



function XfN() {
  return (
    <div className='work-box3'>
      <div className=''>
        <input type='checkbox'></input>
        <span>고창군</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>군산시</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>김제시</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>남원시</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>무주군</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>부안군</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>순창군</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>완주군</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>익산시</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>임실군</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>장수군</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>전주시</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>정읍시</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>진안군</span>
      </div>
    </div>
  )
}


function XfO() {
  return (
    <div className='work-box3'>
      <div className=''>
        <input type='checkbox'></input>
        <span>계룡시</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>공주시</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>금산군</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>논산시</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>당진시</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>보령시</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>부여군</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>서산시</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>서천군</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>아산시</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>예산군</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>천안시 동남구</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>천안시 서북구</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>청양군</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>태안군</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>홍성군</span>
      </div>
    </div>
  )
}


function XfP() {
  return (
    <div className='work-box3'>
      <div className=''>
        <input type='checkbox'></input>
        <span>괴산군</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>단양군</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>보은군</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>영동군</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>옥천군</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>음성군</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>제천시</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>진천군</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>청주시 상당구</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>청주시 서원구</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>청주시 청원구</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>청주시 흥덕구</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>충주시</span>
      </div>
    </div>
  )
}


function XfQ() {
  return (
    <div className='work-box3'>
      <div className=''>
        <input type='checkbox'></input>
        <span>서귀포시</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>제주시</span>
      </div>
    </div>
  )
}




function Xg(){
  const [indexG, setIndexG] = React.useState('-1');
  const onSelectG = (eventG) => {
    setIndexG(eventG.target.value);
  }

  const [isVisibleG, setIsVisibleG] = useState(false);

  const toggleVisibilityG = () => {
    setIsVisibleG(!isVisibleG);
  };

  const [selectedIndexG, setSelectedIndexG] = useState('');


  const handleSelectChangeG = (eventG) => {
    setSelectedIndexG(eventG.target.value);
  };

  return(
    <div className='Xg-work-box3'>
      <div className=''>
        <input type='checkbox'></input>
        <span>상근</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>재택</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>협의</span>
      </div>
    </div>
    )
}



function Xh(){
  const [indexH, setIndexH] = React.useState('-1');
  const onSelectH = (eventH) => {
    setIndexH(eventH.target.value);
  }

  const [isVisibleH, setIsVisibleH] = useState(false);

  const toggleVisibilityH = () => {
    setIsVisibleH(!isVisibleH);
  };

  const [selectedIndexH, setSelectedIndexH] = useState('');


  const handleSelectChangeH = (eventH) => {
    setSelectedIndexH(eventH.target.value);
  };

  return(
    <div className='Xh-work-box3'>
      <div className=''>
        <input type='checkbox'></input>
        <span>고등학교</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>대학(2, 3년)</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>대학교(4년)</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>대학원</span>
      </div>
    </div>
    )
}




function Xi(){
  const [indexI, setIndexI] = React.useState('-1');
  const onSelectI = (eventI) => {
    setIndexI(eventI.target.value);
  }

  const [isVisibleI, setIsVisibleI] = useState(false);

  const toggleVisibilityI = () => {
    setIsVisibleI(!isVisibleI);
  };

  const [selectedIndexI, setSelectedIndexI] = useState('');


  const handleSelectChangeI = (eventI) => {
    setSelectedIndexI(eventI.target.value);
  };

  return(
    <div className='Xi-work-box3'>
      <div className=''>
        <input type='checkbox'></input>
        <span>1개월 이내</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>2개월 이내</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>3개월 이내</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>3개월 이상</span>
      </div>
    </div>
    )
}





function Xj(){
  const [indexJ, setIndexJ] = React.useState('-1');
  const onSelectJ = (eventJ) => {
    setIndexJ(eventJ.target.value);
  }

  const [isVisibleJ, setIsVisibleJ] = useState(false);

  const toggleVisibilityJ = () => {
    setIsVisibleJ(!isVisibleJ);
  };

  const [selectedIndexJ, setSelectedIndexJ] = useState('');


  const handleSelectChangeJ = (eventJ) => {
    setSelectedIndexJ(eventJ.target.value);
  };

  return(
    <div className='Xj-work-box3'>
      <div className=''>
        <input type='checkbox'></input>
        <span>개인</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>팀</span>
      </div>
    </div>
    )
}





function Z(){
  return(
    <div className='work-box3'>
    <select className='work-input' >
      <option value='-1'>직무을 선택해주세요.</option>
    </select>
    <Outlet></Outlet>
  </div>
  )
}

function A(){
  return(
    <div className='work-box3'>
      <div className=''>
        <input type='checkbox'></input>
        <span>전체</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>백엔드개발</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>프론트엔드개발</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>모바일개발</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>풀스택개발</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>임베디드개발</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>PC어플리케이션</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>DBA</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>TA</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>AA</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>기타개발</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>퍼블리셔</span>
      </div>
      <div className=''>
        <input type='checkbox'></input>
        <span>QA</span>
      </div>
    <Outlet></Outlet>
  </div>
  )
}

function B(){
  return(
    <div className='work-box3'>
      <div className='' >
        <input type='checkbox'></input>
        <span>전체</span>
      </div>
      <div className='' >
        <input type='checkbox'></input>
        <span>서비스기획</span>
      </div>
      <div className='' >
        <input type='checkbox'></input>
        <span>UI/UX 기획</span>
      </div>
      <div className='' >
        <input type='checkbox'></input>
        <span>사업기획</span>
      </div>
      <div className='' >
        <input type='checkbox'></input>
        <span>PM</span>
      </div>
    <Outlet></Outlet>
  </div>
  )
}

function C(){
  return(
    <div className='work-box3'>
      <div className='' >
        <input type='checkbox'></input>
        <span>전체</span>
      </div>
      <div className='' >
        <input type='checkbox'></input>
        <span>웹디자인</span>
      </div>
      <div className='' >
        <input type='checkbox'></input>
        <span>UI 디자인</span>
      </div>
      <div className='' >
        <input type='checkbox'></input>
        <span>모바일디자인</span>
      </div>
      <div className='' >
        <input type='checkbox'></input>
        <span>서비스디자인</span>
      </div>
      <div className='' >
        <input type='checkbox'></input>
        <span>UX 디자인</span>
      </div>
    <Outlet></Outlet>
  </div>
  )
}

function D(){
  return(
    <div className='work-box3'>
        <div>
            <input type='checkbox'/>
            <span>전체</span>
        </div>
        <div>
            <input type='checkbox'/>
            <span>영업</span>
        </div>
        <div>
            <input type='checkbox'/>
            <span>마케팅</span>
        </div>
        <div>
            <input type='checkbox'/>
            <span>Growth Hacker</span>
        </div>
        <div>
            <input type='checkbox'/>
            <span>Digital Marketer</span>
        </div>
        <div>
            <input type='checkbox'/>
            <span>전략수석</span>
        </div>
        <div>
            <input type='checkbox'/>
            <span>MD</span>
        </div>
    <Outlet></Outlet>
  </div>
  )
}

function E(){
  return(
    <div className='work-box3'>
        <div>
            <input type='checkbox'/>
            <span>전체</span>
        </div>
        <div>
            <input type='checkbox'/>
            <span>기타</span>
        </div>

        
    {/* <select size={2} className='work-input'>
              <input type='checkbox'/>

      <option value='-1'> 전체</option>
        <option value='30'>기타</option>
    </select> */}
    <Outlet></Outlet>
  </div>
  )
}


export {Talent};