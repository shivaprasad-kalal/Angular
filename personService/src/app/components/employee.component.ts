import { Component } from "@angular/core";
import { personService } from "../services/person.service";

@Component({
    selector:"employee",
    templateUrl:"./employee.component.html"
})
export class employeeComponent{
    emp_msg:string;
    constructor(private obj:personService){}
    ngOnInit(){
        this.emp_msg=this.obj.var_employee;
    }
}