import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {User} from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<Array<User>> {
    return this.http.get<Array<User>>(`${environment.api}/users`);
  }
}
