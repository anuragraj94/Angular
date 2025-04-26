import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { AppModule } from './app.module';

@Component({
  selector: 'app-root',
  standalone: false,
  imports: [RouterOutlet, TodoComponent, AppModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'todo-list-app';
}
