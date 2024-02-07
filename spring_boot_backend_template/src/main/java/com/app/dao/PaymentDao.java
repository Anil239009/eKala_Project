package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.Order;
import com.app.entities.Payment;
import com.app.entities.User;

public interface PaymentDao extends JpaRepository<Payment, Long>{
	List<Payment> findByUser(User user);
	//boolean existByOrder(Order order);
	
}
