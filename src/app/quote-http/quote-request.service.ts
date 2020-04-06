import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment } from '../../environments/environment';
import { QuoteClass } from '../quote-class';



@Injectable({
  providedIn: 'root'
})
export class QuoteRequestService {
  // creates property quote assign t to type  Quoteclass
  quote:QuoteClass;


  constructor(private http:HttpClient) {
    this.quote=new QuoteClass('','');
   }

  //  create a functon
   quoteRequest(){
     interface ApiResponse{
       author:string,
       quote:string
     }
    //  craete a promise and the toPromise method converts http request to a promise which creates 2 functions response and error
     let promise=new Promise((resolve,reject)=>{
       this.http.get<ApiResponse>(environment.apiUrl).toPromise().then(response=>{
         this.quote.quote=response.quote
         this.quote.author=response.author
         resolve();
       },error=>{
         this.quote.quote='Kill them when still young'
         this.quote.author='Winston Churchill'
         reject(error);
       })
     })
     return promise;
   }
}
