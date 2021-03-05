import { Component } from "@angular/core";
import { personService } from "../services/person.service";

@Component({
    selector:"customer",
    templateUrl:"./customer.component.html"
})
export class customerComponent{
    customer_msg:string;
    constructor(private obj:personService){}
    ngOnInit(){
        this.customer_msg=this.obj.var_customer;
    }
}