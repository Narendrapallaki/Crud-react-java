package com.example.Controllerr;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.Entity.Student;
import com.example.Exception.NoDatafound;
import com.example.Service.ServiceInterface;
import com.example.Service.ServiceInter;

@CrossOrigin("*")
@RestController
public class Contro {

    @Autowired
    public ServiceInterface inter;
    @Autowired
    public ServiceInter serviceInter;

    @PostMapping("/save")
    public ResponseEntity<Object> savaMethod(@RequestBody Student student) {

        Student sSave = inter.sSave(student);

        return new ResponseEntity<>(sSave, HttpStatus.CREATED);

    }
    //this line is for testing working of merge in main branch
    //-------------------
    @GetMapping("/getAll")
    public ResponseEntity<List<Student>> getAll() {
        List<Student> allDeta = inter.getAllData();

        return new ResponseEntity<>(allDeta, HttpStatus.OK);

    }

    @DeleteMapping("/delete/{integer}")
    public ResponseEntity<String> deleted(@PathVariable Integer integer) throws NoDatafound {

        String byIdMe = inter.deleteByIdMe(integer);

        return new ResponseEntity<String>(byIdMe, HttpStatus.OK);

    }

    @PutMapping("/update/{id}")
    public ResponseEntity<String> upsa(@RequestBody Student student, @PathVariable("id") Integer id) throws NoDatafound {

        Integer intId = Integer.valueOf(id);

        String upsave = inter.upsave(student, intId);

        return new ResponseEntity<String>(upsave, HttpStatus.OK);

    }

}
