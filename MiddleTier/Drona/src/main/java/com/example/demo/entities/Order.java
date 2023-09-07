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
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.springframework.lang.Nullable;

@Entity
@Table(name="orders")

public class Order {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY )
	 int order_id;
	
     @ManyToOne(cascade = CascadeType.ALL)
	 @JoinColumn(name="customer_id")
	Customer customer_id;
     
 	@Temporal(TemporalType.TIMESTAMP)
	 @Column
	 Date order_date;
 	
	 @Column
	 Boolean order_status;
	 
	 @ManyToOne(cascade = CascadeType.ALL)
	 @JoinColumn(name="order_type_id")
	 OrderType order_type_id;
	 
	 @Nullable
	 @ManyToOne(cascade = CascadeType.ALL)
	   @JoinColumn(name="operator_id")
	  Operator operator_id;
	 
	 
	 @Column
	 Date assignment_date;

		public Order() {
			super();
			// TODO Auto-generated constructor stub
		}

		public Order(int order_id, Customer customer_id, Date order_date, Boolean order_status,
				OrderType order_type_id, Operator operator_id) {
			super();
			this.order_id = order_id;
			this.customer_id = customer_id;
			this.order_date = order_date;
			this.order_status = order_status;
			this.order_type_id = order_type_id;
			this.operator_id = operator_id;
		}
		

		public Order(Customer customer_id, Date order_date, Boolean order_status, OrderType order_type_id) {
			super();
			this.customer_id = customer_id;
			this.order_date = order_date;
			this.order_status = order_status;
			this.order_type_id = order_type_id;
		}

		public Order(Customer customer_id, Date order_date, Boolean order_status, OrderType order_type_id,
				Date assignment_date) {
			super();
			this.customer_id = customer_id;
			this.order_date = order_date;
			this.order_status = order_status;
			this.order_type_id = order_type_id;
			this.assignment_date = assignment_date;
		}

		public int getOrder_id() {
			return order_id;
		}

		public void setOrder_id(int order_id) {
			this.order_id = order_id;
		}

		public Customer getCustomer_id() {
			return customer_id;
		}

		public void setCustomer_id(Customer customer_id) {
			this.customer_id = customer_id;
		}

		public Date getOrder_date() {
			return order_date;
		}

		public void setOrder_date(Date order_date) {
			this.order_date = order_date;
		}

		public Boolean getOrder_status() {
			return order_status;
		}

		public void setOrder_status(Boolean order_status) {
			this.order_status = order_status;
		}

		public OrderType getOrder_type_id() {
			return order_type_id;
		}

		public void setOrder_type_id(OrderType order_type_id) {
			this.order_type_id = order_type_id;
		}

		public Operator getOperator_id() {
			return operator_id;
		}

		public void setOperator_id(Operator operator_id) {
			this.operator_id = operator_id;
		}

		public Date getAssignment_date() {
			return assignment_date;
		}

		public void setAssignment_date(Date assignment_date) {
			this.assignment_date = assignment_date;
		}

		@Override
		public String toString() {
			return "Order [order_id=" + order_id + ", customer_id=" + customer_id + ", order_date=" + order_date
					+ ", order_status=" + order_status + ", order_type_id=" + order_type_id + ", operator_id="
					+ operator_id + ", assignment_date=" + assignment_date + "]";
		}

		

}
