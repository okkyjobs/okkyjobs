package com.study.security20240312yeonho.securityService.auth;

import java.util.Map;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.oauth2.client.registration.ClientRegistration;
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;

import com.study.security20240312yeonho.securityDomain.user.User;
import com.study.security20240312yeonho.securityDomain.user.UserRepository;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
@RequiredArgsConstructor
public class PrincipalOauth2UserService extends DefaultOAuth2UserService{

	private final UserRepository userRepository;
	
	@Override
	public OAuth2User loadUser(OAuth2UserRequest userRequest) throws OAuth2AuthenticationException {
		System.out.println("PrincipalOauth2UserService");
		// oAuth2User 유저를 리턴하는거
		OAuth2User oAuth2User = super.loadUser(userRequest);
		log.info(">>> ClientRegistration: {} <<<", userRequest.getClientRegistration());
		log.info(">>> oAuth2User: {} <<<", oAuth2User);

		String provider = null;
		ClientRegistration clientRegistration = userRequest.getClientRegistration();
		Map<String, Object> attributes = oAuth2User.getAttributes();
		
		provider = clientRegistration.getClientName();
		
		User user = getOAuth2User(provider, attributes);
		
		return new PrincipalDetails(user, attributes);
	}
	
	private User getOAuth2User(String provider, Map<String, Object> attributes) throws OAuth2AuthenticationException {
		System.out.println("getOAuth2User");
		User user = null;
		String oauth2_id = null;
		String id = null;
		Map<String, Object> response = null;
		System.out.println("provider: " + provider);
		if(provider.equalsIgnoreCase("google")) {
			response = attributes;
			id = (String)response.get("sub");
		}else if(provider.equalsIgnoreCase("naver")) {
			response = ((Map<String, Object>)attributes.get("response"));
			id = (String)response.get("id");
		}else {
			throw new OAuth2AuthenticationException("provider Error!");
		}
		oauth2_id = provider + "_" + id;
		
		
		try {
			System.out.println("hihihi");
			user = userRepository.findOAuth2UserByUsername(oauth2_id);
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		System.out.println("sshihi");
		
		if(user == null) {
			user = User.builder()
					.user_id(oauth2_id)
					.user_name((String)response.get("name"))
					.user_email((String)response.get("email"))
					.user_nickname("nickname")
					.user_wishtag("wishtag")
					.user_email_agree(1)
					.user_type(1)
					.service_agree(1)
					.personal_info_agree(1)
					.user_password(new BCryptPasswordEncoder().encode(id))
					.role("ROLE_USER")
					.user_provider(provider) 
					.authority(1) 
					.build();
			
			System.out.println("sshihi2");
			boolean result = false;
			try {
				 result = userRepository.save(user) > 0;
				 if(result) {
					 user = userRepository.findOAuth2UserByUsername(oauth2_id);
				 }else {
					 throw new OAuth2AuthenticationException("provider Error!");
				 }
				 
			} catch (Exception e) {
				e.printStackTrace();
			}
		
		}
		
		return user;
	}
	
	
	
}








