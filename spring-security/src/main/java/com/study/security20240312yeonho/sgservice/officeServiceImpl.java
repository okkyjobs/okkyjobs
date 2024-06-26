package com.study.security20240312yeonho.sgservice;



import org.springframework.stereotype.Service;

import com.study.security20240312yeonho.sgDto.officeInfoReqDto;
import com.study.security20240312yeonho.sgdomain.officeInfo.officeInfo;


import lombok.RequiredArgsConstructor;

@Service 
@RequiredArgsConstructor
public class officeServiceImpl implements officeService {

	private final com.study.security20240312yeonho.sgdomain.officeInfo.officeInfoRepository officeInfoRepository;
	
	//dto를 ntt로
	@Override
	public boolean dataInputService(officeInfoReqDto officeInfoReqDto) throws Exception {

		officeInfo office = officeInfoReqDto.toEntity();
		
		int num = officeInfoRepository.officeInfoInput(office);
		System.out.println(num);
		return false;
	}


}
