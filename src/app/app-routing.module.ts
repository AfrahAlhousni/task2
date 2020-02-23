import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectmanagementpageComponent } from './projectmanagementpage/projectmanagementpage.component';
import { FinalprojectmanagementpageComponent } from './finalprojectmanagementpage/finalprojectmanagementpage.component';
import { LoginComponent } from './login/login.component';
import { ChecklistpageComponent } from './checklistpage/checklistpage.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  { path: 'login', component:LoginComponent},
  { path: 'checklist', component: ChecklistpageComponent },
  { path: 'projectmanagement', component: ProjectmanagementpageComponent},
  { path: 'createproject', component: FinalprojectmanagementpageComponent}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
