import { Component, EventEmitter, Input, Output, output } from '@angular/core';




interface User {
  id : string;
  avatar : string;
  name : string;
}


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  
  /*@Input({required:true}) id!: string;
  @Input({required:true}) avatar!: string;
  @Input({required:true}) name!: string;*/
  @Input({required:true}) user!: User;

  /* Another way of input
  @Input({required:true}) user! : {
    id : string;
    avatar : string;
    name : string;
  };*/
  @Output() select = new EventEmitter();  
  //select = output<string>();  // new approach
  
  
  public get imgagePath() : string {
  //  return 'assets/users/' + this.avatar 
    return 'assets/users/' + this.user.avatar 
   }
  
  onSelectUser(){
    //this.select.emit(this.id);
    this.select.emit(this.user.id);
  }
}
