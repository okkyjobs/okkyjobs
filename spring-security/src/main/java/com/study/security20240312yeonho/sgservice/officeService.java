package com.study.security20240312yeonho.sgservice;



import com.study.security20240312yeonho.sgDto.officeInfoReqDto;





public interface officeService {
//	public PracticeRespDto testService(int num) throws Exception;    //추상메소드 : 실행문을 적지 않아서
	
	public boolean dataInputService(officeInfoReqDto officeInfoReqDto) throws Exception;
	
//	public List<PracticeRespDto> pageLoadService(int page) throws Exception;

}
