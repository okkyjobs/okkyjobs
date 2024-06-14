import { Link, useNavigate } from 'react-router-dom';
import './Main.css'
import axios from 'axios';
import { useEffect, useState } from 'react';

function Main(){

    const navigate =  useNavigate();

    const baseUrl = "http://localhost:3000";


    useEffect(() => {
        const checkDuplicateId = async () => {
          try {
            const userInfo = JSON.parse(localStorage.getItem('user'));
            if (true) {
              const response = await axios.get(`${baseUrl}/api/v1/auth/signup/validation/username?username=${userInfo.id}`);
              console.log(response.data);
              userInfo.usercode = response.data.user.user_code;
              console.log(response.data.user.user_code)
              localStorage.setItem('user', JSON.stringify(userInfo));
            }
          } catch (error) {
            console.error('아이디 중복 검사 에러:', error);
          }
        };
        checkDuplicateId();
      },[]);

    

    return(
        <main className='main-class'>
        <div className='Main-box'>
        <div className='main-container'>
        <div className='okky-main-box'>
            <div className=''>
                <div className='okky-main-container'>
                    <div className='okky-first-continer'>
                        <div className='okky-first-box'>
                            <div className='okky-first-left-box'>
                                <div className='okky-first-box-flex'>좋은 개발자와 좋은 일터가<br/> 만나는 곳,
                                    <span className='okky-first-box1-font'>OKKY Jobs</span>
                                </div>

                                <div className='okky-first-box2'>
                                    <span>OKKY는 개발자를 위해 존재하는 국내 최대·최고의 개발자 채용 플랫폼입니다.</span>
                                </div>
                                <div className='okky-first-box3'>
                                    <span>#OKKY_Talent_정식오픈! #OKKY_Talent_정식오픈_이벤트_확인하기!</span>
                                </div>
                            </div>
                        </div>
                        <img className='main-first-box-pic' src={require('./img/okky_main_logo.png')} />
                    </div>
                </div>
            </div>
            <div className='okky-main-second-container'>
                <div className='okky-main-second-box'>
                    <div className='okky-main-second-left-box'>
                        <span>
                            지금 이 순간에도 수많은 개발자와 일자리가<br/> OKKY Jobs를 통해 활발히 만나고 있습니다.
                        </span>
                    </div>
                    <div className='okky-main-second-right-box'>
                        <div className='okky-main-second-right-box1'>
                            <span className='okky-main-second-right-box-fonts'>
                                165,980<span className='small-font'> 명</span>
                            </span>
                            <span className='small-font2'>
                                가입 개인회원 수
                            </span>
                        </div>
                        <div className='okky-main-second-right-box2'>
                            <span className='okky-main-second-right-box-fonts'>
                                3,300<span className='small-font'> 사</span>
                            </span>
                            <span className='small-font2'>
                                가입 개인회원 수
                            </span>
                        </div>
                        <div className='okky-main-second-right-box3'>
                            <span className='okky-main-second-right-box-fonts'> 
                                9,972<span className='small-font'> 건</span>
                            </span>
                            <span className='small-font2'>
                                최근 1년간 누적 포지션 수
                            </span>
                        </div>
                    </div>
                </div>
            </div>
                <div className='okky-main-third-container'>
                    <div className='okky-main-third-box'>
                        <div className='okky-main-third-box1'>
                            <span className='purple-font'>OKKY Talent</span>
                            <span className='font-weight-up'>지금 여기에서 멋진 만남이 시작됩니다.</span>
                            <span>OKKY Talent를 통해 새로운 기회를 만들어보세요!"</span>
                        </div>
                        <div className='okky_main_second_pic_box'>
                            <img className='okky_main_second_pic' src={require('./img/okky_main_second_pic.png')} />
                        </div>
                    </div>
                </div>
                    <div className='okky-main-forth-container'>
                        <div className='okky-main-forth-left-box'>
                            <div className='okky-main-forth-left-box1'>
                                <img className='position-cover1-pic' src={require('./img/position-cover1.png')} />
                                <div className='purple-cover'></div>
                                <div className='okky-main-forth-left-box1-font'>Position</div>
                                <div className='okky-main-forth-left-box1-font2'>괜찮은 직장이 모여있는 곳</div>
                            </div>
                            <div className='okky-main-forth-left-box2'>
                                <div className='okky-main-forth-left-box2-1'>
                                    <span>Contract</span>
                                    <span className='okky-main-forth-left-box2-1-font2'>계약직</span>
                                </div>
                                <div className='okky-main-forth-left-box2-1'>
                                    <span>Fulltime</span>
                                    <span className='okky-main-forth-left-box2-1-font2'>정규직</span>
                                </div>
                            </div>

                        </div>
                        <div className='okky-main-forth-right-box'>
                            <div className='okky-main-forth-left-box1'>
                            <img className='position-cover1-pic' src={require('./img/talent-cover1.png')} />
                            <div className='purple-cover2'></div>
                                <div className='okky-main-forth-left-box1-font'>Talent</div>
                                <div className='okky-main-forth-left-box1-font2'>멋진 인재가 모여있는 곳</div>
                            </div>
                            <div className='okky-main-forth-left-box2'>
                                <div className='okky-main-forth-left-box2-1'>
                                    <span>Talent Search</span>
                                    <span className='okky-main-forth-left-box2-1-font2'>인재찾기</span>
                                </div>
                                <Link to="/settings/career" style={{color: "black", textDecoration: "none", padding: "5px"}}>
                                <div className='okky-main-forth-left-box2-1'>
                                    <span>Resume</span>
                                    <span className='okky-main-forth-left-box2-1-font2'>이력서 등록</span>
                                </div>
                                </Link>
                            </div>

                        </div>
                    </div>
                    </div>
               </div>
                </div>
                </main>
    )
}

export default Main;