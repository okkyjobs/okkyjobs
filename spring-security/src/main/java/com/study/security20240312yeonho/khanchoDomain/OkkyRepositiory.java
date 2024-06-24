package com.study.security20240312yeonho.khanchoDomain;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface OkkyRepositiory {

	public int projectinput(OkkyPractice okkyPractice) throws Exception; 
}
