package com.app.services;

import java.util.List;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.UserDao;
import com.app.dto.ApiResponse;
import com.app.dto.UserDto;
import com.app.entities.User;

@Service
@Transactional
public class UserServiceImpl implements UserService {
	@Autowired
	private UserDao userDao;
	@Autowired
	private EmailSender mailsender;

	@Autowired
	private ModelMapper mapper;

	@Override
	public UserDto addUser(UserDto userdto) {
		User user = mapper.map(userdto, User.class);
		userDao.save(user);
		String body = "Hello "+user.getFirstName()+" Welcome to eKala";
		String status = mailsender.sendEmail(user.getEmail(),"User Registration Successful",body);
		System.out.println(status);
		return mapper.map(user, UserDto.class);
	}

	// create list of users using collectors helper class
	@Override
	public List<UserDto> getAllUsers() {
		return userDao.findAll().stream().map(e -> mapper.map(e, UserDto.class)).collect(Collectors.toList());
	}

	@Override
	public ApiResponse deleteUser(Long userId) {
//		User user=userDao.findById(userId).orElseThrow(()->new CustomExcp("Id not found"));
		User user = userDao.findById(userId).orElseThrow();
		userDao.delete(user);
		return new ApiResponse("User details with Id" + user.getId() + "deleted successfully");
	}

	@Override
	public UserDto updateUser(Long userId, UserDto userdto) {
		User user = userDao.findById(userId).orElseThrow();
		mapper.map(userdto, user);
		userDao.save(user);
		return mapper.map(user, UserDto.class);
	}

}
