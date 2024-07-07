package com.study.security20240312yeonho.securityWeb.dto;

import javax.validation.constraints.Email;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

import com.study.security20240312yeonho.securityDomain.user.User;

import lombok.Data;

@Data
public class UpdateProfileReqDto {

	
	private Integer usercode;
	@NotBlank
	@Pattern(regexp = "^[0-9a-zA-Z]*$",message = "영문,숫자만 입력 가능합니다.")
	private String id;	
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
	
	private Integer jobDetail1Code;
	private Integer jobDetail2Code;
	
	private String userLink;
	private String oneLine;
	private String profileImg;

//	@NotBlank
//	@Pattern(regexp = "^[a-zA-Z]{1}[a-zA-Z0-9_]{4,12}$")
//	private String username;

	
//	@AssertTrue(message = "아이디 중복확인이 되지 않았습니다.") // 이 값이 트루일때만 작용
//	private boolean checkUsernameFlag;

	public User toEntity() {
		return User.builder()
				.user_code(usercode)
				.user_id(id)
				.user_email(email)
				.user_name(name)
				.user_nickname(nickname)
				.user_wishtag(wishtag)
				.job_detail1_code(jobDetail1Code)
				.job_detail2_code(jobDetail2Code)
				.user_link(userLink)
				.one_line(oneLine)
				.profile_img(profileImg)
				.role("ROLE_USER")
				.build();
	}
}
