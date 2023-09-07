package com.example.demo.repositories;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Customer;
import com.example.demo.entities.Operator;
import com.example.demo.entities.Order;

@Transactional
@Repository
public interface OrderRepository extends JpaRepository<Order, Integer> {
	
	
	@Query("select o from Order o where operator_id=:op")
	public List<Order> getByOp(Operator op);
	
	@Query("select o from Order o where order_type_id=1")
	public List<Order> getBuyOrder();
	
	@Query("select o from Order o where order_type_id=2")
	public List<Order> getHireOrder();
	
	@Modifying
	@Query("update Order o set order_status = false where order_id = :order_id")
	public void setStatusFalse(int order_id);
	
	@Modifying
	@Query("update Order o set order_status = true where order_id = :order_id")
	public void setStatusTrue(int order_id);
	
	@Modifying
	@Query("update Order o set operator_id = :operator where order_id = :order_id")
	public void assignOperator(int order_id, Operator operator);
	
	
	@Query("select o from Order o where customer_id=:cust")
	public List<Order> getAllOrdersByCustId(Customer cust);


}

