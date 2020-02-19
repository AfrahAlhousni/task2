import { Component } from '@angular/core';
import { ChecklistpageComponent } from './checklistpage/checklistpage.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task2';
  rootPage:any = ChecklistpageComponent;
}
