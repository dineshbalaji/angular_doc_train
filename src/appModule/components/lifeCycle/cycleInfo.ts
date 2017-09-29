import {OnChanges, OnDestroy, OnInit, SimpleChanges} from "@angular/core";
export default class CycleInfo implements OnChanges,OnInit,OnDestroy {
    constructor(private name:string){
        console.info(name+ '- constructor');
    }
    ngOnChanges(obj:SimpleChanges){
        /*
        *  OnChanges - Every input property change & first time initialize input value
        * */
        console.info (this.name+' - ngChange');
    }
    ngOnInit(){
        /*
        * OnInit - Once Angular component /Directive created & initialized, If Input property present then initialize value.
        *  OnInit fire after ngOnChange.
        * */
        console.info(this.name+' - OnInit');
    }
    ngOnDestroy(){
        /*
        * Destory - Before destory component / Directive
        * */
        console.info(this.name+' - Destroy')
    }
}