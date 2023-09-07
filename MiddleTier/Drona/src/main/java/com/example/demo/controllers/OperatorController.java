package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Address;

import com.example.demo.entities.Login;
import com.example.demo.entities.Operator;
import com.example.demo.entities.OperatorReg;
import com.example.demo.entities.PassBasedEnc;
import com.example.demo.entities.Question;
import com.example.demo.entities.Role;
import com.example.demo.entities.SaltValue;
import com.example.demo.services.AddressService;
import com.example.demo.services.LoginService;
import com.example.demo.services.OperatorService;
import com.example.demo.services.QuestionService;
import com.example.demo.services.RoleService;
@CrossOrigin(origins="http://localhost:3000")
@RestController
public class OperatorController {
	
@Autowired
OperatorService oservice;

@Autowired
LoginService lservice;

@Autowired
RoleService rservice;

@Autowired
QuestionService qservice;

@Autowired
AddressService aservice;

@Autowired
SaltValue saltValue;


@GetMapping("/getAllOp")
public List<Operator> getAll()
{
	return oservice.getAll();
}

@GetMapping("/getAllAvailableOperator")
public List<Operator> getAllAvailableOperator()
{
	return oservice.getAllAvailableOperator();
}

@GetMapping("/getOperator")
public Operator getOperator(@RequestParam("uid") int loginid)
{
	Login l= lservice.getById(loginid);
	return oservice.getOperator(l);
}

@GetMapping("/setStatusFalse")
public void deactivateOperator(@RequestParam("operator_id") int operator_id)
{
	oservice.setStatusFalse(operator_id);
}

@GetMapping("/setStatusTrue")
public void activateOperator(@RequestParam("operator_id") int operator_id)
{
	oservice.setStatusTrue(operator_id);
}



@PostMapping("/regOperator")
public Operator regOperator(@RequestBody OperatorReg cus)
{
	Role r=rservice.getRole(2);
	Question q = qservice.getByQuestionId(cus.getQuestion_id());
	
	System.out.println(saltValue.getSalt());
	String encrypted=PassBasedEnc.generateSecurePassword(cus.getPwd(),saltValue.getSalt());
	
	Login l = new Login(cus.getUid(),encrypted,r,true ,q,cus.getAnswer());
	
	Login saved = lservice.save(l);
	
	Address ad = new Address(cus.getArea(),cus.getCity(),cus.getPincode());
	
	Address asaved = aservice.save(ad);
	
	Operator o = new Operator(cus.getFname(),cus.getMname(),cus.getLname(),cus.getEmail(),cus.getContact(),asaved,true,l);
	
	return oservice.saveOperator(o);
}



@GetMapping("/getOperatorById")
public Operator getOperatorById(@RequestParam("operator_id") int operator_id)
{
	
	return oservice.getOperator(operator_id);


}

@PutMapping("/editOperator")
public  void editUser(@RequestBody Operator operator){
	
	oservice.updateProfile(operator);
}
}

