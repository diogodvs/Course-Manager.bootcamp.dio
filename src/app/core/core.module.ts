import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Error404Component } from "./component/error-404/error-404.component";
import { navBarComponent } from "./component/nav-bar/nav-bar.component";

@NgModule({
  declarations: [
    navBarComponent,
    Error404Component,
  ],
  imports: [
    RouterModule.forChild([
      {
        path: '**', component: Error404Component
      }
    ]),
  ],
  exports: [
    navBarComponent,
  ]
})

export class CoreModule {

}