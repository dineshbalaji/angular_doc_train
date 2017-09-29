import {Component, OnChanges, OnInit, SimpleChanges} from "@angular/core";
import CycleInfo from "./cycleInfo";
@Component({
    selector:'Moon',
    templateUrl:'./moon.component.html',
    inputs:['gravity']
})
export default class Moon extends CycleInfo implements OnChanges,OnInit{
    private gravity:number;
    public voices:Array<string> =[];
    public voice:string;
    constructor(){
        super('Moon');
        this.pushToVoiceBox('i am alive');
    }
    pushToVoiceBox(msg:string) {
        this.voices.push(msg || this.voice);
        this.voice = "";
    }
}