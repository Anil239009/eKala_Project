package com.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@Entity
public class Art {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long cartId;
	@Column(length = 25, nullable = false)
	private String artName;
	@Column(length = 50, nullable = false)
	private String description;
	private ArtType artType;
	private int quantity;
	private double price;
	private String image;	
}
