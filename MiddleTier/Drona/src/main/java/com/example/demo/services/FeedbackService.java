package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.entities.Feedback;
import com.example.demo.repositories.FeedbackRepository;

@Service
public class FeedbackService {
	@Autowired
	FeedbackRepository frepo;
	public void saveFeedback(Feedback f)
	{
		frepo.save(f);
	}
	public List<Feedback> getAllFeedback()
	{
		return frepo.findAll();
	}

}
