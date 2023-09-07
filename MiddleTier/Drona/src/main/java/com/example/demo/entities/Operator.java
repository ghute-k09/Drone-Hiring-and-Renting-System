package com.example.demo.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
@Entity
@Table(name="operators")
public class Operator {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int operator_id;
	@Column
	String fname,mname,lname,email,contact;
	@OneToOne
	@JoinColumn(name="address_id")
	Address address_id;
	boolean status;
	@OneToOne
	@JoinColumn(name="login_id")
	Login login_id;
	public Operator() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Operator(String fname, String mname, String lname, String email, String contact,
			Address address_id, boolean status, Login login_id) {
		super();
		this.fname = fname;
		this.mname = mname;
		this.lname = lname;
		this.email = email;
		this.contact = contact;
		this.address_id = address_id;
		this.status = status;
		this.login_id = login_id;
	}
	public int getOperator_id() {
		return operator_id;
	}
	public void setOperator_id(int operator_id) {
		this.operator_id = operator_id;
	}
	public String getFname() {
		return fname;
	}
	public void setFname(String fname) {
		this.fname = fname;
	}
	public String getMname() {
		return mname;
	}
	public void setMname(String mname) {
		this.mname = mname;
	}
	public String getLname() {
		return lname;
	}
	public void setLname(String lname) {
		this.lname = lname;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getContact() {
		return contact;
	}
	public void setContact(String contact) {
		this.contact = contact;
	}
	public Address getAddress_id() {
		return address_id;
	}
	public void setAddress_id(Address address_id) {
		this.address_id = address_id;
	}
	public boolean isStatus() {
		return status;
	}
	public void setStatus(boolean status) {
		this.status = status;
	}
	public Login getLogin_id() {
		return login_id;
	}
	public void setLogin_id(Login login_id) {
		this.login_id = login_id;
	}
	@Override
	public String toString() {
		return "Operator [operator_id=" + operator_id + ", fname=" + fname + ", mname=" + mname + ", lname=" + lname
				+ ", email=" + email + ", contact=" + contact + ", address_id=" + address_id + ", status=" + status
				+ ", login_id=" + login_id + "]";
	}
	
	

	
	
	
	
	

}
