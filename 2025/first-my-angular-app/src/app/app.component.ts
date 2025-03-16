import { Component } from '@angular/core';
import { DUMMY_USERS } from "./models/dummy-users";


@Component({
  selector: 'app-root',
  standalone:false,
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
