import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {User} from "../models/user";
import {Post} from "../models/post";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() {
  }

  // create store of users and posts

  usersStore$: BehaviorSubject<Array<User>> = new BehaviorSubject<Array<User>>([]);
  postsStore$: BehaviorSubject<Array<Post>> = new BehaviorSubject<Array<Post>>([]);

}
