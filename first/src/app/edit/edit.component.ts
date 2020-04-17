import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  name = new FormControl('');

  alertMsg:boolean=false;
  msg:string="";
  products ;
  id;

  constructor(public dataService: DataService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
 this.dataService.sendGetRequestId(this.id).subscribe((data: any[]) => {
      this.products = data;
      console.log(data);
    });
    console.log("Got id = "+this.id);
  }

  public Update(){
    this.dataService.sendPutRequest(this.id,this.products).subscribe((data: any[]) => {
      this.alertMsg=true;
      console.log(data);
    });
  }



  close(){
    this.alertMsg=false;
  }

}
