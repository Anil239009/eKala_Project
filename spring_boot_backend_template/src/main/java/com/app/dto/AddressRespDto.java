package com.app.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AddressRespDto {

	private String fullAddress;
	
	private String landmark;
	
	private String city;
	
	private String countery;
	
	private int pincode;
	
	private UserDto user;
}
