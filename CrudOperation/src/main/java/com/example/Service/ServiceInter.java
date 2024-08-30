package com.example.Service;


import java.util.List;

import com.example.Repositery.StudentRepo;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.Entity.Student;
import com.example.Exception.NoDatafound;


@Slf4j
@Service
public class ServiceInter implements ServiceInterface {

    @Autowired
    public StudentRepo repo;


    @Override
    public Student sSave(Student student) {
        Student save = repo.save(student);
        return save;
    }

    @Override
    public List<Student> getAllData() {

        return (List<Student>) repo.findAll();
    }

    @Override
    public String deleteByIdMe(Integer integer) {
        repo.deleteById(integer);
		return "data Deleted";

    }

    @Override
    public String upsave(Student us, int id) throws NoDatafound {

        Student student = repo.findById(id).orElseThrow(() -> new NoDatafound("Id not found")
        );
        student.setMobile(us.getMobile());
        student.setName(us.getName());
        student.setPlace(us.getPlace());
        log.info("Data updated {}", student);
        repo.save(student);
        return "User data Updated.......!";
    }

    @Override
    public Student fetchById(int id) {
        return repo.findById(id).get();
    }


}
