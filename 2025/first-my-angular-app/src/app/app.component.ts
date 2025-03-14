import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from "./dummy-users";
import { TasksComponent } from "./tasks/tasks.component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first-my-angular-app';
  users = DUMMY_USERS;

  onSelectedUserId?: string ;

  get selectedUser(){
    return this.users.find((x) => x.id === this.onSelectedUserId);
  }

  onSelectUser(id:string){
this.onSelectedUserId = id;
  }

}
