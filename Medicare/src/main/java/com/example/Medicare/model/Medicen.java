package com.example.Medicare.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Medicen {
	@Id
	@GeneratedValue
	private int id;
	private String MedicenName;
	private int Prize;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getMedicenName() {
		return MedicenName;
	}
	public void setMedicenName(String medicenName) {
		MedicenName = medicenName;
	}
	public int getPrize() {
		return Prize;
	}
	public void setPrize(int prize) {
		Prize = prize;
	}
	
	
	

}
