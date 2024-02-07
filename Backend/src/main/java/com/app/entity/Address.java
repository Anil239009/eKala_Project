package com.app.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.MapsId;
import javax.persistence.OneToOne;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Address extends BaseEntity {
	@Column(length = 100)
	private String fullAddress;
	
	@Column(length = 20)
	private String landmark;
	
	@Column(length = 20)
	private String city;
	
	@Column(length = 20)
	private String countery;
	
	private int pincode;
	
	@OneToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="user_id")
	@MapsId
	private User user;

	@Override
	public String toString() {
		return "Address [fullAddress=" + fullAddress + ", landmark=" + landmark + ", city=" + city + ", countery="
				+ countery + ", pincode=" + pincode + ", user=" + user + "]";
	}
	
}
