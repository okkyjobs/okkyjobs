package com.study.security20240312yeonho.securityWeb.dto;

import javax.validation.constraints.Email;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.study.security20240312yeonho.securityDomain.user.User;

import lombok.Data;

@Data
public class SignupReqDto {
	
	@NotBlank
	@Pattern(regexp = "^[0-9a-zA-Z]*$",message = "영문,숫자만 입력 가능합니다.")
	private String id;	
	@NotBlank
	@Pattern(regexp = "^(?=.*[a-zA-Z])(?=.*\\d)(?=.*[-~!@#$%^&*_+=])[a-zA-Z\\d-~!@#$%^&*_+=]{8,16}$")
	private String password;
	@NotBlank
	@Email
	private String email;
	@NotBlank
	@Pattern(regexp = "^[가-힇]*$",message = "한글만 입력 가능합니다.")
	private String name;
	@NotBlank
	@Pattern(regexp = "^[가-힣0-9a-zA-Z]*$",message = "한글,영문,숫자만 입력 가능합니다.")
	private String nickname;
	@NotBlank
	@Pattern(regexp = "^[가-힣0-9a-zA-Z]*$",message = "한글,영문,숫자만 입력 가능합니다.")
	private String wishtag;
	@NotNull
	@Min(0)
	@Max(9)
	private Integer emailAgree;
	@NotNull
	@Min(0)
	@Max(9)
	private Integer type;
	@NotNull
	@Min(0)
	@Max(9)
	private Integer serviceAgree;
	@NotNull
	@Min(0)
	@Max(9)
	private Integer personalInfoAgree;
	@Pattern(regexp = "^[a-zA-Z]*$",message = "영문만 입력 가능합니다.")
	private String provider;	

//	@NotBlank
//	@Pattern(regexp = "^[a-zA-Z]{1}[a-zA-Z0-9_]{4,12}$")
//	private String username;

	
//	@AssertTrue(message = "아이디 중복확인이 되지 않았습니다.") // 이 값이 트루일때만 작용
//	private boolean checkUsernameFlag;

	public User toEntity() {
		return User.builder()
				.user_id(id)
				.user_password(new BCryptPasswordEncoder().encode(password))
				.user_email(email)
				.user_name(name)
				.user_nickname(nickname)
				.user_wishtag(wishtag)
				.user_email_agree(emailAgree)
				.user_type(type)
				.service_agree(serviceAgree)
				.personal_info_agree(personalInfoAgree)
				.user_provider(provider)
				.role("ROLE_USER")
				.build();
	}
}







