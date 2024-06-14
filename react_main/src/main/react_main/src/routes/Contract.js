import './Contract.css'
import Aside from './Aside';

function Contract(){
    return(
        <main className='main-class'>
        <div className='main-box'>
        <div className='main-container'>
          <Aside></Aside>
                <div className='main-contract-box'>

                    <div className='main-contract-container'>
                        <div className='button-container'>
                            <div className='button-box'>
                                <button className='contract-but1' type='button'>
                                    <span>계약직 채용</span>
                                </button>
                                <button className='contract-but2' type='button'>
                                    <span>정규직 채용</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='main-contract-container2'>
                        <div>
                            <span>포지션 지원 이력이 없습니다.</span>
                        </div>
                    </div>
                    <div className='main-contract-container3'>
                        <div className='main-contract-container3-box'>
                            <span className='main-contract-container3-font'>내게 맞는 포지션 검색하러 가기</span>
                        </div>
                </div>
            </div>
            </div>
        </div>
    </main>
    )
}

export default Contract;