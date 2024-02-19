package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.DeliveryReqDto;
import com.app.dto.DeliveryRespDto;
import com.app.services.DeliveryServices;

import io.swagger.v3.oas.annotations.parameters.RequestBody;

@RestController
@RequestMapping("/delivery")
public class DeliveryController {
	@Autowired
	DeliveryServices deliveryService;
	
	@GetMapping
	public ResponseEntity<?> getAllDelivery(){
		return ResponseEntity.ok(deliveryService.getAllDelivery());
	}
	
	@GetMapping("/{userId}")
	public ResponseEntity<?> getDeliveryByUser(@PathVariable Long userId){
		DeliveryRespDto delievry=deliveryService.getDeliveryByUser(userId);
		
		if(delievry!=null)
			return ResponseEntity.ok(delievry);
		return ResponseEntity.status(HttpStatus.NOT_FOUND).body("user not found..!");
	}
	
	@PostMapping("/{userId}")
	public ResponseEntity<?> postDelivery(@PathVariable Long userId, @RequestBody DeliveryReqDto dto){
		return ResponseEntity.ok(deliveryService.issueDelivery(userId, dto));
	}
	
	
	
}
