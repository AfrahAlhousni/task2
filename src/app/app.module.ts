import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { Routes, RouterModule } from '@angular/router';
import { ProjectmanagementpageComponent } from './projectmanagementpage/projectmanagementpage.component';
import { FinalprojectmanagementpageComponent } from './finalprojectmanagementpage/finalprojectmanagementpage.component';
import { LoginComponent } from './login/login.component';
import { ChecklistpageComponent } from './checklistpage/checklistpage.component';
import { AppComponent } from './app.component';

// const ROUTES: Route[] = [

//   {path: '**' , component: ChecklistpageComponent ,pathMatch:'full'}

//   // { path: 'home', component: HomeComponent}

// ];

const routes: Routes = [
  { path: 'login', component:LoginComponent},
  { path: 'checklist', component: ChecklistpageComponent },
  { path: 'projectmanagement', component: ProjectmanagementpageComponent},
  { path: 'createproject', component: FinalprojectmanagementpageComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' }

  // // otherwise redirect to home
  // { path: '**', redirectTo: '' }
];

// export const appRoutingModule = RouterModule.forRoot(routes);


@NgModule({
  declarations: [
    AppComponent,
    ChecklistpageComponent,
    ProjectmanagementpageComponent,
    FinalprojectmanagementpageComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
