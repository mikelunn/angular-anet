/**
 * Created by complunm on 1/28/17.
 */
export class AuthData{
  apiLoginId:string;
  clientKey:string;
}
export class MerchantAuthentication{
  clientKey:string;
  apiLogin:string;
}
export class CardData{
  cardNumber:string;
  month:string;
  year:string;
  cardCode?:string;
  zip?:string;
  fullName?:string;
}
export class AnetResponse{
  messages:Messages;
  opaqueData:OpaqueData
}


export class Message{
  code:string;
  text:string;
}
export class Messages{
  resultCode:string;
  message:Message[];
}
export class OpaqueData{
  dataDescriptor:string;
  dataValue:string;
}
