import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PostsComponent} from "./components/posts/posts.component";
import {UsersComponent} from "./components/users/users.component";
import {HttpClientModule} from "@angular/common/http";
import {UserComponent} from './components/user/user.component';
import {RouterModule} from "@angular/router";


// Define Core module for root imports

@NgModule({
  declarations: [
    PostsComponent,
    UsersComponent,
    UserComponent
  ],
  exports: [
    UsersComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  providers: []
})
export class CoreModule {
}
