package com.employeeengagment.magnit.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SurveyFormResult {
    private String employeeEngagementName;
    private List<Integer> employeeEngagementIndex;
    private String employeeEngagementOption;
}
