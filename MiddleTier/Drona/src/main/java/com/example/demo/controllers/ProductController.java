package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.entities.Category;
import com.example.demo.entities.Login;
import com.example.demo.entities.Product;
import com.example.demo.entities.ProductDummy;
import com.example.demo.services.CategoryService;
import com.example.demo.services.LoginService;
import com.example.demo.services.ProductService;

@CrossOrigin(origins="http://localhost:3000")
@RestController
public class ProductController {
	@Autowired
	ProductService pservice;
	
	@Autowired
	CategoryService cservice;
	
	@Autowired
	LoginService lservice;
	
	@PostMapping("/addProduct")
	public Product addProduct(@RequestBody ProductDummy p)
	{
		Category catObj = cservice.getByCategoryId(p.getCat_id());
		Product pro = new Product(p.getPname(),p.getDescription(),p.getPrice(),p.getQuantity(),catObj,p.getDeposite(),p.getRent(),true);
		return pservice.saveProduct(pro);
	}
	
	@PostMapping(value="/uploadImage/{pid}",consumes="multipart/form-data")
	public boolean uploadImage(@PathVariable ("pid") int pid, @RequestBody MultipartFile file)
	{
		System.out.println("hello");
		boolean flag=true;
		try
		{
			flag = pservice.upload(pid,file.getBytes());
		}
		catch(Exception e)
		{
			flag = false;
		}
		
		return flag;
	}
	

	@GetMapping("/getProduct")
	public Product getProduct(@RequestParam("loginid")int loginid)
	{
		Login l=lservice.getById(loginid);
		
		return pservice.getProduct(l);
		
	}
	@GetMapping("/getAllProd")
	public List<Product> getAllProd()
	{
		return pservice.getAllProd();
	}
	@GetMapping("/getByProduct")
	public List<Product> getByProduct()
	{
		return pservice.getByProduct();
	}
	
	@GetMapping("/getAgriProd")
	public List<Product> getAgriProd()
	{
		return pservice.getAgriProd();
	}
	
	@GetMapping("/getRoadProd")
	public List<Product> getRoadProd()
	{
		return pservice.getRoadProd();
	}
	
	@GetMapping("/getPhotoProd")
	public List<Product> getPhotoProd()
	{
		return pservice.getPhotoProd();
	}
	
	@GetMapping("/getProdById")
	public Product getProdById(@RequestParam("product_id") int product_id)
	{
		return pservice.getProdById(product_id);
	}
@GetMapping("/setProductStatusFalse")
	public void deactivateProduct(@RequestParam("product_id") int product_id)
	{
		pservice.setProductStatusFalse(product_id);
	}

	@GetMapping("/setProductStatusTrue")
	public void activateProduct(@RequestParam("product_id") int product_id)
	{
		pservice.setProductStatusTrue(product_id);
	}


}
