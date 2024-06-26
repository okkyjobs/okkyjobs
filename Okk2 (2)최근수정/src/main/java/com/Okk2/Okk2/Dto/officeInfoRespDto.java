package com.Okk2.Okk2.Dto;

import java.time.LocalDateTime;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class officeInfoRespDto {
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
}
