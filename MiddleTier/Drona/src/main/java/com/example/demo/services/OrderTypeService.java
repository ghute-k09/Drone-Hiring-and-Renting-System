package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.OrderType;
import com.example.demo.repositories.OrderTypeRepository;

@Service
public class OrderTypeService {

	@Autowired
	OrderTypeRepository otrepo;
	
	public OrderType getById(int ordertypeid)
	{
		return otrepo.findById(ordertypeid).get();
	}
}
