package com.employeeengagment.magnit.controller;

import com.employeeengagment.magnit.model.SurveyFormData;
import com.employeeengagment.magnit.model.SurveyFormResult;
import com.employeeengagment.magnit.service.SurveyFormDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin("http://localhost:4200/")
public class EmpEnagementController {

    @Autowired
    SurveyFormDataService surveyFormDataService;

    @GetMapping("/")
    public String hello(){
        return "Welcome to world!!";
    }

    @PostMapping("/survey")
    public List<SurveyFormResult> surveyResults(@RequestBody List<SurveyFormData> surveyFormData){
        return surveyFormDataService.surveyResults(surveyFormData);
    }
}
