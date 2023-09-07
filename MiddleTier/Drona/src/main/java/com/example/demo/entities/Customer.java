package com.example.demo.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name="customers")
public class Customer 
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int customer_id;
	String fname,mname,lname,email,contact;
	
	@JsonIgnoreProperties("customers")
	@OneToOne
	@JoinColumn(name="address_id")
	Address address_id;
	
	boolean status;
	
	@OneToOne
	@JoinColumn(name="login_id")
	Login login_id;
	
	@Column(name = "verification_code", updatable = false)
	    private String verificationCode;
	    
	public String getVerificationCode() {
			return verificationCode;
		}

		public void setVerificationCode(String verificationCode) {
			this.verificationCode = verificationCode;
		}

		
	public Customer() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Customer(String fname, String mname, String lname, String email, String contact, Address address_id,
			boolean status, Login login_id) {
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

	public int getCustomer_id() {
		return customer_id;
	}

	public void setCustomer_id(int customer_id) {
		this.customer_id = customer_id;
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
	
	

}
