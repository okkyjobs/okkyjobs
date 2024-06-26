package com.study.security20240312yeonho.sgservice;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.study.security20240312yeonho.sgDto.officeInfoReqDto;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;

@Service 
@RequiredArgsConstructor
public class officeServiceImpl implements officeService {

	private final officeInfoRepository officeInfoRepository;
	
	//dto를 ntt로
	@Override
	public boolean dataInputService(officeInfoReqDto officeInfoReqDto) throws Exception {

		officeInfo office = officeInfoReqDto.toEntity();
		
		int num = officeInfoRepository.officeInfoInput(office);
		System.out.println(num);
		return false;
	}


}
