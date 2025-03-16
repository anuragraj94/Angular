import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TasksComponent } from '../../tasks/tasks.component';
import { TaskComponent } from '../../tasks/task/task.component';
import { NewTaskComponent } from '../../tasks/new-task/new-task.component';
import { SharedModule } from './card';

@NgModule({
  declarations: [TasksComponent, TaskComponent, NewTaskComponent],
  exports: [TasksComponent],
  imports: [CommonModule, FormsModule, SharedModule],
})
export class TasksModule {}
