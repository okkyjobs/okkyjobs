package com.study.security20240312yeonho.securityWeb.controller.api;

import java.util.HashMap;
import java.util.Map;

import javax.validation.Valid;
import javax.validation.ValidationException;

import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.study.security20240312yeonho.securityDomain.user.User;
import com.study.security20240312yeonho.securityDomain.user.UserRepository;
import com.study.security20240312yeonho.securityHandler.aop.annotation.Log;
import com.study.security20240312yeonho.securityHandler.aop.annotation.Timer;
import com.study.security20240312yeonho.securityHandler.aop.annotation.ValidCheck;
import com.study.security20240312yeonho.securityService.auth.AuthService;
import com.study.security20240312yeonho.securityService.auth.PrincipalDetailsService;
import com.study.security20240312yeonho.securityWeb.dto.CMRespDto;
import com.study.security20240312yeonho.securityWeb.dto.SigninReqDto;
import com.study.security20240312yeonho.securityWeb.dto.SignupReqDto;
import com.study.security20240312yeonho.securityWeb.dto.UsernameCheckReqDto;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthController {

	private final PrincipalDetailsService principalDetailsService;
	private final AuthService authService;
	private final UserRepository userRepository;
	
	@ValidCheck
	@PostMapping("/signup")
	public ResponseEntity<?> signup(@Valid @RequestBody SignupReqDto signupReqDto, BindingResult bindingResult) {
		
//		if(bindingResult.hasErrors()) {
//			Map<String, String> errorMessage = new HashMap<String, String>();
//			bindingResult.getFieldErrors().forEach(error -> {
//				System.out.println("오류발생 필드명: " + error.getField());
//				System.out.println("오류발생 상태메세지: " + error.getDefaultMessage());
//				errorMessage.put(error.getField(), error.getDefaultMessage());
//				});
//			//return ResponseEntity.ok().body(new CMRespDto<>(-1, "유효성 검사 실패", errorMessage));
//			throw new CustomValidationApiException("유효성 검사 실패", errorMessage);
//		}
		
		boolean status = false;
		User user = new User();
		try {
			status = principalDetailsService.addUser(signupReqDto);
			System.out.println("id : " + signupReqDto.getId());
			user = userRepository.findUserByUsername(signupReqDto.getId());
			System.out.println(user);
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.ok().body(new CMRespDto<>(-1, "회원가입 실패", status,null,user));
		}		
		return ResponseEntity.ok().body(new CMRespDto<>(1, "회원가입 성공", status,null,user));
	}
	@Log
	@Timer
	@ValidCheck
	@GetMapping("/signup/validation/username")
	public ResponseEntity<?> checkUsername(@Valid @ModelAttribute("usernameCheckReqDto") UsernameCheckReqDto usernameCheckReqDto,BindingResult bindingResult) {
		Map<String, String> errorMessage = new HashMap<String, String>();
		
//		if(bindingResult.hasErrors()) {
//			bindingResult.getFieldErrors().forEach(error -> {
//				System.out.println("오류발생 필드명: " + error.getField());
//				System.out.println("오류발생 상태메세지: " + error.getDefaultMessage());
//				errorMessage.put(error.getField(), error.getDefaultMessage());
//				});
//			//return ResponseEntity.ok().body(new CMRespDto<>(-1, "유효성 검사 실패", errorMessage));
//			throw new CustomValidationApiException("유효성 검사 실패", errorMessage);
//		}
		//return ResponseEntity.ok().body(new CMRespDto<>(1, "유효성 검사 성공", true));
		boolean status =false;
		User user = new User();
		try {
			user = authService.getUserByUsername(usernameCheckReqDto);
//			System.out.println(authService.getUserByUsername(usernameCheckReqDto).getUser_id());
//			System.out.println(authService.getUserByUsername(usernameCheckReqDto).getUser_password());
			status = authService.checkUsername(usernameCheckReqDto);
			System.out.println(usernameCheckReqDto);
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.ok().body(new CMRespDto<>(-1, "서버 오류", status,null,null));
		}
		return ResponseEntity.ok().body(new CMRespDto<>(1, "회원 가입 여부", status,usernameCheckReqDto,user));
	}
	
	@Log
	@Timer
	@ValidCheck
	@GetMapping("/signup/validation/username1")
	public ResponseEntity<?> checkUsername1(@Valid @ModelAttribute("usernameCheckReqDto") UsernameCheckReqDto usernameCheckReqDto,BindingResult bindingResult) {
		Map<String, String> errorMessage = new HashMap<String, String>();
		
		boolean status =false;
		User user = new User();
		try {
			user = authService.getUserByUsername(usernameCheckReqDto);
			System.out.println(user);
			if(user == null) {
				status = false;
			}else {
				status = true;
			}
			System.out.println(usernameCheckReqDto);
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.ok().body(new CMRespDto<>(-1, "서버 오류", status,null,null));
		}
		return ResponseEntity.ok().body(new CMRespDto<>(1, "회원 가입 여부", status,usernameCheckReqDto,user));
	}
	
	
	
	@Log
	@Timer
	@ValidCheck
	@GetMapping("/login")
	public ResponseEntity<?> checkUser(@Valid @ModelAttribute("signinReqDto") SigninReqDto signinReqDto,BindingResult bindingResult) {
		Map<String, String> errorMessage = new HashMap<String, String>();
		
		boolean status =false;
		User user = new User();
		try {
			user = authService.getUserByUsername(signinReqDto);
//			System.out.println(authService.getUserByUsername(signinReqDto).getUser_id());
//			System.out.println(authService.getUserByUsername(signinReqDto).getUser_password()); // 기존 암호화 된 pw.
//			User password = userRepository.findUserByUsername(signinReqDto.getId());

			//honghong의 password를 찾으려면 findUserbyUsername
			//아이디의 비밀번호
			String beforePassword = authService.getUserByUsername(signinReqDto).getUser_password();
			String afterPassword = signinReqDto.getPassword();
			System.out.println("db 비밀번호 : " + beforePassword);
			System.out.println("현재 비밀번호 : " + afterPassword);
//			if(user.getUser_id() == signinReqDto.getId()) {
//				System.out.println("닉네임 일치");
//			}
			System.out.println(signinReqDto.getPassword());
			System.out.println(new BCryptPasswordEncoder().matches(signinReqDto.getPassword(), beforePassword)); 
			if(new BCryptPasswordEncoder().matches(signinReqDto.getPassword(), beforePassword)) {
				System.out.println("비밀번호 일치");
				status = true;
			}else {
				System.out.println("비밀번호 다름");
				status = false;
			}
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.ok().body(new CMRespDto<>(-1, "서버 오류", status,null,null));
		}
		return ResponseEntity.ok().body(new CMRespDto<>(1, "회원 가입 여부", status,null,user));
	}
	
	@Log
	@Timer
	@DeleteMapping("/resignup/usercode")
	public ResponseEntity<?> deleteUser(@ModelAttribute("usercode") int usercode) {
		Map<String, String> errorMessage = new HashMap<String, String>();
		
		boolean status =false;
		
		try {
			System.out.println(usercode);
			userRepository.delete(usercode);
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.ok().body(new CMRespDto<>(-1, "서버 오류", status,null,null));
		}
		return ResponseEntity.ok().body(new CMRespDto<>(1, "회원 탈퇴 성공", status,null,null));
	}
	
	
} 






















