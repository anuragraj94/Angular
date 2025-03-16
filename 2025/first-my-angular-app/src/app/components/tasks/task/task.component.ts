import { Component, inject, Input } from '@angular/core';

import { type Task } from '../../../models/task.model';
import { TasksService } from '../../../services/tasks.service';

@Component({
  selector: 'app-task',
  standalone: false,
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) tasks!: Task;

  private readonly tasksService = inject(TasksService);
  onCompleteTask() {
    this.tasksService.removeTask(this.tasks.id);
  }
}
