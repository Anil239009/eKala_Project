package com.app.services;

import java.util.List;

import com.app.dto.ApiResponse;
import com.app.dto.PaymentReqDto;
import com.app.dto.PaymentRespDto;

public interface PaymentService {
	
	List<PaymentRespDto> getAllPaymentWithUsers(Long userId);
	
	ApiResponse makePayment(Long userId, Long orderId, PaymentReqDto paymentDto);
	
	List<PaymentRespDto> getAllPayments();
}
