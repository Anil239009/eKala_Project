package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.Art;

public interface ArtDao extends JpaRepository<Art, Long>{
	
}
