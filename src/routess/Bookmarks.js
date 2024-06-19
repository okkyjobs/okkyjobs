import './Bookmarks.css'
import Aside from './Aside.js';

function Bookmarks(){
    return(
        <main className='main-class'>
        <div className='main-box'>
        <div className='main-container'>
          <Aside></Aside>
            <div className='main-box-block'>

                    <div className='main-bookmarks-container'>
                        <div className='button-container'>
                            <div className='button-box'>
                                <button className='bookmarks-but1' type='button'>
                                    <span>계약직</span>
                                </button>
                                <button className='bookmarks-but2' type='button'>
                                    <span>정규직</span>
                                </button>
                            </div>
                        </div>
                        <div className='bookmarks-position-box'>
                            <div className='bookmarks-head-font-box'>
                                <span>계약직 관심 포지션</span>
                            </div>
                            <div className='bookmarks-ex-box'>
                                <div>
                                    <img className='company-logo-pic' src={require('./img/company_logo.png')} />
                                </div>
                                <div className='bookmarks-ex-font'>
                                    <span className='bookmarks-ex-font1'>(주)솔택아이앤에스</span>
                                    <span className='bookmarks-ex-font2'>프론트엔드개발, 팀원</span>
                                    <span className='bookmarks-ex-font3'>공공기관 시스템 React 개발 - 고급,중급</span>
                                    <div className='bookmarks-ex-date-font'>
                                        <span>저장일시: 2024-05-16 17:56:47</span>
                                    </div>
                                </div>
                            </div>
                            <div className='bookmarks-ex-under-box'>
                                <div className='bookmarks-ex-under-container1'>
                                    <img className='bookmarks-ex-under-box-pic' src={require('./img/bookmarks-ex-pic.png')} />
                                    <span className='bookmarks-ex-under-box-font'>java, reactjs </span>
                                </div>
                                <div className='bookmarks-ex-under-container'> 
                                    <img className='bookmarks-ex-under-box-pic' src={require('./img/weeks.png')} />
                                    <span className='bookmarks-ex-under-box-font'>7년 이상 ~ 15년 미만</span>
                                </div>
                                <div className='bookmarks-ex-under-container'>
                                    <img className='bookmarks-ex-under-box-pic' src={require('./img/location.png')} />
                                    <span className='bookmarks-ex-under-box-font'>서울 서대문구 충정로2가 • 상근 </span>
                                </div>
                                <div className='bookmarks-ex-under-container'>
                                    <img className='bookmarks-ex-under-box-pic' src={require('./img/money-pic.png')}/>
                                    <span className='bookmarks-ex-under-box-font'>630~720만원</span>
                                </div>
                                <div className='bookmarks-ex-under-container'>
                                    <img className='bookmarks-ex-under-box-pic' src={require('./img/calender-pic.png')}/>
                                    <span className='bookmarks-ex-under-box-font'>마감 5.31(금)</span>
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

export default Bookmarks;