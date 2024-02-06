package com.entity;

import java.time.LocalDate;

import javax.persistence.CascadeType;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.MapsId;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name="payments")
public class Payment extends BaseEntity {
	
	private double amount;
	private LocalDate paymentDate;
	private String paymentDescription;
	@Enumerated(EnumType.STRING)
	private Status paymentStatus;
	@ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	@JoinColumn(name="user_id")
	private User user;
	@OneToOne(cascade = CascadeType.ALL)
	@MapsId
	@JoinColumn(name="order_id")
	private Order order;
	
	@Override
	public String toString() {
		return "Payment [amount=" + amount + ", paymentDate=" + paymentDate + ", paymentDescription="
				+ paymentDescription + ", paymentStatus=" + paymentStatus + ", user=" + user + ", order=" + order + "]";
	}
	
	
	
	
	
	
	
}
