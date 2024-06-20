package com.guitar.guitarstore.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.guitar.guitarstore.entity.Guitar;
import com.guitar.guitarstore.entity.GuitarType;

public interface GuitarRepository extends JpaRepository <Guitar, Integer> {
    List<Guitar> findByType(GuitarType type);
    
    // List<Guitar> findByBrandContainingOrNameContaining(String keyword, String Keyword);    
    @Query("SELECT g FROM Guitar g WHERE lower(g.brand) like lower(concat('%', :keyword, '%')) or lower(g.name) like lower(concat('%', :keyword, '%'))")
    List<Guitar> findByBrandOrNameContaining(@Param("keyword") String keyword);
}
