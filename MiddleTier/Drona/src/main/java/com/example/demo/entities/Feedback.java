package com.example.demo.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="feedbacks")
public class Feedback {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int feedback_id;
	@Column
	String feedback;
	@OneToOne
	@JoinColumn(name="login_id")
	Login login_id;
	public Feedback() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public Feedback(String feedback, Login login_id) {
		super();
		this.feedback = feedback;
		this.login_id = login_id;
	}

	public Feedback(int feedback_id, String feedback, Login login_id) {
		super();
		this.feedback_id = feedback_id;
		this.feedback = feedback;
		this.login_id = login_id;
	}
	public int getFeedback_id() {
		return feedback_id;
	}
	public void setFeedback_id(int feedback_id) {
		this.feedback_id = feedback_id;
	}
	public String getFeedback() {
		return feedback;
	}
	public void setFeedback(String feedback) {
		this.feedback = feedback;
	}
	public Login getLogin_id() {
		return login_id;
	}
	public void setLogin_id(Login login_id) {
		this.login_id = login_id;
	}
	@Override
	public String toString() {
		return "Feedback [feedback_id=" + feedback_id + ", feedback=" + feedback + ", login_id=" + login_id + "]";
	}
	
	

}
