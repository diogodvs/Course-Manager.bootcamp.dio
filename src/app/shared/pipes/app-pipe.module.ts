import { NgModule } from "@angular/core";
import { ReplacePipe } from "./replace.pipe/replace.pipe";

@NgModule({
  declarations:[
    ReplacePipe,
  ],
  exports:[
    ReplacePipe,
  ]
  
})
export class AppPipeModule{

}