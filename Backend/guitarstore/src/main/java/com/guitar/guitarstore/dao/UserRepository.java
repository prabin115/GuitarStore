package com.guitar.guitarstore.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.guitar.guitarstore.entity.User;

public interface UserRepository extends JpaRepository<User, Integer> {
    Optional<User> findByEmail(String email);
    Optional<User> findByUsername(String username);
    boolean existsByEmail(String email);
}
