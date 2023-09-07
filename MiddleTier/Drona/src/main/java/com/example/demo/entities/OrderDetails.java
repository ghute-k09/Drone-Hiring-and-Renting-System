package com.example.demo.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
@Entity
@Table(name="order_details")
public class OrderDetails {
	
	 @Id
	 @GeneratedValue(strategy = GenerationType.IDENTITY)
	int order_detail_id ;
	 
	 @ManyToOne
	 @JoinColumn(name="product_id")
	 Product product_id;
	 
	 @Column
	 int quantity;
	 @Column
	float  amount;
	 @ManyToOne
   @JoinColumn(name="order_id")
	 Order order_id;
	public OrderDetails() {
		super();
		// TODO Auto-generated constructor stub
	}
	public OrderDetails(int order_detail_id, Product product_id, int quantity, float amount, Order order_id) {
		super();
		this.order_detail_id = order_detail_id;
		this.product_id = product_id;
		this.quantity = quantity;
		this.amount = amount;
		this.order_id = order_id;
	}
	public OrderDetails(Product product_id, int quantity, float amount, Order order_id) {
		super();
		this.product_id = product_id;
		this.quantity = quantity;
		this.amount = amount;
		this.order_id = order_id;
	}
	public int getOrder_detail_id() {
		return order_detail_id;
	}
	public void setOrder_detail_id(int order_detail_id) {
		this.order_detail_id = order_detail_id;
	}
	public Product getProduct_id() {
		return product_id;
	}
	public void setProduct_id(Product product_id) {
		this.product_id = product_id;
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	public float getAmount() {
		return amount;
	}
	public void setAmount(float amount) {
		this.amount = amount;
	}
	public Order getOrder_id() {
		return order_id;
	}
	public void setOrder_id(Order order_id) {
		this.order_id = order_id;
	}
	@Override
	public String toString() {
		return "OrderDetails [order_detail_id=" + order_detail_id + ", product_id=" + product_id + ", quantity="
				+ quantity + ", amount=" + amount + ", order_id=" + order_id + "]";
	}
	
	}
