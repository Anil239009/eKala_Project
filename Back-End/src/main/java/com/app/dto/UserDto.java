package com.app.dto;

import javax.persistence.Column;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class UserDto {
	
	private String firstName;
	private String lastName;
	private String role;
	private String mobileNo;
	private String email;
	private String password;
}
