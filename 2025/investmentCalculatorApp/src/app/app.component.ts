import { Component, Input } from '@angular/core';
import { HeaderComponent } from '../app/components/header/header.component';
import { UserComponent } from './components/user/user.component';
import { ResultsComponent } from './components/results/results.component';
import { DummyRecords } from './models/dummyData';
import { User } from './models/user.model';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent, ResultsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Investment Calculator App';
  @Input({ required: true }) userId!: string;

  oninitView: boolean = true;

  user = DummyRecords; //{ id: '1', firstName: 'John', lastName: 'Doe', amount: 100 }; //;

  /* handleUserClick(message: string) {
    console.log(message);
    //this.selectedUser = this.data.find(user => user.name === message.split(': ')[1]);
  }

  // The trackBy function
  trackById(index: number, item: any): number {
    return item.id; // This helps Angular track the items by their 'id'
  } */
}
