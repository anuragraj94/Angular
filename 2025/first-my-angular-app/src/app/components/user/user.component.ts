import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type User } from "../../models/user.model";






@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  
  @Input({required:true}) user!: User;
  @Input({required:true}) selected!: boolean;
  @Output() select = new EventEmitter();  
  //select = output<string>();  // new approach
  
  
  public get imgagePath() : string {
    return 'assets/users/' + this.user.avatar 
   }
  
  onSelectUser(){
    this.select.emit(this.user.id);
  }


}
