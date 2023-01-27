import {Component, Directive, Input, ViewChild} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SurveyService } from '../service/survey.service';
import { Chart } from 'chart.js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})



export class SurveyComponent {
  


  surveyForm = this.fb.group(

    {
      q1: ["", Validators.required],
      q2: ["", Validators.required],
      q3: ["", Validators.required],
      q4: ["", Validators.required],
      q5: ["", Validators.required],
    }

  )
  result: any = null;
  
  single ?: any[];
  view= [700, 400];

  constructor(private fb: FormBuilder, private surveyService: SurveyService, private router: Router) { 
    // Object.assign(this, { single });
  }

  ngOnInit() {

  }

  submitSurveyForm() {
    if (this.surveyForm.valid) {
      console.log(this.surveyForm.value);
      const request = [
        { question: 'q1', marks: this.surveyForm.value.q1 },
        { question: 'q2', marks: this.surveyForm.value.q2 },
        { question: 'q3', marks: this.surveyForm.value.q3 },
        { question: 'q4', option: this.surveyForm.value.q4 },
        { question: 'q5', option: this.surveyForm.value.q5 },
      ]
      this.surveyService.surveyFormData(request).subscribe(
        (response) => {
          this.result = response;
          // this.ngAfterViewInit(this.result);
        },
        (error) => {
          alert("Some back end error, Please try again later")
        }
      );
    } else {
      console.log(this.surveyForm.value);
      alert("Please enter mandatory fields");
      this.result = null;
    }

  }


}

export interface data {
  [key: string]: any;
};
