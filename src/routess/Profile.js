
import './Profile.css';
import { useEffect, useState } from 'react';
import Aside from './Aside.js';
import React from 'react';
import { Outlet } from 'react-router-dom';


function Profile() {

  const user = JSON.parse(localStorage.getItem('user'));
  console.log(user);

  const [index, setIndex] = React.useState('-1');
  const [id, setId] = useState(user.id);
  const [password, setPassword] = useState(user.password);
  const [email, setEmail] = useState(user.email);
  const [name, setName] = React.useState(user.name);
  const [nickname, setNickname] = React.useState(user.nickname);
  const [wishtag, setWishtag] = React.useState(user.wishtag);
  const [emailAgree, setEmailAgree] = useState(user.user_email_agree);
  const [type, setType] = useState(user.user_type);
  const [serviceAgree, setServiceAgree] = useState(user.service_agree);
  const [personalInfoAgree, setPersonalInfoAgree] = useState(user.personal_info_agree);
  const [provider, setProvider] = useState(user.user_provider);
  const [profileImage, setProfileImage] = useState('');
  const [checkUsernameFlag, setCheckUsernameFlag] = useState(true);
  
  const onSelect = (event) => {
  setIndex(event.target.value);
  }

  const onChangeAll = () => {
    localStorage.setItem('user', JSON.stringify({ id: id, password : password, email: email, name : name, nickname : nickname, wishtag : wishtag, emailAgree : emailAgree, type : type, serviceAgree :  serviceAgree, personalInfoAgree : personalInfoAgree, provider : provider, profileImage : profileImage, checkUsernameFlag : checkUsernameFlag}));
  }
  
  const onChange = (event) => {
    console.log(event.target.value) //우리의 입력으로 change이벤트가 일어나 변경된 value값
    setName(event.target.value)
  }

  const onChangeNickname = (event) => {
    console.log(event.target.value) //우리의 입력으로 change이벤트가 일어나 변경된 value값
    setNickname(event.target.value)
  }

  const onChangeWishtag = (event) => {
    console.log(event.target.value) //우리의 입력으로 change이벤트가 일어나 변경된 value값
    setWishtag(event.target.value)
  }

  return (
    <main className='main-class'>
    <div className='main-box'>
    <div className='main-container'>
        <Aside></Aside>
                <form className='member-information'>
                  <div className='right-main-box1'>
                    <div className='main-left-box'>
                      <div className='profile-main-box'>
                        <div className='main-subbox'>
                          <div className='name-box'>
                            <h2 className='member-information_font'>회원정보</h2>
                            <label className='name-font'>이름</label>
                            <input value={name}  onChange={onChange} type='text' className='name-input'></input>
                          </div>
                          <div className='nickname-box'>
                            <label className='nickname-font'>닉네임</label>
                            <input value={nickname}  onChange={onChangeNickname} type='text' className='nickname-input'></input>
                          </div>
                          <label className='work-font'>대표직무</label>
                          <div className='work-box'>
                            <select value={index} onChange={onSelect} className='work-input'>
                              <option value='-1'>직군을 선택해주세요.</option>
                              <option value='1'>개발</option>
                              <option value='2'>기획</option>
                              <option value='3'>디자인</option>
                              <option value='4'>마케팅</option>
                              <option value='5'>기타</option>
                            </select>
                            <div className='work-box3'>
                            {index === '-1' ? <Z /> : null}
                            {index === '1' ? <A /> : null}
                            {index === '2' ? <B /> : null}
                            {index === '3' ? <C /> : null}
                            {index === '4' ? <D /> : null}
                            {index === '5' ? <E /> : null}
                            </div>
                          </div>
                          <div className='tag-box'>
                            <label className='tag-font'>관심있는 기술 태그 입력</label>
                            <p className='tag-font2'>사용중인 기술이나 관심있는 기술 태그를 선택해주세요.</p>
                            <div className='tag-input'>
                              <div className='tag-container'>
                                <span className='tag-container2'></span>
                                <span aria-live='polite' aria-atomic='false' aria-relevant='additions text' className='tag-container2'></span>
                                <div className='tag-control'>
                                  <div className='tag-control2'>
                                    <div className='select-sTag'>스킬 태그를 선택해주세요.</div>
                                    <div className='tag-pLeft' data-value>
                                      <input  onChange={onChangeWishtag} autoComplete='off' autoCapitalize='none' autoCorrect='off' spellCheck='false' tabIndex='0' type='text' aria-autocomplete='list' aria-expanded='false' aria-haspopup='true' role='combobox' className='tag-input-box'></input>
                                    </div>
                                  </div>
                                <div className='arrow'>
                              <span className='arrow-span'></span>
                              <div className='arrow-div' aria-hidden='true'>
                                <svg height='20' width='20' viewBox='0 0 20 20' aria-hidden='true' focusable='false' className='svg-class'></svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                  </div>
                  <div className='introduce-box'>
                    <div className='introduce-container'>
                      <label className='introduce-font'>한 줄 소개</label>
                      <div>
                        <span className='introduce-textCount'>0/150</span>
                      </div>
                    </div>
                    <textarea autoComplete='off' placeholder='나를 소개해주세요.' rows='4' maxLength='150' className='introduce-textarea'></textarea>
                  </div>
                  <div className='link-box'>
                    <label className='link-font'>링크</label>
                    <div className='link-container'>
                      <div className='link-container1'>
                        <div className='link-img-box'>
                          <img src={require('./img/linkImg.png')} alt='link' className='link-class'></img>
                        </div>
                        <input type='text' placeholder='Link to social profile' className='link-input-box'></input>
                      </div>
                      <div className='link-container1'>
                        <div className='link-img-box'>
                          <img src={require('./img/linkImg.png')} alt='link' className='link-class'></img>
                        </div>
                        <input type='text' placeholder='Link to social profile' className='link-input-box'></input>
                        
                      </div>
                      <div className='link-container1'>
                        <div className='link-img-box'>
                          <img src={require('./img/linkImg.png')} alt='link' className='link-class'></img>
                        </div>
                        <input type='text' placeholder='Link to social profile' className='link-input-box'></input>
                        
                      </div>
                    </div>
                  </div>

                        </div>
                        <div>
                          <div className='profile-box'>
                          <p className='profile-photo-font'></p>
                          <div className='profile-photo-box'>
                            <div className='profile-photo-box-hidden'>
                              <div className='pbox-1'>
                                <div className='pbox-2' aria-hidden='true'>
                                  <img className='profile-photo' src={require('./img/OKKY.png')}></img>
                                </div>
                              </div>
                            </div>
                          </div>
                          </div>
                        </div>
                      </div>

                    </div>

                  <div className='under-box'>
                  <div className='under-text-box'>
                    <div>
                      <div className='under-text1-box'>
                        <h2 className='under-text1'>광고 정보 수신 동의</h2>
                        <button role='switch' type='button' tabIndex='0' aria-checked='true' className='under-but1-box'>
                          <span aria-hidden='true' className='under-but1-span'></span>
                        </button>
                      </div>
                      <p className='under-text1-font'>
                        <div>
                          OKKY에서 발행하는 뉴스레터 및 이벤트/프로모션 혜택 정보를 이메일로 보내드립니다.
                        </div>
                        <div>
                          서비스 알림과 정책은 광고 정보 수신 동의와 관계없이 발송됩니다.
                        </div>
                        </p>
                    </div>
                  </div>
                  <div className='under-text-box2'>
                    <div>
                      <div className='under-text1-box'>
                        <h2 className='under-text1'>푸시 알림 동의</h2>
                        <button role='switch' type='button' tabIndex='0' aria-checked='true' className='under-but1-box'>
                          <span aria-hidden='true' className='under-but1-span'></span>
                        </button>
                      </div>
                      <p className='under-text1-font'>
                        <div>
                        OKKY 콘텐츠, 커뮤니티 리액션, 유저 활동 내역 등을 푸시 알림으로 보내드립니다.

                        </div>
                        <div>
                        알림이 오지 않을 경우 [휴대폰 &gt; 설정 &gt; 알림 &gt; OKKY] 에서 기기 설정을 확인해 주세요.
                        </div>
                        </p>
                    </div>
                  </div>
                  <div className='save-box'>
                    <button onSubmit={onChangeAll} className='save-but'>저장</button>
                  </div>


                  </div>
                  </div>

                  </form>
                  </div>
                  </div>

                </main>
  );
}

