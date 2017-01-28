import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import {WindowRef} from "./window-service";
import {AuthNetService} from "./angular-anet.service";


@NgModule({
  declarations: [

  ],
  providers: [WindowRef,AuthNetService ],
  exports: [

  ],
  imports: [
    CommonModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AngularAnetModule { }
