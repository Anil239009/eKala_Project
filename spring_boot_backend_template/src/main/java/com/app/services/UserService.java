package com.app.services;

import java.util.List;

import com.app.dto.ApiResponse;
import com.app.dto.UserDto;

public interface UserService {
	
	UserDto addUser(UserDto userdto);
	
	List<UserDto>getAllUsers();
	
	ApiResponse deleteUser(Long userId);
	
	UserDto updateUser(Long userId, UserDto userdto);
}
