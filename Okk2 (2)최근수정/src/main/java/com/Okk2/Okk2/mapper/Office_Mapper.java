package com.Okk2.Okk2.mapper;

import java.util.HashMap;

import org.apache.ibatis.annotations.Mapper;
@Mapper
public interface Office_Mapper {

	void join(HashMap<String, Object> map);

}
