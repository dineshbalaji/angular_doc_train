import {
    AfterContentChecked,
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit, Component, ContentChild, OnChanges, OnDestroy, OnInit, SimpleChanges,
    ViewChild
} from "@angular/core";
import CycleInfo from "./cycleInfo";
import Tree from "./tree.component"
import Moon from "./moon.component";
@Component({
    selector:'Plant',
    templateUrl:'./plant.component.html',
    inputs:['gravity']
})
export default class Plant extends CycleInfo implements OnChanges,OnInit,OnDestroy, AfterViewInit , AfterViewChecked, AfterContentInit,AfterContentChecked {
    private gravity:number;
    private treeVoices:Array<string> = [];
    private moonVoices:Array<string>= [];
    @ViewChild(Tree) private tree:Tree;
    @ContentChild(Moon) private moon:Moon;
    constructor(){
        super('Plant');
    }
    /*
    * ngAfterViewInit & ngAfterViewChecked
    *
    * Called Once inner components are get ready to accesss the instance.

      ngAfterContentInit & ngAfterContentChecked
      Called once ngContent are included and ready to use instance.
    * */
    ngAfterViewInit(){
        console.log('Plant - afterViewChild init',this.tree);
    }
    ngAfterViewChecked(){
        console.log('Plant - afterViewChild checked', this.tree);
    }
    ngAfterContentInit(){
        console.log('Plant - afterContent Init',this.moon);
    }
    ngAfterContentChecked(){
        console.log('Plant - afterContent checked', this.moon);
    }
    isEqual<T>(a1:Array<T>, a2:Array<T>):boolean {
        return a1.length == a2.length && a1.every((e,i)=> a1[i] == a2[i]);
    }
    updateTreeVoice(){
        this.treeVoices =  [...this.tree.voices];
    }
}