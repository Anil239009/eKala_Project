package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.Delivery;
import com.app.entities.User;

public interface DeliveryDao extends JpaRepository<Delivery, Long>{
	Delivery findByPaymentUser(User user);
}
