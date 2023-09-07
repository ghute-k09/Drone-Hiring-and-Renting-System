package com.example.demo.entities;

import java.util.Arrays;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="products")
public class Product {
	@Id
	 @GeneratedValue(strategy = GenerationType.IDENTITY)
	 int product_id;
	@Column
	String pname;
	@Column
	String description;
	@Column
	 float price;
	@Column
	 int quantity;
	
	 @Lob
	 byte[] imageA;
	   
	 @ManyToOne
	 @JoinColumn(name="cat_id")
	  Category cat_id;
	  @Column  
	 float deposite, rent;
	   @Column
	boolean status;

	public Product() {
		super();
		// TODO Auto-generated constructor stub
	}
	

	
	public Product(String pname, String description, float price, int quantity, byte[] imageA, Category cat_id,
			float deposite, float rent, boolean status) {
		super();
		this.pname = pname;
		this.description = description;
		this.price = price;
		this.quantity = quantity;
		this.imageA = imageA;
		this.cat_id = cat_id;
		this.deposite = deposite;
		this.rent = rent;
		this.status = status;
	}



	public Product(String pname, String description, float price, int quantity, Category cat_id, float deposite,
			float rent, boolean status) {
		super();
		this.pname = pname;
		this.description = description;
		this.price = price;
		this.quantity = quantity;
		this.cat_id = cat_id;
		this.deposite = deposite;
		this.rent = rent;
		this.status = status;
	}



	public boolean isStatus() {
		return status;
	}
	public void setStatus(boolean status) {
		this.status = status;
	}
	public int getProduct_id() {
		return product_id;
	}
	public void setProduct_id(int product_id) {
		this.product_id = product_id;
	}
	public String getPname() {
		return pname;
	}
	public void setPname(String pname) {
		this.pname = pname;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public float getPrice() {
		return price;
	}
	public void setPrice(float price) {
		this.price = price;
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	public byte[] getImageA() {
		return imageA;
	}
	public void setImageA(byte[] imageA) {
		this.imageA = imageA;
	}
	public Category getCat_id() {
		return cat_id;
	}
	public void setCat_id(Category cat_id) {
		this.cat_id = cat_id;
	}
	public float getDeposite() {
		return deposite;
	}
	public void setDeposite(float deposite) {
		this.deposite = deposite;
	}
	public float getRent() {
		return rent;
	}
	public void setRent(float rent) {
		this.rent = rent;
	}
	@Override
	public String toString() {
		return "Product [product_id=" + product_id + ", pname=" + pname + ", description=" + description + ", price="
				+ price + ", quantity=" + quantity + ", imageA=" + Arrays.toString(imageA) + ", cat_id=" + cat_id
				+ ", deposite=" + deposite + ", rent=" + rent + "]";
	}	
	  
	

}
