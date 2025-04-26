import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Todo {
  task: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo',
  imports: [FormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
})
export class TodoComponent {
  todos: Todo[] = [];
  newTask: string = '';

  addTodo() {
    if (this.newTask) {
      this.todos.push({ task: this.newTask, completed: false });
      this.newTask = '';
    }
  }

  deleteTodo(index: number) {
    this.todos.splice(index, 1);
  }

  toggleCompletion(todo: Todo) {
    todo.completed = !todo.completed;
  }
}
