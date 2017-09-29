import { Component, Input, Output, EventEmitter } from '@angular/core';
/*
@Component({
    selector:'css selector',
    template:'html design',
    templateUrl:'html file path',
    providers:['component own providers info']
    inputs :[attribute binding info]
    outputs: [event emiting properties],
    style: 'css styles'
    styleUrl:[css file urls]
})
*/
@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styles: [`.green {
        color:green    
    } .size {
        font-size: 20px;
    }`]
})
export default class AppComponent {
    private i: number = 10;
    private nonModelName:string = "nonModelName Bind"
    constructor() {

    }
    inputTxt() {
        return 'sample';
    }
    sendProps(txt: string) {
        console.log(txt);
    }
    nonModelListen(evt:KeyboardEvent){
      this.nonModelName = (<HTMLInputElement>evt.target).value;
    }
};

@Component({
    selector: 'temp',
    template: `<div>
        <input type="number"  [value]="propInfo" #refVar (input)="onInput(refVar.value)" />
    </div>`,
    inputs:['propInfo'], // set aliasName as attributeName:propertyName
    outputs:['propInfoChange']
})
export class Temp1 {
    // You can specify an input/output property either with a decorator or in a metadata array. Don't do both!
    //set alias name as @input('attributeName')
    //@Input()  
    private propInfo:number;
    //@Output()
    private propInfoChange: EventEmitter<number> = new EventEmitter<number>();
    constructor() {

    }
    onInput(value: string) {
        this.propInfoChange.emit(parseInt(value));
    }
}