import { Component, EventEmitter, Input, Output, output } from '@angular/core';

import { type User } from "./user.model";






@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  
  @Input({required:true}) user!: User;

  
  @Output() select = new EventEmitter();  
  //select = output<string>();  // new approach
  
  
  public get imgagePath() : string {
    return 'assets/users/' + this.user.avatar 
   }
  
  onSelectUser(){
    this.select.emit(this.user.id);
  }


}
