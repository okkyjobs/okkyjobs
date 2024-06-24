package com.study.security20240312yeonho.securityService.auth;

import com.study.security20240312yeonho.securityDomain.user.User;
import com.study.security20240312yeonho.securityWeb.dto.SigninReqDto;
import com.study.security20240312yeonho.securityWeb.dto.UsernameCheckReqDto;

public interface AuthService {

    User getUserByUsername(UsernameCheckReqDto usernameCheckReqDto) throws Exception;
    User getUserByUsername(SigninReqDto signinReqDto) throws Exception;
	public boolean checkUsername(UsernameCheckReqDto usernameCheckReqDto) throws Exception;
	public boolean checkUsername(SigninReqDto signinReqDto) throws Exception;
	public boolean signup() throws Exception;
	public boolean signin() throws Exception;
}
