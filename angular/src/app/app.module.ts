import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SurveyComponent } from './survey/survey.component';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule } from '@angular/forms';
import { ReportComponent } from './report/report.component'

@NgModule({
    declarations: [
        AppComponent,
        SurveyComponent,
        ReportComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule
    ]
})
export class AppModule { }
