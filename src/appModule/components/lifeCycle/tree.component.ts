import {Component, OnChanges, OnDestroy, OnInit} from "@angular/core";
import CycleInfo from "./cycleInfo";
@Component({
    selector:'Tree',
    templateUrl:'./tree.component.html',
})
export default class Tree extends CycleInfo implements OnInit,OnChanges,OnDestroy {

    public voices:Array<string> = [];
    private voice:string;
    constructor(){
        super('Tree');
        this.pushToVoiceBox('I am alive');
    }
    pushToVoiceBox(msg:string){
        this.voices.push(msg || this.voice)
        this.voice = "";
    }
}