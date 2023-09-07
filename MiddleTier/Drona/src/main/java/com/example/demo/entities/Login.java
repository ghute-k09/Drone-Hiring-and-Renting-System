package com.example.demo.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="logins")
public class Login 
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int login_id;
	
	String uid;
	String pwd;
	
	@ManyToOne
	@JoinColumn(name="role_id")
	Role role_id;
	
	boolean status;
	
	@OneToOne
	@JoinColumn(name="question_id")
	Question question_id;
	String answer;
	
	public Login() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Login(String uid, String pwd, Role role_id, boolean status, Question question_id, String answer) {
		super();
		this.uid = uid;
		this.pwd = pwd;
		this.role_id = role_id;
		this.status = status;
		this.question_id = question_id;
		this.answer = answer;
	}

	public int getLogin_id() {
		return login_id;
	}

	public void setLogin_id(int login_id) {
		this.login_id = login_id;
	}

	public String getUid() {
		return uid;
	}

	public void setUid(String uid) {
		this.uid = uid;
	}

	public String getPwd() {
		return pwd;
	}

	public void setPwd(String pwd) {
		this.pwd = pwd;
	}

	public Role getRole_id() {
		return role_id;
	}

	public void setRole_id(Role role_id) {
		this.role_id = role_id;
	}

	public boolean isStatus() {
		return status;
	}

	public void setStatus(boolean status) {
		this.status = status;
	}

	public Question getQuestion_id() {
		return question_id;
	}

	public void setQuestion_id(Question question_id) {
		this.question_id = question_id;
	}

	public String getAnswer() {
		return answer;
	}

	public void setAnswer(String answer) {
		this.answer = answer;
	}
	
	
	
	

}
