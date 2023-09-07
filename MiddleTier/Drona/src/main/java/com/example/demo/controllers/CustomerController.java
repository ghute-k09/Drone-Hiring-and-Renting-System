package com.example.demo.controllers;

import java.util.List;
import java.util.Map;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Address;
import com.example.demo.entities.Customer;
import com.example.demo.entities.CustomerReg;
import com.example.demo.entities.Login;
import com.example.demo.entities.PassBasedEnc;
import com.example.demo.entities.Question;
import com.example.demo.entities.Role;
import com.example.demo.entities.SaltValue;
import com.example.demo.services.AddressService;
import com.example.demo.services.CustomerService;
import com.example.demo.services.LoginService;
import com.example.demo.services.MailService;
import com.example.demo.services.QuestionService;
import com.example.demo.services.RoleService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class CustomerController 
{
	@Autowired
	CustomerService cservice;
	
	@Autowired
	LoginService lservice;
	
	@Autowired
	RoleService rservice;
	
	@Autowired
	QuestionService qservice;
	
	@Autowired
	AddressService aservice;
	
	 @Autowired
	    MailService mailService;
	 
	@Autowired
	SaltValue saltValue;
	
	@GetMapping("/getCustomer")
	public Customer getCustomer(@RequestParam("uid") int loginid)
	{
		Login l = lservice.getById(loginid);
		return cservice.getCustomer(l);
	}
	
	

	@PostMapping("/regCustomer")
	public Customer regCustomer(@RequestBody CustomerReg cus) {
	    Role r = rservice.getRole(3);
	    Question q = qservice.getByQuestionId(cus.getQuestion_id());

	    String encrypted = PassBasedEnc.generateSecurePassword(cus.getPwd(), saltValue.getSalt());
	    Login l = new Login(cus.getUid(), encrypted, r, true, q, cus.getAnswer());

	    // Save the Login information
	    Login savedLogin = lservice.save(l);

	    Address ad = new Address(cus.getArea(), cus.getCity(), cus.getPincode());
	    Address asaved = aservice.save(ad);

	    // Create a Customer object with the provided customer details
	    Customer c = new Customer(cus.getFname(), cus.getMname(), cus.getLname(), cus.getEmail(), cus.getContact(),
	            asaved, false, savedLogin);

	    // Generate a verification token 
	    String verificationToken = UUID.randomUUID().toString();

	    // Register the customer with verification token
	    Customer savedCustomer = cservice.registerCustomer(c, verificationToken);

	    return savedCustomer;
	}

	
	@GetMapping("/getAllCust")
	public List<Customer> getAllCust()
	{
		return cservice.getAllCust();
	}
	
	@PutMapping("/editCustomer")
	public  void editUser(@RequestBody Customer customer)
	{
		
		cservice.updateProfile(customer);
		
	}




}

