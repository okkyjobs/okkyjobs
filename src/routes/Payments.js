import React from 'react'
import './Payments.css';


function Payments() {
    return(
        <div className='payments-all'>
            <div className='payments-title'>
                <span>주문/결제</span>
            </div>
            <div className='payments-bottom'>
                <div className='payments-left'>
                    <div className='payments-left-img-and-span'>
                        <img className='payments-left-card-img' src={require('./img/card.png')}/>
                        <span>결제수단</span>
                    </div>
                    <div className='payments-left-button-and-span'>
                        <div>
                            <input className='payments-left-button' type='radio'/>
                        </div>
                        <div>
                            <span>신용카드</span>
                        </div>
                    </div>
                    <div className='payments-left-button-and-span-b'>
                        <div>
                            <span className='payments-left-button-b'>◯</span>
                        </div>
                        <div>
                            <span>계좌 간편결제 (지원 예정)</span>
                        </div>
                    </div>
                    <div>
                        <span className='payments-left-info'>결제수단은 신용카드만 지원하고 그 외 결제수단은 지원 준비중입니다.</span>
                    </div>

                </div>
                <div className='payments-right'>
                    <div className='payments-right-top'>
                        <div className='payments-right-img-and-span'>
                            <img className='payments-right-shoppingbag-img' src={require('./img/shoppingbag.png')}/>
                            <span>상품정보</span>
                        </div>
                        <div className='payments-right-top-ab'>
                            <div className='payments-right-top-a'>
                                <div className='payments-right-top-a-1'>
                                    <span>상품명</span>
                                </div>
                                <div className='payments-right-top-a-2'>
                                    <span>수량</span>
                                </div>
                                <div className='payments-right-top-a-3'>
                                    <span>상품금액</span>
                                </div>

                            </div>
                            <div className='payments-right-top-b'>
                                <div className='payments-right-top-b-img-and-span'>
                                    <div className=''>
                                        <img className='payments-right-top-b-img' src={require('./img/products1.png')}/>
                                    </div>
                                    <div>
                                        <span className='payments-right-top-b-span'>10회 열람권</span>
                                    </div>

                                </div>
                                <div className='payments-right-top-b-2'>
                                    <span>1개</span>
                                </div>
                                <div className='payments-right-top-b-3'>
                                    <div className='payments-right-top-b-3-price'>
                                        <span>200,000</span>
                                    </div>
                                    <div className='payments-right-top-b-3-bottom'>
                                        <span className='payments-right-top-3-discount-a'>-74,000</span>
                                        <span className='payments-right-top-3-discount-b'>37%</span>
                                    </div>

                                </div>

                            </div>
                            
                        </div>
                        <div className='payments-total-price-and-num'>
                            <div className='payments-total-price-ab'>
                                <span className='payments-total-price-a'>총 금액: </span>
                                <span className='payments-total-price-b'>126,000</span>
                            </div>
                            
                        </div>
                    </div>
                    <div>
                        <button className='payments-right-final-select' type='button'>결제수단 선택 후 결제하기</button>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Payments