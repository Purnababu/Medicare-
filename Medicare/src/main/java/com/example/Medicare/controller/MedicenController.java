package com.example.Medicare.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.Medicare.model.Medicen;
import com.example.Medicare.repo.medirepo;



@RestController
@RequestMapping
@CrossOrigin("http://localhost:4200")
public class MedicenController {
	@Autowired
	medirepo mrepo;
	
	 @GetMapping("/api/det")
  	public List<Medicen> getAll(){
  		return mrepo.findAll();
	   
	 

}
}