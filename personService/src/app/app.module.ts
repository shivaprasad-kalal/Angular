import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { customerComponent } from './components/customer.component';
import { employeeComponent } from './components/employee.component';
import { studentComponent } from './components/student.component';

@NgModule({
  declarations: [
    AppComponent,
    employeeComponent,
    studentComponent,
    customerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [employeeComponent]
})
export class AppModule { }
