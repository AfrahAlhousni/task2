import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ChecklistpageComponent } from './checklistpage/checklistpage.component';

import { Routes, RouterModule } from '@angular/router';
import { ProjectmanagementpageComponent } from './projectmanagementpage/projectmanagementpage.component';


// const ROUTES: Route[] = [

//   {path: '**' , component: ChecklistpageComponent ,pathMatch:'full'}

//   // { path: 'home', component: HomeComponent}

// ];

// const routes: Routes = [
//   { path: '', component:ChecklistpageComponent  },
//   // { path: 'login', component: LoginComponent },
//   // { path: 'register', component: RegisterComponent },

//   // // otherwise redirect to home
//   // { path: '**', redirectTo: '' }
// ];

// export const appRoutingModule = RouterModule.forRoot(routes);


@NgModule({
  declarations: [
    AppComponent,
    ChecklistpageComponent,
    ProjectmanagementpageComponent
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
