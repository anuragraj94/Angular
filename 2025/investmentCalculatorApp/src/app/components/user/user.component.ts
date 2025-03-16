import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../models/user.model';
import { FormsModule } from '@angular/forms';
import { DummyRecords } from '../../models/dummyData';

@Component({
  selector: 'app-user',
  imports: [FormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) userId!: string;
  @Output() close = new EventEmitter<void>();
  enteredFirstName = '';
  enteredLastName = '';
  enteredAmount = '';

  private tasks = DummyRecords;
  constructor() {
    const tasks = localStorage.getItem('tasks');

    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }
  submitted = false;
  id = 11;
  onSubmit() {
    const newUser = {
      //id: Date.now().toString(), // Use timestamp for unique ID
      id: this.id++ + '', // Use timestamp for unique ID
      firstName: this.enteredFirstName,
      lastName: this.enteredLastName,
      amount: this.enteredAmount,
    };

    this.tasks.unshift(newUser);
    this.submitted = true;
  }
}
