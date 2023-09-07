package com.example.demo.entities;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
@Table(name="payments")
public class Payment {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY )
	int transaction_id;
	
	 @OneToOne
	 @JoinColumn(name="order_id")
	 Order order_id;
	 
	 @Temporal(TemporalType.TIMESTAMP)
	 @Column
	 Date payment_time;
	 
	 @Column
	 float amount;
	 
	 @Column
	 String payment_mode;

	public Payment() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Payment(int transaction_id, Order order_id, Date payment_time, float amount, String payment_mode) {
		super();
		this.transaction_id = transaction_id;
		this.order_id = order_id;
		this.payment_time = payment_time;
		this.amount = amount;
		this.payment_mode = payment_mode;
	}
	

	public Payment(Order order_id, Date payment_time, float amount, String payment_mode) {
		super();
		this.order_id = order_id;
		this.payment_time = payment_time;
		this.amount = amount;
		this.payment_mode = payment_mode;
	}

	public int getTransaction_id() {
		return transaction_id;
	}

	public void setTransaction_id(int transaction_id) {
		this.transaction_id = transaction_id;
	}

	public Order getOrder_id() {
		return order_id;
	}

	public void setOrder_id(Order order_id) {
		this.order_id = order_id;
	}

	public Date getPayment_time() {
		return payment_time;
	}

	public void setPayment_time(Date payment_time) {
		this.payment_time = payment_time;
	}

	public float getAmount() {
		return amount;
	}

	public void setAmount(float amount) {
		this.amount = amount;
	}

	public String getPayment_mode() {
		return payment_mode;
	}

	public void setPayment_mode(String payment_mode) {
		this.payment_mode = payment_mode;
	}

	@Override
	public String toString() {
		return "Payment [transaction_id=" + transaction_id + ", order_id=" + order_id + ", payment_time=" + payment_time
				+ ", amount=" + amount + ", payment_mode=" + payment_mode + "]";
	}
	 
	 
}
