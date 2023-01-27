package com.employeeengagment.magnit.service;

import com.employeeengagment.magnit.model.SurveyFormData;
import com.employeeengagment.magnit.model.SurveyFormResult;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;


public interface SurveyFormDataService {
   public List<SurveyFormResult> surveyResults(List<SurveyFormData> surveyFormData);
}
