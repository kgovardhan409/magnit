import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportComponent } from './report/report.component';
import { SurveyComponent } from './survey/survey.component';

const routes: Routes = [

  {path:'report', component: ReportComponent},
  {path: '', pathMatch:'full', redirectTo: 'survey'},
  {path: 'survey', component: SurveyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
