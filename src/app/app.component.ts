import {Component, OnInit} from '@angular/core';
import {UsersService} from "./core/services/users.service";
import {PostsService} from "./core/services/posts.service";
import {DataService} from "./core/store/data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'crocobet';

  constructor(private usersService: UsersService,
              private postsService: PostsService,
              public dataService: DataService) {
  }
  // Call Api on Loading Page and save in store variable
  ngOnInit(): void {
    this.getUsers();
    this.getPosts();
  }

  getUsers() {
    this.usersService.getUsers()
      .subscribe(users => {
        this.dataService.usersStore$.next(users);
      });
  }

  getPosts() {
    this.postsService.getPosts()
      .subscribe(posts => {
        this.dataService.postsStore$.next(posts);
      });
  }
}
