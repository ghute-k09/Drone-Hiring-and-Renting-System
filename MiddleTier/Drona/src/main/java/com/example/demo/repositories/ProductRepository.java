package com.example.demo.repositories;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Login;
import com.example.demo.entities.Product;

@Transactional
@Repository
public interface ProductRepository extends JpaRepository<Product, Integer> {
	
	@Modifying
	@Query("update Product set imageA =:file where product_id=:id")
	public int uploadPhoto(int id, byte [] file);
	
	@Query("select c from Product c where product_id = :l ")
	public Product getProduct(Login l);

	@Query(value = "select * from Products u WHERE u.cat_id = 1 and u.quantity>0", nativeQuery = true)
	public List<Product> getByProduct(); 
	
	@Query(value="select * from Products u WHERE u.cat_id=2", nativeQuery = true )
	public List<Product> getAgriProd();
	
	@Query(value="select * from Products u WHERE u.cat_id=3", nativeQuery = true )
	public List<Product> getRoadProd();
	
	@Query(value="select * from Products u WHERE u.cat_id=4", nativeQuery = true )
	public List<Product> getPhotoProd();
	
	@Modifying
	@Query("update Product o set o.status = false where o.product_id = :product_id")
	public void setProductStatusFalse(int product_id);
	
	
	@Modifying
	@Query("update Product o set o.status = true where o.product_id = :product_id")
	public void setProductStatusTrue(int product_id);
	
	@Modifying
	@Query("update Product o set o.quantity = o.quantity-1 where o.product_id = :product_id")
	public void minQuantity(int product_id);

	
}

