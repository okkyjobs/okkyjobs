import React from 'react'
import './TalentsCode.css';


function TalentsCode() {
    return(
        <div className='talents-code'>
            <div className='talents-code-left'>
                <img className='talents-code-left-img' src={require('./img/resume-bg-pattern.png')}/>
                <div className='talents-code-left-in'>
                <div className='talents-code-profile'>
                    {/* <img className='talents-code-profile-img' src={require('./img/talents-profile.png')}/> */}
                </div>
                <div className='talents-code-a'>
                    <div className='talents-code-a-in'>
                        <div className='talents-code-info'>
                            <div className='talents-code-info-in'>
                                <div className='talents-code-name'>
                                    <span className='talents-code-name-span'>박OO</span>
                                </div>
                                <div className='talents-code-talentscode'>
                                    <span className='talents-code-talentscode-span'>#852</span>
                                </div>
                            </div>
                        </div>
                        <div className='talents-code-contract'>
                            <span>계약직</span>
                        </div>
                    </div>
                    <div className='talents-code-scrap'>
                        <img src={require('./img/scrap.jpg')}/>
                    </div>

                </div>
                    <div className='talents-code-scrap-contact'>
                        <img className='talents-code-scrap-contact-call' src={require('./img/call.png')}/>
                        <span className='talents-code-scrap-call'>01*-****-****</span>
                        <img className='talents-code-scrap-contact-mail'  src={require('./img/message.png')}/>
                        <span className='talents-code-scrap-mail'>*******@**********</span>
                    </div>
                    <div>
                        <div className='talents-code-oneline-introduce'>
                            <p className='talents-code-oneline-introduce-a'>한 줄 소개</p>
                            <p className='talents-code-oneline-introduce-b'>웹응용프로그램 개발 - (방송시스템, CMS, React, 검색 시스템, ELK)</p>
                        </div>
                    </div>
                </div>
                <div className='talents-code-b'>
                    <div className='talents-code-b-skill'>
                        <div className='talents-code-b-skill-in'>
                            <div className='talents-code-b-skill-year'>
                                <div>
                                    <span className='talents-code-b-title'>경력/보유기술</span>
                                </div>
                                <div className='talents-code-b-info-div'>
                                    <span className='talents-code-b-info'>총 20년 이상</span>
                                </div>
                                
                            </div>
                            <div className=''>
                                <div>
                                    <span className='lohan'>개발 / </span>
                                    <span>백엔드개발, 프론트엔드개발, 풀스택개발</span>
                                </div>
                                <div className='talents-code-b-skill-tag'>
                                    <span>javascript</span>
                                    <span>vue.js</span>
                                    <span>sql</span>
                                    <span>java</span>
                                    <span>mysql</span>
                                </div>
                                
                            </div>
                            
                        </div>
                        <div>

                        </div>

                    </div>

                </div>


                <div className='talents-code-b'>
                    <div className='talents-code-b-skill'>
                        <div className='talents-code-b-skill-in'>
                            <div className='talents-code-b-skill-year'>
                                <div>
                                    <span className='talents-code-b-title'>학력</span>
                                </div>
                                <div className='talents-code-b-info-div'>
                                    <span className='talents-code-b-info'>총 1개</span>
                                </div>
                                
                            </div>
                            <div className=''>
                                <div className='talents-school'>
                                    <div className='talents-school-ab'>
                                            <span className='lohan'>대학교 (4년제)</span>
                                            <img className='talents-career-ab-calendar' src={require('./img/calendar.png')}/>
                                            <span  className='talents-career-ab-calendar-span'>2011.03 ~ 2018.05</span>
                                    </div>
                                </div>
                                <div className='talents-code-b-skill-tag'>
                                    <p className='talents-code-b-skill-tag-info'>물리</p>
                                </div>
                                
                            </div>
                            
                        </div>
                        <div>

                        </div>

                    </div>

                </div>


                <div className='talents-code-b'>
                    <div className='talents-code-b-skill'>
                        <div className='talents-code-b-skill-in'>
                            <div className='talents-code-b-skill-year'>
                                <div>
                                    <span className='talents-code-b-title'>근무경력</span>
                                </div>
                                <div className='talents-code-b-info-div'>
                                    <span className='talents-code-b-info'>총 4개</span>
                                </div>
                                
                            </div>
                            <div className=''>
                                <div className='talents-career-first'>
                                    <div className='talents-career-ab'>
                                        <div>
                                            <span className='lohan'>OOOOOOO</span>
                                        </div>
                                        <div>
                                            <img className='talents-career-ab-calendar' src={require('./img/calendar.png')}/>
                                            <span  className='talents-career-ab-calendar-span'>2011.03 ~ 2018.05 (퇴사)</span>
                                        </div>

                                    </div>
                                    <div className='talents-code-b-skill-tag'>
                                        <p className='talents-code-b-skill-tag-info'>OOOOOO / 부장</p>
                                        <div className='talents-code-b-skill-tag-info-detail'>
                                            <p className='talents-code-b-skill-tag-info'>* 유한킴벌리 통합브랜드 SSO 운영 PM (2017.12~2018.11) : ASP.NET MVC4, MSSQL</p>
                                            <p className='talents-code-b-skill-tag-info'>* SmartCMS 개발 (2017.03~2017.06) : JAVA, Spring 3.0, myBatis, Oracle</p>
                                            <p className='talents-code-b-skill-tag-info'>* YES24 영중문 쇼핑몰 구축 PL (2016.06~2017.03) : ASP.NET MVC4, Angular JS, MSSQL</p>
                                        </div>
                                    </div>
                                
                                </div>
                                <div className='talents-career'>
                                    <div className='talents-career-ab'>
                                        <div>
                                            <span className='lohan'>OOOOOOO</span>
                                        </div>
                                        <div>
                                            <img className='talents-career-ab-calendar' src={require('./img/calendar.png')}/>
                                            <span  className='talents-career-ab-calendar-span'>2011.03 ~ 2018.05 (퇴사)</span>
                                        </div>

                                    </div>
                                    <div className='talents-code-b-skill-tag'>
                                        <p className='talents-code-b-skill-tag-info'>OOOOOO / 부장</p>
                                        <div className='talents-code-b-skill-tag-info-detail'>
                                            <p className='talents-code-b-skill-tag-info'>* 유한킴벌리 통합브랜드 SSO 운영 PM (2017.12~2018.11) : ASP.NET MVC4, MSSQL</p>
                                            <p className='talents-code-b-skill-tag-info'>* SmartCMS 개발 (2017.03~2017.06) : JAVA, Spring 3.0, myBatis, Oracle</p>
                                            <p className='talents-code-b-skill-tag-info'>* YES24 영중문 쇼핑몰 구축 PL (2016.06~2017.03) : ASP.NET MVC4, Angular JS, MSSQL</p>
                                        </div>
                                    </div>
                                
                                </div>
                                <div className='talents-career'>
                                    <div className='talents-career-ab'>
                                        <div>
                                            <span className='lohan'>OOOOOOO</span>
                                        </div>
                                        <div>
                                            <img className='talents-career-ab-calendar' src={require('./img/calendar.png')}/>
                                            <span  className='talents-career-ab-calendar-span'>2011.03 ~ 2018.05 (퇴사)</span>
                                        </div>

                                    </div>
                                    <div className='talents-code-b-skill-tag'>
                                        <p className='talents-code-b-skill-tag-info'>OOOOOO / 부장</p>
                                        <div className='talents-code-b-skill-tag-info-detail'>
                                            <p className='talents-code-b-skill-tag-info'>* 유한킴벌리 통합브랜드 SSO 운영 PM (2017.12~2018.11) : ASP.NET MVC4, MSSQL</p>
                                            <p className='talents-code-b-skill-tag-info'>* SmartCMS 개발 (2017.03~2017.06) : JAVA, Spring 3.0, myBatis, Oracle</p>
                                            <p className='talents-code-b-skill-tag-info'>* YES24 영중문 쇼핑몰 구축 PL (2016.06~2017.03) : ASP.NET MVC4, Angular JS, MSSQL</p>
                                        </div>
                                    </div>
                                
                                </div>
                            </div>
                            
                        </div>
                        <div>

                        </div>

                    </div>

                </div>

                <div className='talents-code-b'>
                    <div className='talents-code-b-skill'>
                        <div className='talents-code-b-skill-in'>
                            <div className='talents-code-b-skill-year'>
                                <div>
                                    <span className='talents-code-b-title'>프로젝트</span>
                                </div>
                                <div className='talents-code-b-info-div'>
                                    <span className='talents-code-b-info'>총 6개</span>
                                </div>
                                
                            </div>
                            <div className=''>
                                <div className='talents-project-first'>
                                    <div className='talents-career-ab'>
                                        <div>
                                            <span className='lohan'>OOOOOOOOOOOOO</span>
                                        </div>
                                        <div>
                                            <img className='talents-career-ab-calendar' src={require('./img/calendar.png')}/>
                                            <span  className='talents-career-ab-calendar-span'>2011.03 ~ 2018.05 (퇴사)</span>
                                        </div>

                                    </div>
                                    <div className='talents-code-b-skill-tag'>
                                        <p className='talents-code-b-skill-tag-info'>LG CNS</p>
                                        <div className='talents-code-b-skill-tag-info-detail'>
                                            <p className='talents-code-b-skill-tag-info'>JAVA, Springboot, LG foundation F/W, react, typescript , Elasticsearch 7.12.1</p>
                                            <p className='talents-code-b-skill-tag-info'>NPDM 검색 개발 및 기구,부품, S/W 시스템 개발</p>                                        </div>
                                    </div>
                                
                                </div>
                                <div className='talents-project'>
                                    <div className='talents-career-ab'>
                                        <div>
                                            <span className='lohan'>OOOOOOOOOOOOOOOOOOOO</span>
                                        </div>
                                        <div>
                                            <img className='talents-career-ab-calendar' src={require('./img/calendar.png')}/>
                                            <span  className='talents-career-ab-calendar-span'>2011.03 ~ 2018.05 (퇴사)</span>
                                        </div>

                                    </div>
                                    <div className='talents-code-b-skill-tag'>
                                        <p className='talents-code-b-skill-tag-info'>LG CNS</p>
                                        <div className='talents-code-b-skill-tag-info-detail'>
                                            <p className='talents-code-b-skill-tag-info'>JAVA, Springboot, LG foundation F/W, react, typescript , Elasticsearch 7.12.1</p>
                                            <p className='talents-code-b-skill-tag-info'>NPDM 검색 개발 및 기구,부품, S/W 시스템 개발</p>                                        </div>
                                    </div>
                                
                                </div>
                                <div className='talents-project'>
                                    <div className='talents-career-ab'>
                                        <div>
                                            <span className='lohan'>OOOO</span>
                                        </div>
                                        <div>
                                            <img className='talents-career-ab-calendar' src={require('./img/calendar.png')}/>
                                            <span  className='talents-career-ab-calendar-span'>2011.03 ~ 2018.05 (퇴사)</span>
                                        </div>

                                    </div>
                                    <div className='talents-code-b-skill-tag'>
                                        <p className='talents-code-b-skill-tag-info'>LG CNS</p>
                                        <div className='talents-code-b-skill-tag-info-detail'>
                                            <p className='talents-code-b-skill-tag-info'>JAVA, Springboot, LG foundation F/W, react, typescript , Elasticsearch 7.12.1</p>
                                            <p className='talents-code-b-skill-tag-info'>NPDM 검색 개발 및 기구,부품, S/W 시스템 개발</p>                                        </div>
                                    </div>
                                
                                </div>
                                <div className='talents-project'>
                                    <div className='talents-career-ab'>
                                        <div>
                                            <span className='lohan'>OOOOOOOOOOOOOOOOO</span>
                                        </div>
                                        <div>
                                            <img className='talents-career-ab-calendar' src={require('./img/calendar.png')}/>
                                            <span  className='talents-career-ab-calendar-span'>2011.03 ~ 2018.05 (퇴사)</span>
                                        </div>

                                    </div>
                                    <div className='talents-code-b-skill-tag'>
                                        <p className='talents-code-b-skill-tag-info'>LG CNS</p>
                                        <div className='talents-code-b-skill-tag-info-detail'>
                                            <p className='talents-code-b-skill-tag-info'>JAVA, Springboot, LG foundation F/W, react, typescript , Elasticsearch 7.12.1</p>
                                            <p className='talents-code-b-skill-tag-info'>NPDM 검색 개발 및 기구,부품, S/W 시스템 개발</p>                                        </div>
                                    </div>
                                
                                </div>
                                <div className='talents-project'>
                                    <div className='talents-career-ab'>
                                        <div>
                                            <span className='lohan'>OOOOOOOOOOOOOOO</span>
                                        </div>
                                        <div>
                                            <img className='talents-career-ab-calendar' src={require('./img/calendar.png')}/>
                                            <span className='talents-career-ab-calendar-span'>2011.03 ~ 2018.05 (퇴사)</span>
                                        </div>

                                    </div>
                                    <div className='talents-code-b-skill-tag'>
                                        <p className='talents-code-b-skill-tag-info'>LG CNS</p>
                                        <div className='talents-code-b-skill-tag-info-detail'>
                                            <p className='talents-code-b-skill-tag-info'>JAVA, Springboot, LG foundation F/W, react, typescript , Elasticsearch 7.12.1</p>
                                            <p className='talents-code-b-skill-tag-info'>NPDM 검색 개발 및 기구,부품, S/W 시스템 개발</p>                                        </div>
                                    </div>
                                
                                </div>
                                <div className='talents-project'>
                                    <div className='talents-career-ab'>
                                        <div>
                                            <span className='lohan'>OOOOOOOOOO</span>
                                        </div>
                                        <div>
                                            <img className='talents-career-ab-calendar' src={require('./img/calendar.png')}/>
                                            <span  className='talents-career-ab-calendar-span'>2011.03 ~ 2018.05 (퇴사)</span>
                                        </div>

                                    </div>
                                    <div className='talents-code-b-skill-tag'>
                                        <p className='talents-code-b-skill-tag-info'>LG CNS</p>
                                        <div className='talents-code-b-skill-tag-info-detail'>
                                            <p className='talents-code-b-skill-tag-info'>JAVA, Springboot, LG foundation F/W, react, typescript , Elasticsearch 7.12.1</p>
                                            <p className='talents-code-b-skill-tag-info'>NPDM 검색 개발 및 기구,부품, S/W 시스템 개발</p>                                        </div>
                                    </div>
                                
                                </div>

                            </div>
                            
                        </div>

                    </div>

                </div>
                

                <div className='talents-code-b'>
                    <div className='talents-code-b-skill'>
                        <div className='talents-code-b-skill-in'>
                            <div className='talents-code-b-skill-year'>
                                <div>
                                    <span className='talents-code-b-title'>선호근무조건</span>
                                </div>
                                
                            </div>

                            <div className='wish123456'>
                            <div className='wish123'>
                                <div>
                                    <div>
                                        <span className='wish1'>프로젝트 시작 가능일</span>
                                    </div>
                                    <div className='talents-code-b-wish-title'>
                                        <p>2024.06.02</p>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <span className='wish2'>사업자 유형</span>
                                    </div>
                                    <div className='talents-code-b-wish-title'>
                                        <p>개인사업자</p>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <span className='wish3'>프리랜서 유형</span>
                                    </div>
                                    <div className='talents-code-b-wish-title'>
                                        <p>개인</p>
                                    </div>
                                </div>
                                
                                
                            </div>
                            <div className='wish456'>
                                <div>
                                    <div>
                                        <span className='wish4'>희망근무지</span>
                                    </div>
                                    <div className='talents-code-b-wish-title'>
                                        <p>서울 전체</p>
                                        <p>경기 고양시 덕양구</p>
                                        <p>경기 고양시 일산동구</p>
                                        <p>경기 고양시 일산서구</p>
                                        <p>경기 파주시</p>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <span className='wish5'>희망 근무 유형</span>
                                    </div>
                                    <div className='talents-code-b-wish-title'>
                                        <p>협의</p>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <span className='wish6'>희망 월 급여</span>
                                    </div>
                                    <div className='talents-code-b-wish-title'>
                                        <p>850만원</p>
                                    </div>
                                </div>
                                
                                
                            </div>
                            </div>
                            
                        </div>
                        <div>

                        </div>

                    </div>

                </div>


                <div className='talents-code-b'>
                    <div className='talents-code-b-skill'>
                        <div className='talents-code-b-skill-in'>
                            <div className='talents-code-b-skill-year'>
                                <div>
                                    <span className='talents-code-b-title'>소개</span>
                                </div>
                                
                            </div>
                            <div className=''>
                                <div className='talents-code-b-introduce-detail'>
                                    <p>시스템간의 연계 인터페이스, MSSQL ETL, ElasticSearch를 이용한 검색 서비스등을 개발 하였습니다.</p>
                                    <p>방송시스템등의 CMS 구축 및 그룹웨어등을 개발 하였습니다.</p>
                                    <p>최근에는 LG CNS의 내부 업무 프레임웍인 Foundation 을 이용한 업무 서비스 개발 및 인터페이스, 배치등을 개발 하였습니다.</p>
                                    <p>프론트엔드는 순수 Javascript, jquery, angularJS, vue.js. react 등의 경험이 있습니다.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='talents-code-b-end'>
                    <div className='talents-code-b-skill'>
                        <div className='talents-code-b-skill-in'>
                            <div className='talents-code-b-skill-year'>
                                <div>
                                    <span className='talents-code-b-title'>파일 및 링크</span>
                                </div>
                                
                            </div>
                            <div className=''>
                            </div>
                        </div>
                    </div>
                </div>


                

                <div className='talents-code-c'>

                </div>
                <div className='talents-code-d'>

                </div>
                <div className='talents-code-e'>

                </div>
            </div>

            <div className='talents-code-right'>
                <div className='talents-code-right-box1'>
                    <div>
                        <span className='find-people'>개발자를 찾고 있으신가요?</span>
                    </div>
                    <div className='talents-code-right-box1-a'>
                        <div>
                            <img className='talents-code-right-box1-img' src={require('./img/information.png')}/>
                        </div>
                        <div>
                            <span className='information-a'>회사로 등록하고 원하는 조건의<br/>구직자와 인터뷰를 시작하세요.</span>
                        </div>
                    </div>
                    <div>
                        <button className='talents-code-right-box1-button' type='button'>기업회원 인증하기</button>
                    </div>

                </div>
                <div className='talents-code-right-box2'>
                <div>
                        <span className='find-people'>구직이 시작되었어요.</span>
                    </div>
                    <div className='talents-code-right-box1-a'>
                        <div>
                            <img className='talents-code-right-box1-img' src={require('./img/information.png')}/>
                        </div>
                        <div>
                            <span className='information-a'>김홍시님 진행중인 구직은<br/>Jobs의 구직 내역 관리에서 <br/>확인할 수 있습니다.</span>
                        </div>
                    </div>
                    <div>
                        <button className='talents-code-right-box2-button' type='button'>구직 내역 관리 바로가기</button>
                    </div>

                </div>

            </div>
            
        </div>
    )
}

export default TalentsCode