package com.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.entity.User;

public interface UserDao extends JpaRepository<User, Long> {

}
