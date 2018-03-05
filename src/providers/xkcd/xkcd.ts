import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the XkcdProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class XkcdProvider {

  // private baseApiPrefix = "http://xkcd.com/"
  private baseApiPrefix = "/api"
  private baseApiSufix = "info.0.json"
  
  constructor(public http: HttpClient) {
    console.log('Hello XkcdProvider Provider');
  }

  public getLatest():any {
    // return new Promise(resolve => {
      let headers = new HttpHeaders();
      headers.append('Access-Control-Allow-Origin', '*');
      headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
      headers.append('Content-Type', 'application/json');
      headers.append('Accept', 'application/json');
      let options = { headers: headers };
    
      // this.http.get(this.baseApiPrefix + this.baseApiSufix, options).subscribe(data => {
    this.http.get('https://jsonplaceholder.typicode.com/posts/', options).subscribe(data => {
        console.log(data);
      }, err => {
        console.log(err);
      });
    // });
    // return this.http.get(this.baseApiPrefix+this.baseApiSufix)
  }

  public getComicByNumber(comicNumber):any{
    return this.http.get(this.baseApiPrefix + comicNumber+ this.baseApiSufix);
  }

}
