package com.example.Medicare.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.Medicare.model.Medicen;
@Repository
public interface medirepo  extends JpaRepository<Medicen,Integer>{

}
