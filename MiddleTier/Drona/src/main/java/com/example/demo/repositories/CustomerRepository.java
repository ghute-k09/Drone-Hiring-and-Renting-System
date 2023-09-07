package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Customer;
import com.example.demo.entities.Login;
@Repository
public interface CustomerRepository extends JpaRepository<Customer, Integer> {
	
	@Query("select c from Customer c where login_id = :l ")
	public Customer getCustomer(Login l);
	
	@Query("select o from Customer o where customer_id=:customer_id")
	public Customer getByCustomerId(int customer_id);

	public Customer findByEmail(String email);
   
    
    @Query("select c from Customer c where c.verificationCode = ?1")
	public Customer findByVerificationCode(String verificationCode);

	
	
	

}

