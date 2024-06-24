package com.study.security20240312yeonho.khanchoService;

import org.springframework.stereotype.Service;

import com.study.security20240312yeonho.khanchoDomain.OkkyPractice;
import com.study.security20240312yeonho.khanchoDomain.OkkyRepositiory;
import com.study.security20240312yeonho.khanchoWeb.dto.OkkyReqDto;

import lombok.RequiredArgsConstructor;


@Service
@RequiredArgsConstructor
public class OkkyServiceImpl implements OkkyService{

	private final OkkyRepositiory okkyRepositiory;
	
	@Override
	public boolean projectintroduce(OkkyReqDto okkyReqDto) throws Exception {
		OkkyPractice okkyPractice = okkyReqDto.toEntity();
		int project = okkyRepositiory.projectinput(okkyPractice);
		System.out.println(project);
		return false;
		
	}

}
