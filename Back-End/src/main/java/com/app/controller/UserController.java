package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.UserDto;
import com.app.services.UserService;

@RestController
@RequestMapping("/users")
public class UserController {
	@Autowired
	UserService userservice;
	
	@PostMapping
	public ResponseEntity<?> addNewUser(@RequestBody UserDto userdto){
		return ResponseEntity.ok(userservice.addUser(userdto));
	}
	
	@GetMapping
	public ResponseEntity<?> getAllUser(){
		return ResponseEntity.ok(userservice.getAllUsers());
	}
	
	@DeleteMapping("/{userId}")
	public ResponseEntity<?> deleteUser(@PathVariable Long userId){
		try {
			return ResponseEntity.ok(userservice.deleteUser(userId));
		}catch(RuntimeException e) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
		}
	}
	
	@PutMapping("/{userId}")
	public ResponseEntity<?> updateUser(@PathVariable Long userId, @RequestBody UserDto userdto){
		try {
			return ResponseEntity.ok(userservice.updateUser(userId, userdto));
		}catch(RuntimeException e) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
		}
	}
}
