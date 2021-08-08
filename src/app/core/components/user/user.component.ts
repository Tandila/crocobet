import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {DataService} from "../../store/data.service";
import {User} from "../../models/user";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, OnDestroy {

  public user: User | undefined;
  userSub: Subscription = new Subscription();

  constructor(private route: ActivatedRoute,
              private dataStore: DataService) {
  }

  // check url params id for users existence and find by id of user
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.userSub = this.dataStore.usersStore$.subscribe((users) => {
        this.user = users.find(user => user.id === +params.id);
      });
    });
  }

  // unsubscribe after destroy component prevent memory leak
  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }

}
