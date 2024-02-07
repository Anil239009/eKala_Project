package com.app.services;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exceptions.CustomExcp;
import com.app.dao.OrderDao;
import com.app.dao.PaymentDao;
import com.app.dao.UserDao;
import com.app.dto.ApiResponse;
import com.app.dto.PaymentReqDto;
import com.app.dto.PaymentRespDto;
import com.app.entities.Order;
import com.app.entities.Payment;
import com.app.entities.Status;
import com.app.entities.User;

@Service
@Transactional
public class PaymentServiceImpl implements PaymentService {
	@Autowired
	private PaymentDao paymentDao;
	@Autowired
	private UserDao userDao;
	@Autowired
	private OrderDao orderDao;
	@Autowired
	private ModelMapper mapper;
	
	@Override
	public List<PaymentRespDto> getAllPaymentWithUsers(Long userId) {
		User user=userDao.findById(userId).orElseThrow(()->new CustomExcp("Id not founf..!"));
		List<Payment> payments=paymentDao.findByUser(user);
		List<PaymentRespDto> list=payments.stream().map(e->mapper.map(e, PaymentRespDto.class)).collect(Collectors.toList());
		return list;
	}

	@Override
	public ApiResponse makePayment(Long userId,Long orderId, PaymentReqDto paymentDto) {
		User user=userDao.findById(userId).orElseThrow(()->new CustomExcp("Id not found..!"));
		Order order=orderDao.findById(userId).orElseThrow(()->new CustomExcp("Id not found..!"));
		Payment payment=mapper.map(paymentDto, Payment.class);
		user.addPayment(payment);
		payment.setOrder(order);
		payment.setPaymentStatus(Status.PAYMENT_RECIVED);
		payment.setPaymentDate(LocalDate.now());
		paymentDao.save(payment);
		return new ApiResponse("Payment has been done Successfully..!");
	}

	@Override
	public List<PaymentRespDto> getAllPayments() {
		
		return paymentDao.findAll().stream().map(e->mapper.map(e, PaymentRespDto.class)).collect(Collectors.toList());
	}

}
