package com.study.security20240312yeonho.sgdomain.officeInfo;



import org.apache.ibatis.annotations.Mapper;


@Mapper
public interface officeInfoRepository {

	
		/*
		 * testService라는 곳에서 num을 던져줄거임
		 * num으로 머를 찾을거임? board_id에 넣어서 게시글
		 */
	
//	public Practice findBoard(int num) throws Exception;    // = 
	public int officeInfoInput(officeInfo officeInfo) throws Exception;   //-xml로
//	public List<Practice> pageLoadRepository(int index) throws Exception;
}