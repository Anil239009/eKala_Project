package com.app.services;

import java.util.List;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exceptions.CustomExcp;
import com.app.dao.AddressDao;
import com.app.dao.UserDao;
import com.app.dto.AddressReqDto;
import com.app.dto.AddressRespDto;
import com.app.dto.ApiResponse;
import com.app.entities.Address;
import com.app.entities.User;

@Service
@Transactional
public class AdressServiceImpl implements AddressService {
	@Autowired
	private AddressDao addressDao;
	
	@Autowired
	private UserDao userDao;

	@Autowired
	private ModelMapper mapper;
	
	@Override
	public List<AddressRespDto> getAllAddress() {
		
		return addressDao.findAll().stream().map(e->mapper.map(e, AddressRespDto.class)).collect(Collectors.toList());
	}

	@Override
	public AddressRespDto getAddressByUser(Long userId) {
		User user=userDao.findById(userId).orElseThrow(()->new CustomExcp("User not exist"));
		Address address=addressDao.findByUser(user);
		if(address==null) throw new CustomExcp("Address not found");
		return mapper.map(address, AddressRespDto.class);
	}

	@Override
	public AddressReqDto addAddress(Long userId, AddressReqDto dto) {
		User user=userDao.findById(userId).orElseThrow(()->new CustomExcp("User not exist"));
		Address address= mapper.map(dto, Address.class);
		address.setUser(user);
		addressDao.save(address);
		return mapper.map(address, AddressReqDto.class);
	}

	@Override
	public AddressReqDto updateAddress(Long userId,AddressReqDto dto) {
		//User user=userDao.findById(userId).orElseThrow(()->new CustomExcp("User not exist"));
		Address addr=addressDao.findById(userId).orElseThrow();
		 mapper.map(dto, addr);
		//address.setUser(user);
		addressDao.save(addr);
		return mapper.map(addr, AddressReqDto.class);
	}
	

	@Override
	public ApiResponse deleteAddress(Long addressId) {
	
			Address address=addressDao.findById(addressId).orElseThrow(()->new CustomExcp("Address not exists"));
			addressDao.delete(address);
		
		return new ApiResponse("Address details with Id"+addressId+"deleted Successfully");
	}

}
