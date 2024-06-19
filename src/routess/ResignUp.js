import './ResignUp.css'


function ResignUp(){
    return (
        <div className='App'>
          <div className='box'>
            <div className='resignup_box'>
               <div className='resign_in_logo'>
                    <img className='logo' src={require('./logo.png')}/>
                </div>
                <div className='center'>
                    <div className='welcome-box'>
                        <span className='welcome'>
                        회원 탈퇴 시 아래와 같이 처리됩니다.
                        </span>
                    </div>
                    <div className='resign-info-box'>
                        <p className='resign-info-font'>
                            <p className='ali-center'>
                            회원 탈퇴일로부터 계정과 닉네임을 포함한 계정 정보(아이디/이메일/닉네임)는 <a className='resign-font'>개인정보 보호정책</a>에 따라 <span className='resign-font2'>60일간 보관(잠김)</span>되며, 60일 경과된 후에는 모든 개인 정보는 완전히 삭제되며 더 이상 복구할 수 없게 됩니다.
                            </p>
                        </p>
                        <p className='resign-lastLine'>                              
                            작성된 게시물은 삭제되지 않으며, 익명처리 후 OKKY로 소유권이 귀속됩니다. 게시물 삭제가 필요한 경우에는 <a className='resign-font'>관리자 메일</a>로 문의해 주시기 바랍니다.
                        </p>
                    </div>


                    <div className='resign-but-box'>
                      <div className='resign-but1'>
                        <button type='submit' className='resign-but-text1'><span className='.resign-up-but2-font1'>취소</span></button>
                      </div>
                      <div className='resign-but2'>
                        <button type='submit' className='resign-but-text2'><span className='.resign-up-but2-font2'>예, 탈퇴하겠습니다.</span></button>
                      </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      );
}

export default ResignUp;