import { Component, EventEmitter, Input, Output, output } from '@angular/core';

import { type User } from "./user.model";
import { CardComponent } from "../shared/card/card.component";






@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  imports: [CardComponent]
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
