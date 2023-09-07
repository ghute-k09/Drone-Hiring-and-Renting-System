package com.example.demo.repositories;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Question;

@Transactional
@Repository
public interface QuestionRepository extends JpaRepository<Question, Integer> 
{

	@Query("select q from Question q")
	public List<Question> getAll();
}
