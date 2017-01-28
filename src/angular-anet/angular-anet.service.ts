import {Injectable} from "@angular/core";
import {WindowRef} from "./window-service";
import {Subject, Observable} from "rxjs";
import {AnetResponse, CardData, MerchantAuthentication, OpaqueData, Message} from "./angular-anet.model";


@Injectable()
export class AuthNetService{

  constructor(private windowRef : WindowRef){

    if(!windowRef.nativeWindow.Accept) throw "AuthorizeNet AcceptJS Dependency Missing";


    this.createAnetResponseHandler();

  }

  public merchantAuthentication : MerchantAuthentication;

  public anetResponses = this._anetResponse.asObservable();

  private _anetResponse = new Subject<OpaqueData>();


  authorize(cardData : CardData){
    let message = new Message();
    message.code = "0";
    if(!this.merchantAuthentication) {
      message.text = "Merchant Auth missing";
      this._anetResponse.error(message);
      return;

    }

    let secureData : any = {}, authData : any = {};

    secureData.cardData = cardData;
    authData.clientKey = this.merchantAuthentication.clientKey;
    authData.apiLoginID = this.merchantAuthentication.apiLogin;
    secureData.authData = authData;



    try{
      Accept.dispatchData(secureData, 'anetResponseHandler');
    }
    catch(ex){
      message.text = ex;
      this._anetResponse.error(message);
    }

  }



  private createAnetResponseHandler = () => {

    this.windowRef.nativeWindow['anetResponseHandler'] = (response : AnetResponse) => {
      if (response.messages.resultCode === 'Error') {
        for (var i = 0; i < response.messages.message.length; i++) {
          console.log(response.messages.message[i].code + ':' + response.messages.message[i].text);

        }
        this._anetResponse.error(response.messages.message[0]);

      }
      else{
        this._anetResponse.next(response.opaqueData);
      }


    }
  }


}
