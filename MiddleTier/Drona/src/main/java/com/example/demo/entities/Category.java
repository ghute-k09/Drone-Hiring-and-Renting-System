package com.example.demo.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="categories")
public class Category {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int cat_id;
	@Column
	String cat_name;
	public Category() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Category(int cat_id, String cat_name) {
		super();
		this.cat_id = cat_id;
		this.cat_name = cat_name;
	}
	public int getCat_id() {
		return cat_id;
	}
	public void setCat_id(int cat_id) {
		this.cat_id = cat_id;
	}
	public String getCat_name() {
		return cat_name;
	}
	public void setCat_name(String cat_name) {
		this.cat_name = cat_name;
	}
	@Override
	public String toString() {
		return "Category [cat_id=" + cat_id + ", cat_name=" + cat_name + "]";
	}
	

}
