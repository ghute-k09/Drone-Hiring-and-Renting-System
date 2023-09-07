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
@Table(name="addresses")
public class Address 
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int address_id;
	
	@Column
	String area,city,pincode;
	
	

	public Address() {
		super();
		// TODO Auto-generated constructor stub
	}



	public Address(String area, String city, String pincode) {
		super();
		this.area = area;
		this.city = city;
		this.pincode = pincode;
	}



	public int getAddress_id() {
		return address_id;
	}



	public void setAddress_id(int address_id) {
		this.address_id = address_id;
	}



	public String getArea() {
		return area;
	}



	public void setArea(String area) {
		this.area = area;
	}



	public String getCity() {
		return city;
	}



	public void setCity(String city) {
		this.city = city;
	}



	public String getPincode() {
		return pincode;
	}



	public void setPincode(String pincode) {
		this.pincode = pincode;
	}

	
	
	
	

}
