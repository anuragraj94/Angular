import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  contacts;
  selectedContact;

  constructor(public dataService: DataService) { }

  ngOnInit(): void {
    this.contacts = this.dataService.getContacts();
    console.log(this.contacts);
  }
  public selectContact(contact){
    this.selectedContact = contact;
  }

}
