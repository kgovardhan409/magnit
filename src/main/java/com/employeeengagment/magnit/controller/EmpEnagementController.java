package com.employeeengagment.magnit.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class EmpEnagementController {

    @GetMapping("/")
    public String hello(){
        return "Welcome to world!!";
    }
}
