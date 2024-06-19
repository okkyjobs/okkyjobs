import { Outlet } from 'react-router-dom';
import './Aside.css'

function Aside(){
  return(

    <aside className='left-box'>
    <nav className='left-box-nav'>
      <div className='left-first-box'>
        <div className='myAccount'>내 계정</div>
        <div className='profile'>
          <a className='profile-a' href='/settings/profile'>
            <img className='profile-logo' src={require('./img1/profile.png')}/>
            <span className='profile-font'>프로필</span>
          </a>
          <a className='manageAcc-a' href='/settings/account'>
            <img className='mAcc-logo' src={require('./img1/manageAccount.png')}/>
            <span className='manageAccount-font'>계정 관리</span>
          </a>
        </div>
      </div>
      <div className='line'>
        <div className='Jobs-font'>Jobs</div>
        <div>
          <a className='career-manage1' href='/settings/career'>
            <img className='pic-class' src={require('./img1/eryukseo.png')}></img>
            <span className='career-font'>이력서 관리</span>
          </a>
          <a className='career-manage2' href='/settings/talents'>
            <img className='pic-class' src={require('./img1/guzik.png')}></img>
            <span className='career-font'>구직 내역 관리</span>
          </a>
          <a className='career-manage3' href='/settings/bookmarks'>
            <img className='pic-class' src={require('./img1/position.png')}></img>
            <span className='career-font'>관심 포지션</span>
          </a>
          <a className='career-manage4' href='/settings/contract'>
            <img className='pic-class' src={require('./img1/positionEryuk.png')}></img>
            <span className='career-font'>포지션 지원이력</span>
          </a>
        </div>
      </div>
    </nav>
    <Outlet/>
  </aside>
  )
}

export default Aside;