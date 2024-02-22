package com.app.services;

public interface EmailSender {
	public String sendEmail(String toEmail,String title,String body);
}
