import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
// import { Contact } from './contacts/contact';
// import * from 'rxjs/add/operator/map';
// import { maxHeaderSize } from 'http';
// import { from } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http:Http) { }
  //retriving cnts

  getContacts(){
    return this.http.get('http://localhost:3000/api/contacts')
    // .map(res => res.json());
  }

  // add cnts

  addContact(newContact:any){
    var headers = new Headers();
    headers.append('Contact-Type','application/json');
    return this.http.post('http://localhost:3000/api/contacts', newContact,{headers:headers})
    // .map(res => res.json());
  }

  deleteContact(id:any){
    return this.http.delete('http://localhost:3000/api/contacts/'+id)
    // .map(res => res.json());
  }
}
