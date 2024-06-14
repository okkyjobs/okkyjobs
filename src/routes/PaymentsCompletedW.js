import React from 'react'
import './PaymentsCompletedW.css';


function PaymentsCompletedW() {

    return (

        <div className='paymentscompleted-all'>
            <div className=''>
                <img className='phone' src={require('./img/phone.png')}/>
            </div>
            <div>
                <div className='paymentscompleted-h1'>
                    <h1>결제가 완료되었습니다</h1>
                </div>
                <div className='paymentscompleted-thanks'>
                    <span>결제해 주셔서 감사합니다.<br/>이제 아래 서비스들을 사용하실 수 있습니다.</span>
                </div>
            </div>
            <div>
                <a href='/계약직 채용포지션 관리'>
                    <div className='paymentscompleted-position'>
                        <div>
                            <span>계약직 채용포지션 관리</span>
                        </div>
                        <div>
                            <img className='payments_completed_arrow' src={require('./img/payments_completed_arrow.png')}/>
                        </div>
                    </div>
                </a>
                <a href='./정규직 채용포지션 관리'>
                    <div className='buy_career'>
                        <span>정규직 채용포지션 관리</span>
                        <img className='payments_completed_arrow' src={require('./img/payments_completed_arrow.png')}/>
                    </div>
                </a>
                <a href='./포지션 등록하기'>
                    <div className='buy_career'>
                        <span>포지션 등록하기</span>
                        <img className='payments_completed_arrow' src={require('./img/payments_completed_arrow.png')}/>
                    </div>
                </a>
                <a href='./구매 이력관리'>
                    <div className='buy_career'>
                        <span>구매 이력관리</span>
                        <img className='payments_completed_arrow' src={require('./img/payments_completed_arrow.png')}/>
                    </div>
                </a>
            </div>
            <div>
                <a href='/'>
                    <button className='to-home' type='button'>홈으로</button>
                </a>
            </div>

        </div>
    )
}
export default PaymentsCompletedW
        