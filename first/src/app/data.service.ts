import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  contacts = [
    {id: 1, name: 'Contact 001', description: 'Contact 001 des', email: 'c001@email.com'},
    {id: 2, name: 'Contact 002', description: 'Contact 002 des', email: 'c002@email.com'},
    {id: 3, name: 'Contact 003', description: 'Contact 003 des', email: 'c003@email.com'},
    {id: 4, name: 'Contact 004', description: 'Contact 004 des', email: 'c004@email.com'}
  ];
  // private REST_API_SERVER = "https://jsonplaceholder.typicode.com/users";
  private REST_API_SERVER = 'http://localhost:64275/api/home';
  private testApi='https://my-json-server.typicode.com/techsithgit/json-faker-directory/profiles';

  constructor(private httpClient: HttpClient) { }

  public sendGetRequest(){
    return this.httpClient.get(this.REST_API_SERVER);
  }
  public sendGetRequestId(id){
    return this.httpClient.get(this.REST_API_SERVER+'/'+id);
  }
   public sendDeleteRequest(id){
     return this.httpClient.delete('http://localhost:64275/api/home/' + id);
  }
  public sendPostRequest(data){
     var data1= {
      name: data.name,
      lastName: data.lastName,
      mobileNo: data.mobileNo,
      address: data.address
  }
     return this.httpClient.post(this.REST_API_SERVER,   data1  );
  }
  public sendPutRequest(id,data){
    console.log(id);
    console.log(data);
    var data1= {
      name: "KUMAR",
      lastName: "VERMA",
      mobileNo: "9876543210",
      address: "B-35"
 }
 //console.log(data1);
    return this.httpClient.put(this.REST_API_SERVER+'/'+id,   data1  );
 }

  public getContacts():Array<{id, name, description, email}>{
    return this.contacts;
  }
  public createContact(contact: {id, name, description, email}){
    this.contacts.push(contact);
  }


  public getData():Array<{id, name, description, email}>{
    return this.contacts;
  }
}
