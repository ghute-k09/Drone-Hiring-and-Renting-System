package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Login;
import com.example.demo.entities.Operator;
import com.example.demo.entities.Feedback;
import com.example.demo.services.FeedbackService;
import com.example.demo.services.LoginService;
import com.example.demo.services.OperatorService;

@CrossOrigin(origins="http://localhost:3000")
@RestController
public class FeedbackController {


	@Autowired
	LoginService lservice;
	@ Autowired
	FeedbackService fservice;
	
	@Autowired
	OperatorService oservice;
	
	@PostMapping("/giveFeedbackbyOperator")
	public void addFeedback(@RequestParam("loginid") int loginid, @RequestParam("msg") String msg)	
	{
		Login lo=lservice.getById(loginid);
	  	 //Operator op= oservice.getOperator(lo);
	  	 Feedback fd=new Feedback(msg,lo);
		   fservice.saveFeedback(fd);
		
	}
	@GetMapping("/getAllFeedback")
	public List<Feedback> getAllFeedback()
	{
		return fservice.getAllFeedback();
		
	}
}
