import {Component, OnDestroy} from '@angular/core';
import {AuthNetService} from "../src/angular-anet/angular-anet.service";
import {Subscription} from "rxjs";
import {
  AnetResponse, MerchantAuthentication, Message, OpaqueData,
  CardData
} from "../src/angular-anet/angular-anet.model";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent implements OnDestroy{

  authNetResponses : Subscription;
  merchantAuth : MerchantAuthentication;
  cardData : CardData;

  constructor(private authNetService : AuthNetService){

    this.authNetResponses = authNetService
      .anetResponses
      .subscribe(this.onSuccess, this.onError);


  }

  submit(form){

    this.merchantAuth = new MerchantAuthentication();
    this.merchantAuth.clientKey = "";
    this.merchantAuth.apiLogin = "";
    this.cardData = {
      fullName:form.fullName,
      cardNumber: form.cardNumber,
      cardCode:form.cardCode,
      zip:form.zip,
      month:form.month,
      year:form.year

    }
    this.authNetService.authorize(this.cardData);
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
