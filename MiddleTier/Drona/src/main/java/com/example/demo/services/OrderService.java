package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Customer;
import com.example.demo.entities.Operator;
import com.example.demo.entities.Order;
import com.example.demo.repositories.OrderRepository;

@Service
public class OrderService {

	@Autowired
	OrderRepository orepo;
	public List<Order> getAll()
	{
		return orepo.findAll();
	}
	
	public List<Order> getByOp(Operator op)
	{
		return orepo.getByOp(op);
	}
	
	public void setStatusFalse(int order_id)
	{
		orepo.setStatusFalse(order_id);
	}

	public void setStatusTrue(int order_id)
	{
		orepo.setStatusTrue(order_id);
	}
	
	public void saveOrder(Order o)
	{
		orepo.save(o);
	}
public void assignOperator(int order_id, Operator operator)
	{
		orepo.assignOperator(order_id,operator);
		
	}
public List<Order> getBuyOrder()
{
	return orepo.getBuyOrder();
}

public List<Order> getHireOrder()
{
	return orepo.getHireOrder();
}

public List<Order> getAllOrdersByCustId(Customer cust)
{
	return orepo.getAllOrdersByCustId(cust);
}



}
