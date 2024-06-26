package com.study.security20240312yeonho.sgDto;


import java.time.LocalDateTime;

import com.Okk2.Okk2.domain.officeInfo.officeInfo;

import lombok.Builder;
import lombok.Data;

@Data
public class officeInfoReqDto {
	
    private int user_code;
    private String office_img;
    private String office_name;
    private int office_authcode;
    private int boss_phone;
    private String boss_email;
    private String registration;
    private String manager_name;
    private int manager_phone;
    private String manager_email;
    private int empl_num;
    private String office_url;
    private String office_text;
    private int open_count;
    private int input_count;
    private LocalDateTime createDate;
    private LocalDateTime updateDate;
    
//dto를 ntt로
	public officeInfo toEntity() {    //toEntity는 서비스에서 바꿀떄 사용
		return officeInfo.builder()
				.userCode(user_code)
				.officeImg(office_img)
				.officeName(office_name)
				.officeAuthcode(office_authcode)
				.bossPhone(boss_phone)
				.bossEmail(boss_email)
				.registration(registration)
				.managerName(manager_name)
				.managerPhone(manager_phone)
				.managerEmail(manager_email)
				.emplNum(empl_num)
				.officeUrl(office_url)
				.officeText(office_text)
				.openCount(open_count)
				.inputCount(input_count)
				.build();
				
				
	}
}