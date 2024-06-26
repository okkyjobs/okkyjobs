package com.Okk2.Okk2.service;

import java.util.List;

import com.Okk2.Okk2.Dto.officeInfoReqDto;

public interface officeService {
//	public PracticeRespDto testService(int num) throws Exception;    //추상메소드 : 실행문을 적지 않아서
	
	public boolean dataInputService(officeInfoReqDto officeInfoReqDto) throws Exception;
	
//	public List<PracticeRespDto> pageLoadService(int page) throws Exception;

}
