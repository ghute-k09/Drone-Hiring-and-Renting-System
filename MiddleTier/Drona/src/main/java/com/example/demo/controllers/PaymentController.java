package com.example.demo.controllers;

import java.text.ParseException;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Customer;
import com.example.demo.entities.Login;
import com.example.demo.entities.Order;
import com.example.demo.entities.Payment;
import com.example.demo.services.CustomerService;
import com.example.demo.services.LoginService;
import com.example.demo.services.PaymentService;




@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class PaymentController {

	@Autowired
	PaymentService pserv;
	
	@Autowired
	LoginService lservice;
	
	@Autowired
	CustomerService cservice;
	
	
	@PostMapping("/savePay")
	public void savePay(@RequestParam("amount") int amt, @RequestParam("type") String typ, @RequestBody Order od,@RequestParam("logid") int logid)throws ParseException 
	{
		

		Login l=lservice.getById(logid);
		Customer c=cservice.getCustomer(l);
		
	

		Date date=new Date();
		
		Payment p =new Payment(od,date,amt,typ);
		pserv.savePayment(p);
	}
}
