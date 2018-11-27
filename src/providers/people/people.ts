import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the PeopleProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()


export class PeopleProvider {
  private apiUrl = "https://randomuser.me/api/?results=20";
  constructor(public http: HttpClient) {
    console.log('Hello PeopleProvider Provider');
  }
getPeopleFromApi(){
  return this.http.get(this.apiUrl)
}

}



