import { Component } from '@angular/core';
import { DUMMY_USERS } from "../dummy-users";



const randomIndex = Math.floor(Math.random()* DUMMY_USERS.length)

// Before clean up
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  
  selectedUser = DUMMY_USERS[randomIndex];
  
  get imgagePath() {
    return 'assets/users/' + this.selectedUser.avatar
  }
  
  onSelectUser(){
    console.log('Clicked!')
    const randomIndex = Math.floor(Math.random()* DUMMY_USERS.length)
    this.selectedUser = DUMMY_USERS[randomIndex];
  }
}
