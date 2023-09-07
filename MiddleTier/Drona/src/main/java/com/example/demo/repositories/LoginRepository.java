package com.example.demo.repositories;

import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Login;

@Transactional
@Repository
public interface LoginRepository extends JpaRepository<Login, Integer> 
{
	@Query("select l from Login l where uid = :uid and pwd = :pwd")
	public Optional<Login> getLogin(@Param("uid") String uid,@Param("pwd") String pwd);
	
	@Query("select count(*) AS count from Login l where uid = :uid and answer = :answer")
	public int checkCredentialForForgotPass(String uid, String answer);
	
	@Modifying
	@Query("update Login l set l.pwd = :pwd where l.uid = :uid")
	public void changePassword(String uid, String pwd);

}

