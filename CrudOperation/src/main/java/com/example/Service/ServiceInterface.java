package com.example.Service;

import java.util.List;

import com.example.Entity.Student;
import com.example.Exception.NoDatafound;


public interface ServiceInterface {
	
	
    public Student sSave(Student student);
    public Student fetchById(int id);
    public List<Student>getAllData();
    public String deleteByIdMe(Integer integer);
    public String upsave(Student us,int id) throws NoDatafound;
    
    
}
