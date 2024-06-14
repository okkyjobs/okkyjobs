import './Talents.css'
import Aside from './Aside';

function Talent(){
    return(
        <main className='main-class'>
        <div className='main-box'>
        <div className='main-container'>

          <Aside></Aside>
        <div className='guzik-right-main-box'>
            <div className='guzik-manage-font'>
                구직 내역 관리
            </div>
            <div>
                <div className='guzik-box'>
                    <div className='guzik-list1'>
                        <div className='guzik-list-box'>
                            <div className='guizk-list-num'>
                                <span className='guzik-tagnum'>#848</span>
                                <span className='guzik-datetime'>2024-05-10~구직중</span>
                            </div>
                            <div className='guzik-career-show'>
                                <img className='guzik-show-Career' src={require('./img/showCareer.png')} />
                                <span>모든 기업에 이력서 공개</span>
                            </div>
                        </div>
                        <div className='read-career-box'>
                            <div>
                                <div>
                                    <div className='read-career'>
                                        <img className='read-career-pic' src={require('./img/read_career.png')} />
                                        <div className='read-career-font'>이력서 열람</div>
                                    </div>
                                    <div>1</div>
                                </div>
                            </div>
                            <div className='read-career-close-box'>
                                <div className='read-career-close-font'>닫기</div>
                                <div>^</div>
                            </div>
                        </div>
                    </div>
                    <div className='guzik-show-list'>
                        <div>
                            <div className='guzik-icon-container'>
                                1
                                <div className='guzik-icon-box'>
                                    <img className='guzik-icon' src={require('./img/guzikIcon.png')} />
                                    <span className='guzik-icon-font'>(주)이브레인</span>
                                </div>
                            </div>
                        </div>
                        <div className='guzik-icon-date-box'>
                            <span className='guzik-icon-date'>2024-05-11</span>
                            <span className='guzik-read-cpt'>열람완료</span>
                            <span className='read-career-but'>이력서보기</span>
                        </div>
                    </div>
                    <div className='guzik-list1'>
                        <div className='guzik-list-box'>
                            <div className='guizk-list-num'>
                                <span className='guzik-tagnum'>#847</span>
                                <span className='guzik-datetime'>2024-05-10~2024-05-10</span>
                            </div>
                            <div className='guzik-career-show'>
                                <img className='guzik-show-Career' src={require('./img/interview.png')} />
                                <span>인터뷰 제안 후 이력서 열람</span>
                            </div>
                        </div>
                        <div className='read-career-box'>
                            <div className='read-career-box2'>
                                 <div>
                                    <div className='read-career'>
                                        <img className='read-career-pic' src={require('./img/interview2.png')} />
                                        <div className='read-career-font'>인터뷰 제안</div>
                                    </div>
                                    <div>0</div>
                                </div>
                                <div>
                                    <div className='read-career'>
                                        <img className='read-career-pic' src={require('./img/read_career.png')} />
                                        <div className='read-career-font'>이력서 열람</div>
                                    </div>
                                    <div>0</div>
                                </div>
                            </div>
                            <div className='read-career-close-box'>
                                <div className='read-career-close-font'>보기</div>
                                <div>⬇️</div>
                            </div>
                        </div>
                    </div>
                    <div className='guzik-list1'>
                        <div className='guzik-list-box'>
                            <div className='guizk-list-num'>
                                <span className='guzik-tagnum'>#846</span>
                                <span className='guzik-datetime'>2024-05-10~2024-05-10</span>
                            </div>
                            <div className='guzik-career-show'>
                                <img className='guzik-show-Career' src={require('./img/showCareer.png')} />
                                <span>모든 기업에 이력서 공개</span>
                            </div>
                        </div>
                        <div className='read-career-box'>
                            <div>
                                <div>
                                    <div className='read-career'>
                                        <img className='read-career-pic' src={require('./img/read_career.png')} />
                                        <div className='read-career-font'>이력서 열람</div>
                                    </div>
                                    <div>0</div>
                                </div>
                            </div>
                            <div className='read-career-close-box'>
                                <div className='read-career-close-font'>보기</div>
                                <div>⬇️</div>
                            </div>
                        </div>
                    </div>
            </div>
            </div>
        </div>
                </div>
                </div>
            </main>
    )
}

export default Talent;