package com.app.dto;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
@Getter
@Setter
@AllArgsConstructor
public class ApiResponse {
	private String message;
	private LocalDateTime  timeStamp;
	
	public ApiResponse(String message) {
		super();
		this.message=message;
		this.timeStamp=LocalDateTime.now();
	}
}
