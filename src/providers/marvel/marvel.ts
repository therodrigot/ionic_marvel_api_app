import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as Constants from '../../app/constants';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the MarvelProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MarvelProvider {
  
  private apiBaseUrl:string = Constants.API_BASE_URL;
  private apiBaseSuffix: string = Constants.API_BASE_SUFFIX + Constants.API_KEY;
  private itemsPerPage = Constants.ITEMS_PER_PAGE;
  
  constructor(public http: HttpClient) {
    console.log('Hello MarvelProvider Provider');
  }

  public getCharacters(page:number = 0):Observable<object>{
    var offset = page*this.itemsPerPage;
    var url = this.apiBaseUrl + "characters" + this.apiBaseSuffix + "&limit=" + this.itemsPerPage + "&offset=" + offset;
    return this._getCall(url);
  }

  public getCharacterDetail(charid): Observable<object>{
    var url = this.apiBaseUrl + "characters/" + charid + this.apiBaseSuffix;
    return this._getCall(url);
  }

  private _getCall(url):Observable<object> {
    console.log('_getCall',url)
    return this.http.get(url);
  }

}
