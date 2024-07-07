import './Profile.css';
import { useEffect, useRef, useState } from 'react';
import Aside from './Aside.js';
import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Avatar } from 'antd';
import { v4 as uuidv4 } from 'uuid';


function Profile() {

  
  const baseUrl = "http://localhost:3000";

  const user = JSON.parse(localStorage.getItem('user'));

  // 로그인 시 저장한 "user" localstorage에 정보를 가져와서 불러오기
  const [usercode, setUserCode] = useState(user.usercode);
  const [id, setId] = useState(user.id);
  const [password, setPassword] = useState(user.password);
  const [email, setEmail] = useState(user.email);
  const [name, setName] = React.useState(user.name);
  const [nickname, setNickname] = React.useState(user.nickname);
  const [wishtag, setWishtag] = React.useState(user.wishtag);
  const [emailAgree, setEmailAgree] = useState(user.user_emailAgree);
  const [type, setType] = useState(user.type);
  const [serviceAgree, setServiceAgree] = useState(user.serviceAgree);
  const [personalInfoAgree, setPersonalInfoAgree] = useState(user.personalInfoAgree);
  const [provider, setProvider] = useState(user.provider);
  const [jobDetail1Code, setjobDetail1] = useState(user.jobDetail1Code);
  const [jobDetail2Code, setjobDetail2] = useState(user.jobDetail2Code);
  const [oneLine, setOneLine] = useState(user.oneLine);
  const [userLink, setUserLink] = useState(user.userLink);
  const [profileImage, setProfileImage] = useState(user.profileImage);
  const [profileImg, setProfileImg] = useState(user.profileImage);
  const [checkUsernameFlag, setCheckUsernameFlag] = useState(true);
  const [saveBut, setSaveBut] = useState(false);



  const onSelect = (event) => {
    console.log(event.target.value)
    setjobDetail1(event.target.value);
  }

  const onSelect2 = (event) => {
    console.log(event.target.value)
    setjobDetail2(event.target.value);
  }

  const onChangeAll = (event) => {
    event.preventDefault();
    const userInfo = JSON.parse(localStorage.getItem('user'));
    userInfo.email = email;
    userInfo.name = name;
    userInfo.nickname = nickname;
    userInfo.wishtag = wishtag;
    userInfo.jobDetail1Code = jobDetail1Code;
    userInfo.jobDetail2Code = jobDetail2Code;
    userInfo.userLink = userLink;
    userInfo.oneLine = oneLine;
    userInfo.profileImage = profileImage;

    localStorage.setItem('user', JSON.stringify(userInfo));
    
    axios.put(`${baseUrl}/api/v1/auth/modify?usercode=${usercode}&id=${id}&email=${email}&name=${name}&nickname=${nickname}&wishtag=${wishtag}&jobDetail1Code=${jobDetail1Code}&jobDetail2Code=${jobDetail2Code}&userLink=${userLink}&oneLine=${oneLine}&profileImg=${profileImage}`
      , {usercode, id, email, name, nickname, wishtag, jobDetail1Code, jobDetail2Code, userLink, oneLine, profileImg: profileImage})
      .then((response) => {
        console.log(response.data)
        console.log(Image)
        console.log("Profile edited successfully.");
        navigate("/");
      })
      .catch((error) => {
        console.log("Error while editing profile:", error);
      });
  } 




  
  const onChangeName = (event) => {
    console.log(event.target.value) //우리의 입력으로 change이벤트가 일어나 변경된 value값임과 동시에 db에도 정보 변경이 발생해야함
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

  const onChangeOneLine = (event) => {
    console.log(event.target.value) //우리의 입력으로 change이벤트가 일어나 변경된 value값
    setOneLine(event.target.value)
  }

  const onChangeUserLink = (event) => {
    console.log(event.target.value) //우리의 입력으로 change이벤트가 일어나 변경된 value값
    setUserLink(event.target.value)
  }

  const navigate = useNavigate();


  useEffect(() => {
    //만약 db 값과 페이지 값들이 다르면 save but on
    const user = JSON.parse(localStorage.getItem('user'));

    axios.get(`${baseUrl}/api/v1/auth/signup/validation/username?username=${user.id}`)
      .then(response => {
        console.log(response.data.user.profile_img)
        if(
               response.data.user.user_name != name
               || response.data.user.user_nickname != nickname
               || response.data.user.user_wishtag != wishtag
               || response.data.user.one_line != oneLine
               || response.data.user.user_link != userLink
               || response.data.user.job_detail1_code != jobDetail1Code
               || response.data.user.job_detail2_code != jobDetail2Code
               || response.data.user.profile_img != profileImage
          ){
            setSaveBut(true);
            console.log(saveBut)
        }else{
          setSaveBut(false);
        }
      })
      .catch(error => {
      });
  },[onChangeName, onChangeNickname, onChangeWishtag, onChangeOneLine, onChangeUserLink, onSelect, onSelect2])

  const fileInput = useRef(null)
  const [file, setFile] = useState("")
 
  const onChange = (e) => {
      if(e.target.files[0]){
          setFile(e.target.files[0])
        }else{ //업로드 취소할 시
          setProfileImage(profileImage)
          setSaveBut(false);
          console.log(saveBut)
          return
      }
//화면에 프로필 사진 표시
      const reader = new FileReader();
      reader.onload = () => {
          if(reader.readyState === 2){
              setProfileImage(reader.result)
          }
      }
      reader.readAsDataURL(e.target.files[0])
      console.log(e.target.files[0].name)
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
                            <input value={name} id="minutes" onChange={onChangeName} type='text' className='name-input'></input>
                          </div>
                          <div className='nickname-box'>
                            <label className='nickname-font'>닉네임</label>
                            <input value={nickname} id="minutes" onChange={onChangeNickname} type='text' className='nickname-input'></input>
                          </div>
                          <label className='work-font'>대표직무</label>
                          <div className='work-box'>
                            <select value={jobDetail1Code} onChange={onSelect} className='work-input'>
                              <option value='-1'>직군을 선택해주세요.</option>
                              <option value='1'>개발</option>
                              <option value='2'>기획</option>
                              <option value='3'>디자인</option>
                              <option value='4'>마케팅</option>
                              <option value='5'>기타</option>
                            </select>
                            <div className='work-box3'>
                            {jobDetail1Code === '-1' ? 
                              <select value={jobDetail2Code} onChange={onSelect2} className='work-input' >
                                <option value='-1'>직무을 선택해주세요.</option>
                              </select> : null}
                            {jobDetail1Code === '1' ?     
                              <select value={jobDetail2Code} onChange={onSelect2}  className='work-input' >
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
                              </select> : null}
                            {jobDetail1Code === '2' ?     
                              <select value={jobDetail2Code} onChange={onSelect2} className='work-input' >
                                <option value='-1'>직무을 선택해주세요.</option>
                                  <option value='13'>전략기획</option>
                                  <option value='14'>서비스기획</option>
                                  <option value='15'>UI/UX기획</option>
                                  <option value='16'>사업기획</option>
                                  <option value='17'>PM</option>
                              </select> : null}
                            {jobDetail1Code === '3' ? 
                              <select value={jobDetail2Code} onChange={onSelect2} className='work-input' >
                                <option value='-1'>직무을 선택해주세요.</option>
                                  <option value='18'>웹디자인</option>
                                  <option value='19'>UI디자인</option>
                                  <option value='20'>디자인</option>
                                  <option value='21'>모바일디자인</option>
                                  <option value='22'>서비스디자인</option>
                                  <option value='23'>UX 디자인</option>
                              </select> : null}
                            {jobDetail1Code === '4' ? 
                              <select value={jobDetail2Code} onChange={onSelect2} className='work-input' >
                                <option value='-1'>직무을 선택해주세요.</option>
                                  <option value='24'>영업</option>
                                  <option value='25'>마케팅</option>
                                  <option value='26'>Growth Hacker</option>
                                  <option value='27'>Digital Marketer</option>
                                  <option value='28'>전략수석</option>
                                  <option value='29'>MD</option>
                              </select> : null}
                            {jobDetail1Code === '5' ? 
                              <select value={jobDetail2Code} onChange={onSelect2} className='work-input' >
                                <option value='-1'>직무을 선택해주세요.</option>
                                  <option value='30'>기타</option>
                              </select> : null}
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
                                    {/* <div className='select-sTag'>스킬 태그를 선택해주세요.</div> */}
                                    <div className='tag-pLeft' data-value>
                                      <input  value={wishtag} placeholder='스킬 태그를 작성해주세요.' onChange={onChangeWishtag} autoComplete='off' autoCapitalize='none' autoCorrect='off' spellCheck='false' tabIndex='0' type='text' aria-autocomplete='list' aria-expanded='false' aria-haspopup='true' role='combobox' className='tag-input-box'></input>
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
                    <textarea onChange={onChangeOneLine} value={oneLine} autoComplete='off' placeholder='나를 소개해주세요.' rows='4' maxLength='150' className='introduce-textarea'></textarea>
                  </div>
                  <div className='link-box'>
                    <label className='link-font'>링크</label>
                    <div className='link-container'>
                      <div className='link-container1'>
                        <div className='link-img-box'>
                          <img src={require('./img/linkImg.png')} alt='link' className='link-class'></img>
                        </div>
                        <input onChange={onChangeUserLink} value={userLink} type='text' placeholder='Link to social profile' className='link-input-box'></input>
                      </div>
                      {/* <div className='link-container1'>
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
                        
                      </div> */}

                    </div>
                  </div>

                        </div>
                        <div>
                          <div className='profile-box'>
                          <p className='profile-photo-font'></p>
                          <div className='profile-photo-box'>
                            <div className='profile-photo-box-hidden'>
                              <div className='pbox-1'>
                                <div>
                                  {/* <img className='profile-photo' src={require('./img/OKKY.png')}></img> */}
                                  <Avatar
                                    src={profileImage}
                                    className='profile-photo'
                                    size={200} 
                                    onClick={()=>{fileInput.current.click()}}/>
                                  <input 
                                            type='file' 
                                                style={{display:'none'}}
                                                  accept='image/jpg,image/png,image/jpeg' 
                                                  name='profile_img'
                                                  onChange={onChange}
                                                  ref={fileInput}/>
                                </div>
                              </div>
                            </div>
                          </div>
                          </div>
                        </div>
                      </div>

                    </div>

                  <div className='under-box'>
                  {/* <div className='under-text-box'>
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
                  </div> */}
                  <div className='save-box'>
                    {saveBut === false ? <div className='save-but'>저장</div> : <button onClick={onChangeAll} className='save-but2'>저장</button>}
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

  const user = JSON.parse(localStorage.getItem('user'));

  const [jobDetail2Code, setjobDetail2] = useState(user.jobDetail2Code);

  const onSelect2 = (event) => {
    console.log(event.target.value)
    setjobDetail2(event.target.value);
    const userInfo = JSON.parse(localStorage.getItem('user'));
    console.log(userInfo);
    userInfo.jobDetail2Code = event.target.value;
    localStorage.setItem('user', JSON.stringify(userInfo))
  }

  return(
    <div className='work-box3'>
    <select onChange={onSelect2} value={jobDetail2Code} className='work-input' >
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


