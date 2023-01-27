package com.employeeengagment.magnit.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SurveyFormData {
    private String question;
    private Integer marks;

    private String option;
}
