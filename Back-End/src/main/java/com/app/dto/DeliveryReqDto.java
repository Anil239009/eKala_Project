package com.app.dto;

import java.time.LocalDate;

import com.app.entities.Status;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class DeliveryReqDto {
	
	private LocalDate deliveryDate;
	
	private String description;
	
	private  Status deliveryStatus;

}
