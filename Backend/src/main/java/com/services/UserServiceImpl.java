package com.services;

import java.util.List;
import java.util.stream.Collector;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;

import com.dao.UserDao;
import com.dto.ApiResponse;
import com.dto.UserDto;
import com.entity.User;

public class UserServiceImpl implements UserService {
	@Autowired
	private UserDao userDao;

	@Autowired
	private ModelMapper mapper;

	@Override
	public UserDto addUser(UserDto userdto) {
		User user=mapper.map(userdto,User.class);
		userDao.save(user);
		return mapper.map(user, UserDto.class);
	}

	//create list of users using collectors helper class
	@Override
	public List<UserDto> getAllUsers() {
		return userDao.findAll().stream().map(e->mapper.map(e, UserDto.class)).collect(Collectors.toList());
	}

	@Override
	public ApiResponse deleteUser(Long userId) {
//		User user=userDao.findById(userId).orElseThrow(()->new CustomExcp("Id not found"));

		return null;
	}

	@Override
	public UserDto updateUser(Long userId, UserDto userdto) {
		// TODO Auto-generated method stub
		return null;
	}
	
}
