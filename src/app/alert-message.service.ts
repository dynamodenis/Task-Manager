import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertMessageService {

  constructor() { }
  alertMe(message:String){
    alert(message);
  }
}
