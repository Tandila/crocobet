import {Component, OnInit} from '@angular/core';
import {DataService} from "../../store/data.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(public dataService: DataService) {
  }

  ngOnInit(): void {
  }

}
