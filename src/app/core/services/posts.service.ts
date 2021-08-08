import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {Post} from "../models/post";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) {
  }

  getPosts(): Observable<Array<Post>> {
    return this.http.get<Array<Post>>(`${environment.api}/posts`);
  }
}
