import { Component } from "@angular/core";
@Component({
    selector : "shiva",
    templateUrl : "first.component.html"
})
export class firstComponent {
    private statement_one:string;
    private statement_two:string;
    private statement_three:string;
    constructor() {
        this.statement_one="Welcome to Ashok IT";
        this.statement_two="Course - UI Technologies";
        this.statement_three="Trainer - Mr.Samba";
    };
    public getStatementOne():string{
        return this.statement_one;
    }
    public getStatementTwo():string{
        return this.statement_two;
    }
    public getStatementThree():string{
        return this.statement_three;
    }
}