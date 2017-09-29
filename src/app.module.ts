import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser'
import AppComponent,{Temp1} from './appModule/components/app/app.component';
import GalaxyComponent from './appModule/components/lifeCycle/galaxy.compont'
import PlantComponent from './appModule/components/lifeCycle/plant.component'
import MoonComponent from './appModule/components/lifeCycle/moon.component';
import TreeComponent from './appModule/components/lifeCycle/tree.component'
import {FormsModule} from "@angular/forms" // require for form releated activity and ngModel
console.log(1+'da');
/*
NgModule({
    imports => imports Other module into your angular module. Once we import module, we can use components which are exported by the imported module   
    exports:
    declarations => Declear view component (Components | directive | pipe) 
    providers => Service class decleartions which going to ready global level DJ. 
    bootstrap => root component which going to render first
})

*/
@NgModule({
    declarations:[AppComponent, Temp1,GalaxyComponent,PlantComponent,TreeComponent,MoonComponent],
    imports:[BrowserModule,FormsModule], // BrowserModule should import for application run in browser
    exports:[],
    providers:[],
    bootstrap:[GalaxyComponent]
})
export default class AppModule {
       
};