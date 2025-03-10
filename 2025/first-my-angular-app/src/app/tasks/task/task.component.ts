import { Component, EventEmitter, Input, Output } from '@angular/core';

import { type Task } from "./task.model";


@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
@Input({required:true}) tasks! : Task
@Output() complete =new EventEmitter<string>();


onCompleteTask(){
  this.complete.emit(this.tasks.id);
}

}
