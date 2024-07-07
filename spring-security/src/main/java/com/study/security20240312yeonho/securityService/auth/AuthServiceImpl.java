package com.study.security20240312yeonho.securityService.auth;

import org.springframework.stereotype.Service;

import com.study.security20240312yeonho.securityDomain.user.User;
import com.study.security20240312yeonho.securityDomain.user.UserRepository;
import com.study.security20240312yeonho.securityWeb.dto.SigninReqDto;
import com.study.security20240312yeonho.securityWeb.dto.UsernameCheckReqDto;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService{

	private final UserRepository userRepository;
	
	@Override
	public boolean checkUsername(UsernameCheckReqDto usernameCheckReqDto) throws Exception {
		return userRepository.findUserByUsername(usernameCheckReqDto.getUsername()) == null;
	}

	@Override
	public boolean signup() throws Exception {
		return false;
	}
	

	@Override
	public User getUserByUsername(UsernameCheckReqDto usernameCheckReqDto) throws Exception {
        return userRepository.findUserByUsername(usernameCheckReqDto.getUsername());
	}

	@Override
	public boolean signin() throws Exception {
		return false;
	}

	@Override
	public User getUserByUsername(SigninReqDto signinReqDto) throws Exception {
        return userRepository.findUserByUsername(signinReqDto.getId());
	}

	@Override
	public boolean checkUsername(SigninReqDto signinReqDto) throws Exception {
		return userRepository.findUserByUsername(signinReqDto.getPassword()) == null;
	}

	@Override
	public boolean updateProfileByUserCode() throws Exception {
		return false;
	}


}
