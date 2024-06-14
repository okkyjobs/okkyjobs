import React from 'react'
import './ProductsRBuy.css';


function ProductsRBuy() {
    return(
        <div className='productsrbuy-all'>
        <div>
            <div className='productsrbuy-goods-order'>
                <span>상품 주문</span>
            </div>
            <div className='productsrbuy-abcd'>
                <div className='productsrbuy-a'>
                    <span className='productsrbuy-select'>상품 및 수량 선택</span>
                </div>
                <div className='productsrbuy-bcd'>
                    <div className='productsrbuy-b'>
                        <div className='productsrbuy-goods-name'>
                            <span>상품명</span>
                            <div className='productsrbuy-goods-name-and-img'>
                                <div>
                                    <img className='productsrbuy-goods-img' src={require('./img/products1.png')}/>
                                </div>
                                <div>
                                    <div className='productsrbuy-goods-name-n'>
                                        <span>N회 열람권</span>
                                    </div>
                                    <div className='기한 안내'>
                                        <span>구매일로부터 90일간 사용가능</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='productsrbuy-goods-price'>
                            <div className='productsrbuy-goods-price-in'>
                                <span>상품가격</span>
                            </div>
                            <h3>200,000원</h3>
                        </div>
                        <div className='productsrbuy-goods-count'>
                            <div>
                                <span>수량</span>
                            </div>
                            <div className='productsrbuy-goods-count-all'>
                                <div className='productsrbuy-goods-count-minus'>-</div>
                                <div className='productsrbuy-goods-count-num'>1</div>
                                <div className='productsrbuy-goods-count-plus'>+</div>
                            </div>
                        </div>
                    </div>

                    <div className='productsrbuy-c'>
                        <div className='productsrbuy-c-discount'>
                            <span>할인혜택</span>
                        </div>
                        <div className='productsrbuy-c-benefit'>
                            <span className='productsrbuy-c-benefit-red'>37%할인</span>
                            <span>적용</span>
                        </div>
                        <div className='productsrbuy-c-discount-price'>
                            <span>-74,000원</span>
                        </div>

                    </div>
                    <div className='productsrbuy-d'>
                        <div className='productsrbuy-d-total'>
                            <span>총 결제 금액</span>
                        </div>
                        <div className='productsrbuy-d-total-payment'>
                            <span>126,000원</span>
                        </div>

                    </div>
                </div>

            </div>

            <div className='productsrbuy-agree-box'>
                <div className='productsrbuy-agree-box-a'>
                    <div>
                        <input className='productsrbuy-all-agree-check' type='checkbox'/>
                    </div>
                    <div className=''>
                        <span className='productsrbuy-all-agree'>전체동의</span>
                    </div>
                    <div>
                        <span className='productsrbuy-all-agree-info'>전체동의를 선택하시면 아래의 모든 약관에 동의하게 됩니다.</span>
                    </div>
                </div>
                <div className='productsrbuy-agree-box-b'>
                    <div className='productsrbuy-agree-box-b-1'>
                        <div>
                            <input className='productsrbuy-agree-box-b-1-check' type='checkbox'/>
                        </div>
                        <div>
                            <span>통합 서비스 이용약관</span>
                        </div>
                        <div>
                            <a href='https://jobs.okky.kr/legal/terms'>보기</a>
                        </div>
                    </div>
                    <div className='productsrbuy-agree-box-b-2'>
                        <div>
                            <input className='productsrbuy-agree-box-b-2-check' type='checkbox'/>
                        </div>
                        <div>
                            <span>개인정보 처리방침</span>
                        </div>
                        <div>
                            <a href='https://jobs.okky.kr/legal/privacy'>보기</a>
                        </div>
                    </div>
                    <div className='productsrbuy-agree-box-b-3'>
                        <div>
                            <input className='productsrbuy-agree-box-b-3-check' type='checkbox'/>
                        </div>
                        <div>
                            <span>취소/환불 서비스 정책</span>
                        </div>
                        <div>
                            <a href='https://jobs.okky.kr/faq/company#refund-ticket'>보기</a>
                        </div>
                    </div>
                </div>

            </div>

            <div className='productsrbuy-buttons'>
                <div>
                    <button className='productsrbuy-cancel-button' type='button'>취소</button>
                </div>
                <div>
                    <button className='productsrbuy-buy-button' type='button'>약관 동의하고 구매하기</button>
                </div>
            </div>
        </div>
        </div>
    )
}

export default ProductsRBuy