import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class APIComponent implements OnInit {
  products = [];
  showDetails;
  modelEdit;
  newEntry : {id, name, lastName, mobileNo,address} = {id: null, name: "", lastName: "", mobileNo: "",address: ""};

  constructor(public dataService: DataService) { }

  public Getdata(){
    this.dataService.sendGetRequest().subscribe((data: any[]) => {
      this.products = data;
    });
  }

  ngOnInit(): void {
this.Getdata();
  }
  public Add(){
    console.log(this.newEntry);
    this.dataService.sendPostRequest(this.newEntry).subscribe(() => this.Getdata());
    this.newEntry = {id: null, name: "", lastName: "", mobileNo: "",address: ""};
  }

  public selectContact(product){
    this.showDetails = product;
  }
  public editContact(product){
    this.modelEdit = product;
    console.log("Edit "+this.modelEdit.id);
  }
  public delete(id){
    this.dataService.sendDeleteRequest(id).subscribe(() => this.Getdata());
    console.log('Delete '+id);
  }

}
