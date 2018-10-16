import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ShowcaseResponse } from '../../models/ShowcaseResponse';

/*
  Generated class for the ShowcaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ShowcaseProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ShowcaseProvider Provider');
  }

  items():Observable<ShowcaseResponse> {
    return this.http.get<ShowcaseResponse>("http://localhost:8000/api/items")
  }
}
