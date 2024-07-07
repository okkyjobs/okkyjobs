package com.study.security20240312yeonho.securityDomain.user;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class User {

	private int user_code;
	private String user_id;

	private String user_email;
	private String user_name;
	
	private String user_provider;
//	@JsonIgnore
	private String user_password;
	private String user_nickname;
	private String user_wishtag;

	private String role;
	
	private int user_email_agree; // 나중에 int로 변환
	private int user_type;
	
	private int service_agree;
	private int personal_info_agree;
	
	private int authority;
	
	private Integer job_detail1_code;
	private Integer job_detail2_code;
	private String user_link;
	private String one_line;
	private String profile_img;
	
	
//	private LocalDateTime create_date;
//	private LocalDateTime update_date;

	public List<String> getUserRoles(){
		if(role == null || role.isBlank()) {
			return new ArrayList<String>();
		}
		return Arrays.asList(role.replaceAll(" ","").split(","));
	}
	
}



