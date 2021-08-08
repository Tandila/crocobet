import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {DataService} from "../../store/data.service";
import {Subscription} from "rxjs";
import {Post} from "../../models/post";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit, OnDestroy {

  postSub: Subscription = new Subscription();
  posts: Array<Post> = [];

  constructor(private route: ActivatedRoute,
              private dataStore: DataService) {
  }
  // check url params id for posts existence and filter by id of user
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.postSub = this.dataStore.postsStore$.subscribe((posts) => {
        this.posts = posts.filter(post => post.userId === +params.id);
      });
    });
  }

  // unsubscribe after destroy component prevent memory leak
  ngOnDestroy(): void {
    this.postSub.unsubscribe();
  }

}
