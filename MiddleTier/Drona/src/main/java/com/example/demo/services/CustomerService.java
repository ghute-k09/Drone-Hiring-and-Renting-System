package com.example.demo.services;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;

import com.example.demo.entities.Customer;
import com.example.demo.entities.Login;
import com.example.demo.repositories.CustomerRepository;
@Service
public class CustomerService 
{
	@Autowired
	CustomerRepository crepo;
	@Autowired
    MailService mailService;
	public Customer getCustomer(Login l)
	{
		return crepo.getCustomer(l);
	}
	
	public Customer saveCustomer(Customer c)
	{
		return crepo.save(c);
	}

	public List<Customer> getAllCust()
	{
		return crepo.findAll();
	}
	
	public void updateProfile(Customer customer)
	{
		  Customer op= crepo.getByCustomerId(customer.getCustomer_id());
		  op.setContact(customer.getContact());
		  op.setEmail(customer.getEmail());
		 crepo.save(op);
				
	}

	public Customer getCustomerByEmail(String email) {
	    return crepo.findByEmail(email);
	}

	

	public Customer getCustomerByVerificationCode(String verificationCode) {
        return crepo.findByVerificationCode(verificationCode);
    }

	public Customer registerCustomer(Customer c, String verificationToken) {
        c.setVerificationCode(verificationToken);
        Customer savedCustomer = crepo.save(c);

        sendVerificationEmail(savedCustomer, verificationToken);

        return savedCustomer;
    }


	
	private void sendVerificationEmail(Customer customer, String verificationToken) {
		String verificationLink = "http://localhost:3000/verification-success?token=" + verificationToken;


	    String emailContent = "Hello " + customer.getFname() + ",\n\n"
	            + "Welcome to our platform! Please click the link below to verify your registration:\n\n"
	            + "<h3><a href=\"" + verificationLink + "\" target=\"_self\">VERIFY</a></h3>\n\n"
	            + "Thank you,\n"
	            + "AeroHire.";

	    String mailTo = customer.getEmail();
	    String mailSubject = "Please verify your registration";
	    String mailContent = emailContent;

	    mailService.sendEmail(mailTo, mailSubject, mailContent);

	    System.out.println("Verification email sent.");
	  
	}
	
	
	

}

