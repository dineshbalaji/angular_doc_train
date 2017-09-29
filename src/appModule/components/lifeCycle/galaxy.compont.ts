import {Component} from "@angular/core";
@Component({
    selector:'Galaxy',
    templateUrl:'./galaxy.component.html'
})
export default class GalaxyComponent {
    private gravityNo:number;
    private earthOn:boolean =false;
    constructor(){
    }
}