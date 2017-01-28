import {Component, OnDestroy} from '@angular/core';
import {AuthNetService} from "../src/angular-anet/angular-anet.service";
import {Subscription} from "rxjs";
import {AnetResponse, MerchantAuthentication, Message, OpaqueData} from "../src/angular-anet/angular-anet.model";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent implements OnDestroy{

  authNetResponses : Subscription;
  merchantAuth : MerchantAuthentication;

  constructor(private authNetService : AuthNetService){

    this.authNetResponses = authNetService
      .anetResponses
      .subscribe(this.onSuccess, this.onError);


  }

  submit(form){

    this.merchantAuth = new MerchantAuthentication();
    this.merchantAuth.clientKey = "";
    this.merchantAuth.apiLogin = "";
    this.authNetService.authorize(form);
  }

  private onError = (errMesg : Message) => {
    //alert errMesg

  }
  private onSuccess = (opaqueData : OpaqueData) => {

    //post opaqueData
  }

  ngOnDestroy(){
    this.authNetResponses.unsubscribe();
  }


}
