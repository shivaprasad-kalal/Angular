import {Injectable  } from "@angular/core";
@Injectable({
    providedIn:"root"
})
export class personService{
    var_employee:string;
    var_student:string;
    var_customer:string;

    constructor(){
        this.var_employee="Employee Data Soon...!";
        this.var_student="Student Data Soon...!";
        this.var_customer="Customer Data Soon...!";
    };
};