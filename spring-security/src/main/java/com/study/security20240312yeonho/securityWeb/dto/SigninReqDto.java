package com.study.security20240312yeonho.securityWeb.dto;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.study.security20240312yeonho.securityDomain.user.User;

import lombok.Data;

@Data
public class SigninReqDto {
	
	@NotBlank
	@Pattern(regexp = "^[0-9a-zA-Z]*$",message = "영문,숫자만 입력 가능합니다.")
	private String id;	
	@NotBlank
	@Pattern(regexp = "^(?=.*[a-zA-Z])(?=.*\\d)(?=.*[-~!@#$%^&*_+=])[a-zA-Z\\d-~!@#$%^&*_+=]{8,16}$")
	private String password;
	
	public User toEntity() {
		return User.builder()
				.user_id(id)
				.user_password(new BCryptPasswordEncoder().encode(password))
				.build();
	}
}
