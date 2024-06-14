import logo from './logo.svg';
import './Career.css';
import Aside from './Aside';

function Career() {
  return (
    <main className='main-class'>
    <div className='main-box'>
    <div className='main-container'>
        <Aside></Aside>
                <div className='right-main-box'>

                  <div className='right-first-box'>
                    <h2 className='right-head-font'>이력서 관리</h2>
                    <div className='right-body-box'>
                      <div role='tablist' aria-orientation='horizontal' className='manage-career-main'>
                        <div role='tab' aria-selected='true' tabIndex='0' aria-controls='headlessui-tabs-panel-:r6:'  className='left-career-box'>
                          <div className='left-career-container'>
                            <img aria-hidden='true' className='purple-check-pic' src={require('./img/purple_check.png')}/>
                          </div>
                          <div className='left-career-container-font'>
                            <h2 className='left-career-container-h2'>나의 Talent를 관리하세요.</h2>
                            <p className='left-career-container-p'>이력서를 꼼꼼하게 작성해 보세요. 정보가 많을수록 더 많은 기업이 주목하게 될 거예요!</p>
                          </div>
                        </div>
                        <div role='tab' tabIndex='-1' aria-controls='headlessui-tabs-panel-:ri:' className='right-career-box'>
                          <div className='right-career-container'>
                            <img className='right-career-container-pic' src={require('./img/blank_check.png')} />
                          </div>
                          <div className='right-career-container-font'>
                            <h2 className='right-career-container-h2'>원하는 Position에 지원하세요.</h2>
                            <p className='right-career-container-p'>정규직/계약직 포지션 지원을 위해 이력서 파일을 등록해 주세요. 좋은 결과가 있을거예요!</p>
                          </div>
                        </div>
                      </div>
                      <div className='manage-career-under-box'>                  
                        <div >
                          <div className='career-head-box'>
                            <h2 className='career-head-font'>나의 이력서</h2>
                            <div className='career-show-box'>
                              <span className='gray-color'>등록된 이력서가 없습니다.</span>
                              <span className='gray-color'>언제든지 구직을 시작할 수 있도록 미리미리 이력서를 준비해 두세요!</span>
                              <a href='/settings/career_management/new' className='career-write-box'>이력서 작성 시작하기</a>
                            </div>
                            <div className='career-yellow-box'>
                              <div className='career-yellow-box2'>
                                <img className='career-yellow-box-pic' src={require('./img/danger.png')} />
                                <span className='career-yellow-font'>
                                  구직방법을 선택하고 구직을 시작하려면 이력서 완성도를 60% 이상으로 높여 주세요.
                                </span>
                              </div>
                            </div>

                          </div>
                        </div>
                        <div className='manage-career-under-box2'>
                          <span className='guzik-way'>구직 방법</span>
                          <div className='guzik-under-box1'>
                            <input className='guzik-input-box' type='checkbox'></input>
                            <div className='guzik-under-font-box'>
                              <div className='guzik-under-font1'>구직을 시작합니다. 인터뷰 제안을 받은 후 이력서를 전달하고 싶어요.</div>
                                <span className='guzik-under-font2'>내 이력서 기본 정보가 Talent 목록에 등록되고 기업의 인터뷰 제안을 받게 됩니다. 인터뷰 제안 수락 여부에 따라 기업의 상세 이력서 열람이 제한돼요.</span>
                            </div>
                          </div>
                          <div className='guzik-under-box2'>
                            <input className='guzik-input-box2' type='checkbox'></input>
                            <div className='guzik-under-font-box'>
                              <div className='guzik-under-font1'>지금 구직을 시작합니다.</div>
                              <div className='guzik-under-font2'>내 이력서 기본 정보가 Talent 목록에 등록되고 관심 있는 기업이 열람권을 사용해서 상세 이력서를 바로 열람할 수 있습니다.</div>
                            </div>
                          </div>
                          <div className='guzik-under-box3'>
                            <input className='guzik-input-box3' type='checkbox'></input>
                            <div className='guzik-under-font-box'>
                              <div className='guzik-under-font1'>지금은 구직 의사가 없습니다.</div>
                              <div className='guzik-under-font2'>내 이력서가 비공개 상태로 유지되고 Talent 목록에서 검색되지 않습니다.</div>
                            </div>
                          </div>
                          <div className='serve-info'>
                              <input className='serve-info-check-box' type='checkbox'></input>
                            <div className='serve-info-between'>
                              <span className='serve-info-font'>[필수] OKKY Jobs 이용을 위해 입력하거나 업로드한 개인 정보는 해당 기업회원에게 제공됩니다.</span>
                              <button className='save-all'>
                                <span className='save-all-font'>저장</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
        </div>
    </main>
  );
}

export default Career;
