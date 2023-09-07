package com.example.demo.controllers;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.util.Date;
import java.time.format.DateTimeFormatter;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Customer;
import com.example.demo.entities.Login;
import com.example.demo.entities.Order;
import com.example.demo.entities.OrderDetails;
import com.example.demo.entities.OrderType;
import com.example.demo.entities.Product;
import com.example.demo.services.CustomerService;
import com.example.demo.services.LoginService;
import com.example.demo.services.OrderDetailService;
import com.example.demo.services.OrderService;
import com.example.demo.services.OrderTypeService;
import com.example.demo.services.ProductService;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class OrderDetailController {

	@Autowired
	OrderDetailService odserv;
	
	@Autowired
	LoginService lservice;
	
	@Autowired
	CustomerService cservice;
	
	@Autowired
	OrderTypeService otserv; 
	
	@Autowired
	ProductService pserv;
	
	@Autowired
	OrderService oserv;
	
	
	@PostMapping("/saveOrder")
	public Order saveOrderDetail(@RequestParam("login_id") int loginid, @RequestBody Product[] lprod) 
	{
		Login l=lservice.getById(loginid);
		Customer c=cservice.getCustomer(l);
		OrderType ot= otserv.getById(1);
		


		   Date date=new Date();
		   
		   
		Order o=new Order(c,date,false,ot);
		oserv.saveOrder(o);
		
		System.out.print(o);
		for(int i=0;i<lprod.length;i++)
		{
			
			OrderDetails od =new OrderDetails(lprod[i],1,lprod[i].getPrice(),o);
			odserv.saveOrder(od);
			
			pserv.minQuantity(lprod[i].getProduct_id());
			
		}
		return o;
	}
	
	@PostMapping("/saveRentOrder")
	public Order saveRentOrderDetail(@RequestParam("login_id") int loginid, @RequestParam("date") String date, @RequestBody Product prod) throws ParseException 
	{
		Login l=lservice.getById(loginid);
		Customer c=cservice.getCustomer(l);
		OrderType ot= otserv.getById(2);
		
		Date odate=new Date();
		Date adate=new SimpleDateFormat("yyyy-MM-dd").parse(date); 
		
		Order o=new Order(c,odate,false,ot,adate);
		oserv.saveOrder(o);
		
		OrderDetails od =new OrderDetails(prod,1,prod.getRent(),o);
		odserv.saveOrder(od);
		
		return o;
	}
	
	
}
