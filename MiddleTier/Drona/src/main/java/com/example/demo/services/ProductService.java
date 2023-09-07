package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Login;
import com.example.demo.entities.Product;
import com.example.demo.repositories.ProductRepository;

@Service
public class ProductService {

	@Autowired
	ProductRepository prepo;
	
	public Product saveProduct(Product p)
	{
		return prepo.save(p);
	}
	
	public boolean upload(int id, byte [] photo)
	{
		if(prepo.uploadPhoto(id, photo) == 1)
			return true;
		else
			return false;
	
	}

	public Product getProduct(Login l)
	{
		return prepo.getProduct(l);
	}
	public List<Product> getAllProd()
	{
		return prepo.findAll();
	}
	public List<Product> getByProduct()
	{
		return prepo.getByProduct();
	}
	public List<Product> getAgriProd()
	{
		return prepo.getAgriProd();
	}
	public List<Product> getRoadProd()
	{
		return prepo.getRoadProd();
	}
	public List<Product> getPhotoProd()
	{
		return prepo.getPhotoProd();
	}
	public Product getProdById(int product_id)
	{
		return prepo.findById(product_id).get();
	}
public void setProductStatusFalse(int product_id)
	{
	prepo.setProductStatusFalse(product_id);
	}

	public void setProductStatusTrue(int product_id)
	{
		prepo.setProductStatusTrue(product_id);
	}
	
	public void minQuantity(int product_id)
	{
		prepo.minQuantity(product_id);
	}

}
