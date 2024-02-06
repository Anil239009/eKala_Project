package com.services;

import java.util.List;

import com.dto.ApiResponse;
import com.dto.UserDto;

public interface UserService {
	UserDto addUser(UserDto userdto);
	
	List<UserDto>getAllUsers();
	
	ApiResponse deleteUser(Long userId);
	
	UserDto updateUser(Long userId, UserDto userdto);
}
