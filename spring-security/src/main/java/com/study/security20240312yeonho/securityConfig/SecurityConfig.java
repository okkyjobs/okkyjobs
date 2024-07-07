package com.study.security20240312yeonho.securityConfig;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.filter.CorsFilter;

import com.study.security20240312yeonho.securityService.auth.PrincipalOauth2UserService;

import lombok.RequiredArgsConstructor;

@EnableWebSecurity
@Configuration //컨테이너에 등록
@RequiredArgsConstructor
public class SecurityConfig extends WebSecurityConfigurerAdapter {
	
	private final CorsFilter corsFilter;
	
	private final PrincipalOauth2UserService principalOauth2UserService;
	
	@Bean // -> 암호화
	public BCryptPasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}
	
	
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		
		http.csrf().disable();
		// 암호화, 복호하
		
		http.headers()
			.frameOptions()
			.disable();
		http.addFilter(corsFilter);
		
		http.authorizeRequests() // 요청이 들어왔을때 인증을 거쳐라
		.antMatchers("/", "/index", "/mypage/**") // 1) 우리가 지정한 요청(들)
		.authenticated() // 2) 인증을 거쳐라
		
		.antMatchers("/notice/addition", "/notice/modification/**")
		.access("hasRole('ROLE_ADMIN') or hasRole('ROLE_MANAGER')")
		//.hasRole("ADMIN")
		
		.anyRequest() //3) 다른 모든 요청들은
		.permitAll() // 4) 모두 접근 권한을 부여하겠다.
		.and()
		.formLogin() // 5) 로그인 방식은 form 로그인을 사용하겠다.
		.loginPage("/signin") // 6) 로그인 페이지 해당 get요청을 통해 접근
		.loginProcessingUrl("/signin") // 7) 로그인 요청(post)
		.failureHandler(new AuthFailerHandler())
		.and()
		.oauth2Login()
		.userInfoEndpoint()
		.userService(principalOauth2UserService)
		.and()
		
		.defaultSuccessUrl("/");
		
		
	}

	
}