function Z(){
  return(
    <div className='work-box3'>
    <select className='work-input' >
      <option value='-1'>직무을 선택해주세요.</option>
    </select>
    <Outlet></Outlet>
  </div>
  )
}

function A(){
  return(
    <div className='work-box3'>
    <select className='work-input' >
      <option value='-1'>직무을 선택해주세요.</option>
        <option value='1'>백엔드개발</option>
        <option value='2'>프론트엔드개발</option>
        <option value='3'>모바일개발</option>
        <option value='4'>풀스택개발</option>
        <option value='5'>임베디드개발</option>
        <option value='6'>PC어플리케이션개발</option>
        <option value='7'>DBA</option>
        <option value='8'>TA</option>
        <option value='9'>AA</option>
        <option value='10'>기타개발</option>
        <option value='11'>퍼블리셔</option>
        <option value='12'>QA</option>
    </select>
    <Outlet></Outlet>
  </div>
  )
}

function B(){
  return(
    <div className='work-box3'>
    <select className='work-input' >
      <option value='-1'>직무을 선택해주세요.</option>
        <option value='13'>전략기획</option>
        <option value='14'>서비스기획</option>
        <option value='15'>UI/UX기획</option>
        <option value='16'>사업기획</option>
        <option value='17'>PM</option>
    </select>
    <Outlet></Outlet>
  </div>
  )
}

function C(){
  return(
    <div className='work-box3'>
    <select className='work-input' >
      <option value='-1'>직무을 선택해주세요.</option>
        <option value='18'>웹디자인</option>
        <option value='19'>UI디자인</option>
        <option value='20'>디자인</option>
        <option value='21'>모바일디자인</option>
        <option value='22'>서비스디자인</option>
        <option value='23'>UX 디자인</option>
    </select>
    <Outlet></Outlet>
  </div>
  )
}

function D(){
  return(
    <div className='work-box3'>
    <select className='work-input' >
      <option value='-1'>직무을 선택해주세요.</option>
        <option value='24'>영업</option>
        <option value='25'>마케팅</option>
        <option value='26'>Growth Hacker</option>
        <option value='27'>Digital Marketer</option>
        <option value='28'>전략수석</option>
        <option value='29'>MD</option>
    </select>
    <Outlet></Outlet>
  </div>
  )
}

function E(){
  return(
    <div className='work-box3'>
    <select className='work-input' >
      <option value='-1'>직무을 선택해주세요.</option>
        <option value='30'>기타</option>
    </select>
    <Outlet></Outlet>
  </div>
  )
}


export default Profile;


