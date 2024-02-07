package com.app.services;

import java.util.List;

import com.app.custom_exceptions.CustomExcp;
import com.app.dto.AddressReqDto;
import com.app.dto.AddressRespDto;
import com.app.dto.ApiResponse;

public interface AddressService {
	
	 List<AddressRespDto> getAllAddress();
	 
	 AddressRespDto getAddressByUser(Long userId);
	 
	 AddressReqDto addAddress(Long userId,AddressReqDto dto);
	 
	 AddressReqDto updateAddress(Long userId, AddressReqDto dto);
	 
	 ApiResponse deleteAddress(Long addressId);
	 
	 
}
