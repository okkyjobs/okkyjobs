import React from 'react'
import './ProductsR.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import GeneralModal from '../modals/GeneralModal';


function ProductsR() {
    return(
        <div className='productsr'>
            <div className='productsr-top'>
                <div>
                    <p className='productsr-pricing'>Pricing</p>
                    <h2 className='productsr-best-font'>최고의 개발자 발굴을 위한</h2>
                    <h1>이력서 열람 상품</h1>
                </div>
                <div>
                    <p className='productsr-info1'>열람권을 구매하시면 국내 최대·최고의 개발자 채용 플랫폼<br/>OKKY Jobs에서 최고의 개발자들을 만나 볼 수 있습니다!</p>
                    <p className='productsr-info2'>여러분의 팀에 합류할 최고의 개발자를 찾아보세요.</p>
                </div>
            </div>

            <div className='productsr-middle'>
                <div className='productsr-middle-box1'>
                    <div className='productsr-middle-box1-n'>1회 열람권</div>
                    <div className='productsr-price-and-won'>
                        <div className='productsr-price'>13,800</div>
                        <div className='productsr-price-won'>원</div>
                    </div>
                    <div className='cost-price-and-discount'>
                        <div className='cost-price'>20,000원</div>
                        <div className='discount'>31% 할인</div>
                    </div>
                    <div className='productsr-paychceck'>
                        <div className='r-check1'>
                            <img className='r-paycheck' src={require('./img/paycheck.png')}/>
                            <span className='r-pay-info1'>1회 열람권(31% 할인적용)</span>
                        </div>
                        <div className='r-check2'>
                            <img className='r-paycheck' src={require('./img/paycheck.png')}/>
                            <span className='r-pay-info2'>계약,정규직 이력서 1회 열람</span>
                        </div>
                        <div className='r-check3'>
                            <img className='r-paycheck' src={require('./img/paycheck.png')}/>
                            <span className='r-pay-info3'>이력서 열람 150일 가능</span>
                        </div>

                    </div>
                    <div>
                        <a href='./1/buyCount'>
                            <button type='button' className='r-pay-button1'>구매하기</button>
                        </a>
                    </div>
                </div>
                <div className='productsr-middle-box2'>
                    <div className='productsr-middle-box1-n2'>10회 열람권</div>
                    <div className='productsr-price-and-won'>
                        <div className='productsr-price'>126,000</div>
                        <div className='productsr-price-won'>원</div>
                    </div>
                    <div className='cost-price-and-discount'>
                        <div className='cost-price'>200,000원</div>
                        <div className='discount'>37% 할인</div>
                    </div>
                    <div className='productsr-paychceck'>
                        <div className='r-check1'>
                            <img className='r-paycheck' src={require('./img/paycheck2.png')}/>
                            <span className='r-pay-info1'>10회 열람권(37% 할인적용)</span>
                        </div>
                        <div className='r-check2'>
                            <img className='r-paycheck' src={require('./img/paycheck2.png')}/>
                            <span className='r-pay-info2'>계약,정규직 이력서 10회 열람</span>
                        </div>
                        <div className='r-check3'>
                            <img className='r-paycheck' src={require('./img/paycheck2.png')}/>
                            <span className='r-pay-info3'>이력서 열람 150일 가능</span>
                        </div>

                    </div>
                    <div>
                        <a href='./1/buyCount'>
                            <button type='button' className='r-pay-button2'>구매하기</button>
                        </a>
                    </div>
                </div>
                <div className='productsr-middle-box1'>
                    <div className='productsr-middle-box1-n'>20회 열람권</div>
                    <div className='productsr-price-and-won'>
                        <div className='productsr-price'>240,000</div>
                        <div className='productsr-price-won'>원</div>
                    </div>
                    <div className='cost-price-and-discount'>
                        <div className='cost-price'>400,000원</div>
                        <div className='discount'>40% 할인</div>
                    </div>
                    <div className='productsr-paychceck'>
                        <div className='r-check1'>
                            <img className='r-paycheck' src={require('./img/paycheck.png')}/>
                            <span className='r-pay-info1'>20회 열람권(40% 할인적용)</span>
                        </div>
                        <div className='r-check2'>
                            <img className='r-paycheck' src={require('./img/paycheck.png')}/>
                            <span className='r-pay-info2'>계약,정규직 이력서 20회 열람</span>
                        </div>
                        <div className='r-check3'>
                            <img className='r-paycheck' src={require('./img/paycheck.png')}/>
                            <span className='r-pay-info3'>이력서 열람 150일 가능</span>
                        </div>

                    </div>
                    <div>
                        <a href='./1/buyCount'>
                            <button type='button' className='r-pay-button1'>구매하기</button>
                        </a>
                    </div>
                </div>
                <div className='productsr-middle-box1'>
                    <div className='productsr-middle-box1-n'>50회 열람권</div>
                    <div className='productsr-price-and-won'>
                        <div className='productsr-price'>550,000</div>
                        <div className='productsr-price-won'>원</div>
                    </div>
                    <div className='cost-price-and-discount'>
                        <div className='cost-price'>1,000,000원</div>
                        <div className='discount'>45% 할인</div>
                    </div>
                    <div className='productsr-paychceck'>
                        <div className='r-check1'>
                            <img className='r-paycheck' src={require('./img/paycheck.png')}/>
                            <span className='r-pay-info1'>50회 열람권(45% 할인적용)</span>
                        </div>
                        <div className='r-check2'>
                            <img className='r-paycheck' src={require('./img/paycheck.png')}/>
                            <span className='r-pay-info2'>계약,정규직 이력서 50회 열람</span>
                        </div>
                        <div className='r-check3'>
                            <img className='r-paycheck' src={require('./img/paycheck.png')}/>
                            <span className='r-pay-info3'>이력서 열람 150일 가능</span>
                        </div>

                    </div>
                    <div>
                        <a href='./1/buyCount'>
                            <button type='button' className='r-pay-button1'>구매하기</button>
                        </a>
                    </div>
                </div>

            </div>

            <div className='productsr-bottom'>
                <div className='productsr-bottom-info'>
                    <span>구매한 열람권은 구매일로부터 90일간 이용할 수 있습니다.</span>
                </div>

            </div>

        </div>

    )
}

export default ProductsR