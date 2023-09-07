package com.example.demo.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="order_types")
public class OrderType {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int order_type_id;
	@Column
	String order_type;
	public OrderType() {
		super();
		// TODO Auto-generated constructor stub
	}
	public OrderType(int order_type_id, String order_type) {
		super();
		this.order_type_id = order_type_id;
		this.order_type = order_type;
	}
	public int getOrder_type_id() {
		return order_type_id;
	}
	public void setOrder_type_id(int order_type_id) {
		this.order_type_id = order_type_id;
	}
	public String getOrder_type() {
		return order_type;
	}
	public void setOrder_type(String order_type) {
		this.order_type = order_type;
	}
	@Override
	public String toString() {
		return "order_type [order_type_id=" + order_type_id + ", order_type=" + order_type + "]";
	}
   
	
}
