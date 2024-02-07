package com.app.services;

import java.util.List;

import com.app.dto.ApiResponse;
import com.app.dto.DeliveryReqDto;
import com.app.dto.DeliveryRespDto;

public interface DeliveryServices {
	List<DeliveryRespDto> getAllDelivery();
	
	DeliveryRespDto getDeliveryByUser(Long userId);
	
	ApiResponse issueDelivery(Long userId, DeliveryReqDto deliveryDto);
}
