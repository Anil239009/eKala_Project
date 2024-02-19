package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.Address;
import com.app.entities.User;

public interface AddressDao extends JpaRepository<Address, Long> {
	
	Address findByUser(User user);

}
