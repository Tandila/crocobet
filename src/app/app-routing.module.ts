import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PostsComponent} from "./core/components/posts/posts.component";
import {UserComponent} from "./core/components/user/user.component";
import {UsersComponent} from "./core/components/users/users.component";

// http://localhost:4200/ -> HomeComponent
// http://localhost:4200/posts -> PostsComponent
// http://localhost:4200/user -> UserComponent

const routes: Routes = [
  {path: '', component: UsersComponent},
  {path: 'users', redirectTo: '/', pathMatch: 'full'},
  {path: 'posts', redirectTo: '/', pathMatch: 'full'},
  {path: 'posts/:id', component: PostsComponent},
  {path: 'users/:id', component: UserComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
