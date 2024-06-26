package com.study.security20240312yeonho.sgservice.auth;

import org.springframework.stereotype.Service;

import com.study.security20240312yeonho.securityDomain.user.UserRepository;
import com.study.security20240312yeonho.securityWeb.dto.UsernameCheckReqDto;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService{

	private final UserRepository userRepository = null;
	
	@Override
	public boolean checkUsername(UsernameCheckReqDto usernameCheckReqDto) throws Exception {
		return userRepository.findUserByUsername(usernameCheckReqDto.getUsername()) == null;
	}

	@Override
	public boolean signup() throws Exception {
		return false;
	}

}
