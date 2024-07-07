package com.study.security20240312yeonho.sgdomain.officeInfo;

import java.time.LocalDateTime;

import com.study.security20240312yeonho.sgDto.officeInfoRespDto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class officeInfo {
    private int userCode;
    private String officeImg;
    private String officeName;
    private int officeAuthcode;
    private int bossPhone;
    private String bossEmail;
    private String registration;
    private String managerName;
    private int managerPhone;
    private String managerEmail;
    private int emplNum;
    private String officeUrl;
    private String officeText;
    private int openCount;
    private int inputCount;
    private LocalDateTime createDate;
    private LocalDateTime updateDate;
	
	//ntt를 dto로 
	// build = 생성을 쉽게
	public officeInfoRespDto toDto() {
		return officeInfoRespDto.builder()
				.userCode(userCode)
				.officeImg(officeImg)
				.officeName(officeName)
				.officeAuthcode(officeAuthcode)
				.bossPhone(bossPhone)
				.bossEmail(bossEmail)
				.registration(registration)
				.managerName(managerName)
				.managerPhone(managerPhone)
				.managerEmail(managerEmail)
				.emplNum(emplNum)
				.officeUrl(officeUrl)
				.officeText(officeText)
				.openCount(openCount)
				.inputCount(inputCount)
				.build();
	}
}
