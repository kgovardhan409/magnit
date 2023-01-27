package com.employeeengagment.magnit.service;

import com.employeeengagment.magnit.model.SurveyFormData;
import com.employeeengagment.magnit.model.SurveyFormResult;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

@Service
public class SurveyFormDataServiceImp implements SurveyFormDataService {

    @Override
    public List<SurveyFormResult> surveyResults(List<SurveyFormData> surveyFormData) {
        List<SurveyFormResult> result = new ArrayList();

        List<Integer> list = new ArrayList();

        SurveyFormResult employeeFeedbackAboutCompany = new SurveyFormResult();
        SurveyFormResult employeeHappyOrSadDays = new SurveyFormResult();
        SurveyFormResult employeeHappyOrSadReason = new SurveyFormResult();


        surveyFormData.stream()
                .filter((item) -> {
                    if(item.getQuestion().equalsIgnoreCase("q1") || item.getQuestion().equalsIgnoreCase("q2") || item.getQuestion().equalsIgnoreCase("q3") ) {
                        list.add(item.getMarks());
                        return true;
                    } else {
                        if(item.getQuestion().equalsIgnoreCase("q4")){
                            employeeHappyOrSadDays.setEmployeeEngagementOption(item.getOption());
                            employeeHappyOrSadDays.setEmployeeEngagementName("employeeHappyOrSadDays");
                        }
                        else if(item.getQuestion().equalsIgnoreCase("q5")){
                            employeeHappyOrSadReason.setEmployeeEngagementOption(item.getOption());
                            employeeHappyOrSadReason.setEmployeeEngagementName("employeeHappyOrSadReason");
                        }
                        return false;
                    }
                }).collect(Collectors.toList());

        Integer sum = list.stream().reduce(0, (a, b) -> a + b);
//        calculating the percentage
//        sum = sum / 5 * 100;

        employeeFeedbackAboutCompany.setEmployeeEngagementName("employeeFeedbackAboutCompany");
        employeeFeedbackAboutCompany.setEmployeeEngagementIndex(list);
        result.add(0, employeeFeedbackAboutCompany);
        result.add(0, employeeHappyOrSadDays);
        result.add(0, employeeHappyOrSadReason);

        System.out.println(result);
        return result;
    }
}
