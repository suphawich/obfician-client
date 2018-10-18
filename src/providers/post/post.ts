import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { PostResponse } from '../../models/PostResponse';

/*
  Generated class for the PostProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PostProvider {

  constructor(public http: HttpClient) {
    console.log('Hello PostProvider Provider');
  }

  posts():Observable<PostResponse> {
    let url = "http://ofc.suphawich.science/api/posts";
    return this.http.get<PostResponse>(url)
  }
}
