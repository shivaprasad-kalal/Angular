import { Component } from "@angular/core";
import { personService } from "../services/person.service";

@Component({
    selector:"student",
    templateUrl:"./student.component.html"
})
export class studentComponent{
    student_msg:string;

    constructor(private obj:personService){}
    ngOnInit(){
        this.student_msg=this.obj.var_student;
    }
}