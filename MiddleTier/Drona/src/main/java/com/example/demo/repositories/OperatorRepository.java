package com.example.demo.repositories;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Customer;
import com.example.demo.entities.Login;
import com.example.demo.entities.Operator;
@Repository
@Transactional
public interface OperatorRepository extends JpaRepository<Operator, Integer> 
{
	@Query("select o from Operator o where status=1")
	public List<Operator> getAllAvailableOperator();
	
	@Query("select o from Operator o where operator_id=:operator_id")
	public Operator getByOperatorId(int operator_id);
	

	@Query("select o from Operator o where login_id = :l ")
	public Customer getCustomer(Login l);
	
	
	@Modifying
	@Query("update Operator o set o.status = false where o.operator_id = :operator_id")
	public void setStatusFalse(int operator_id);
	
	
	@Modifying
	@Query("update Operator o set o.status = true where o.operator_id = :operator_id")
	public void setStatusTrue(int operator_id);
	
	
	@Query("select o from Operator o where login_id= :l")
	public Operator getOperator(Login l);
	
	
	@Query("update Operator o set o.email = :op, o.contact = :op where o.operator_id = :op")
	public void updateOperator(Operator op);

	
}

