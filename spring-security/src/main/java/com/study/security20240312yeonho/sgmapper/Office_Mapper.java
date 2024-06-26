package com.study.security20240312yeonho.sgmapper;

import java.util.HashMap;

import org.apache.ibatis.annotations.Mapper;
@Mapper
public interface Office_Mapper {

	void join(HashMap<String, Object> map);

}
