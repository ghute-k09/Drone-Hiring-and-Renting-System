package com.example.demo.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.demo.entities.ChangePasswordDummy;
import com.example.demo.entities.Login;
import com.example.demo.repositories.LoginRepository;

@Service
public class LoginService 
{
	
	@Autowired
	LoginRepository lrepo;
	
	public Login getLogin(String uid, String pwd)
	{
		Login l;
		
		Optional<Login> ol = lrepo.getLogin(uid, pwd);
		
		try
		{
			l = ol.get();
		}
		catch(Exception e)
		{
			l = null;
		}
		
		return l;
	}
	
	public Login getById(int loginid)
	{
		return lrepo.findById(loginid).get();
	}
	
	public Login save (Login l)
	{
		return lrepo.save(l);
	}
	
	
	
	
	public int checkCredentialForForgotPass(String uid, String answer)
	{
		return lrepo.checkCredentialForForgotPass(uid, answer);
		
	}
	
	public void changePassword(String uid, String pwd)
	{
		
		 lrepo.changePassword(uid,pwd);
		
	}

}

