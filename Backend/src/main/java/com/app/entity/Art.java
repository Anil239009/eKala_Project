package com.app.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Art extends BaseEntity {

	@Column(length = 25, nullable = false)
	private String artName;
	@Column(length = 50, nullable = false)
	private String description;
	@Column(length = 20)
	private String artType;
	private int quantity;
	private double price;
	private String artImagePath;	
	
	@OneToMany(mappedBy = "art",orphanRemoval = true, cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	List<Order>order=new ArrayList<Order>();
	
	
	public void addOrder(Order order) {
		this.order.add(order);
		order.setArt(this);
	}
	
	public void removeOrder(Order order) {
		this.order.remove(order);
		order.setArt(null);
	}
	
	
	
	
	
	
	
	
	
	
	
	
}
