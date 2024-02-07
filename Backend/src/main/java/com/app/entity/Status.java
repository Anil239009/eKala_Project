package com.app.entity;

public enum Status {
	ORDER_RECIVED(1),PAYMENT_RECIVED(2),DELIVERED(3),PENDING(4);
	
	private int statusId;
	
	private Status(int id) {
		this.statusId=id;
	}
	
	public int getStatusId() {
		return statusId;
	}
	
}
