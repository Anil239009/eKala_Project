package com.app.entities;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.JoinColumn;
import javax.persistence.MapsId;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name="deliveries")
public class Delivery extends BaseEntity {
private String deliveryDesc;
	
	private LocalDate deliveryDate;
	
	@Enumerated(EnumType.STRING)
	private  Status deliveryStatus;
	
	@OneToOne
	@MapsId
	@JoinColumn(name="payment_id")
	private Payment payment;
}
