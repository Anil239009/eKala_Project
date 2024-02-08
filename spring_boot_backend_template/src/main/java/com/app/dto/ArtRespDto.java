package com.app.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class ArtRespDto {
	
	private String artName;
	
	private String description;

	private String artType;
	
	private int quantity;
	
	private double price;
	
	private String artImagePath;
	
	private byte[] image;
}
