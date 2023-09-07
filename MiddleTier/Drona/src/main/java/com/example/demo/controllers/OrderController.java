package com.example.demo.controllers;

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
import com.example.demo.entities.Operator;
import com.example.demo.entities.Order;
import com.example.demo.services.CustomerService;
import com.example.demo.services.LoginService;
import com.example.demo.services.OperatorService;
import com.example.demo.services.OrderService;
@CrossOrigin(origins="http://localhost:3000")
@RestController
public class OrderController {
	
@Autowired
OrderService oservice;

@Autowired
OperatorService opservice;

@Autowired
LoginService lservice;

@Autowired
CustomerService cservice;

@GetMapping("/getAllOrder")
public List<Order> getAll()
{
	return oservice.getAll();
}


@GetMapping("/getBuyOrder")
public List<Order> getBuyOrder()
{
	return oservice.getBuyOrder();
}

@GetMapping("/getHireOrder")
public List<Order> getHireOrder()
{
	return oservice.getHireOrder();
}

@GetMapping("/getByOp")
public List<Order> getByOperator(@RequestParam("operator_id") int operator_id)
{
	Operator op=opservice.getOpById(operator_id);
	return oservice.getByOp(op);
}

@GetMapping("/setFalseOrder")
public void orderFalse(@RequestParam("order_id") int order_id)
{
	oservice.setStatusFalse(order_id);
}

@GetMapping("/setTrueOrder")
public void orderTrue(@RequestParam("order_id") int order_id)
{
	oservice.setStatusTrue(order_id);
}

@GetMapping("/assignOperator")
public void assignOperator(@RequestParam("order_id") int order_id, @RequestParam("operator_id") int operator_id)
{
	Operator op = opservice.getOpById(operator_id);
	oservice.assignOperator(order_id,op);
	
}

@GetMapping("/viewMyOrder")
public List<Order> viewMyOrder(@RequestParam("login_id") int login_id)
{
	Login l= lservice.getById(login_id);
	Customer cust = cservice.getCustomer(l);
	return oservice.getAllOrdersByCustId(cust);
}




}

