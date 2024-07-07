package com.study.security20240312yeonho.securityDomain.user;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface UserRepository {
	
	public int save(User user) throws Exception;
	public int delete(int usercode) throws Exception;
	public int updateProfile(User user) throws Exception;
	public User signin(User user) throws Exception;
	public User findUserByUsername(String username) throws Exception;
	public User findPasswordByUser(String username, String password) throws Exception;
	
	public User findOAuth2UserByUsername(String oauth2_id) throws Exception;
}
