package com.example.demo.services;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Login;
import com.example.demo.entities.Operator;
import com.example.demo.repositories.OperatorRepository;
@Service
public class OperatorService {
@Autowired
OperatorRepository Orepo;


public Operator saveOperator(Operator o)
{
	return Orepo.save(o);
}

public List<Operator> getAll()
{
	return Orepo.findAll();
}

public List<Operator> getAllAvailableOperator()
{
	return Orepo.getAllAvailableOperator();
}

public Operator getOpById(int operator_id)
{
	return Orepo.findById(operator_id).get();
}


public Operator getOperator(Login l)
{
	return Orepo.getOperator(l);
}

public void setStatusFalse(int operator_id)
{
	Orepo.setStatusFalse(operator_id);
}

public void setStatusTrue(int operator_id)
{
	Orepo.setStatusTrue(operator_id);
}

public void updateProfile(Operator operator)
{
	  Operator op= Orepo.getByOperatorId(operator.getOperator_id());
	  op.setContact(operator.getContact());
	  op.setEmail(operator.getEmail());
	 Orepo.save(op);
			
}

public Operator getOperator(int operator_id)
{
	return Orepo.findById(operator_id).get();
}
}

