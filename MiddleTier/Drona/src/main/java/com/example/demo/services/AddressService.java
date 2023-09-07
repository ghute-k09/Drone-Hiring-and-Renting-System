package com.example.demo.services;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.entities.Address;
import com.example.demo.repositories.AddressRepository;

@Service
public class AddressService {
	
	@Autowired
	AddressRepository arepo;
	
	public Address save (Address a)
	{
		return arepo.save(a);
	}

}
