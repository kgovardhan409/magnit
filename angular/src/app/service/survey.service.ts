import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {
  result !: any;
  sendData(result: any) {
    this.result = result;
  }

  url: String = "http://localhost:8080"

  constructor(private http: HttpClient) { }

  surveyFormData(request: any): Observable<any>{
    return this.http.post(this.url+"/survey", request)
  }
}
