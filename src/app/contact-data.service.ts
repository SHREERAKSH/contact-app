import { Injectable, } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact, contacts } from './contacts'
import { groups, Group } from './groups';


@Injectable({
  providedIn: 'root'
})
export class ContactDataService {
  contactList: Contact[] = contacts;
  // groupList: Group[] = groups;
  contactIdsArray: number[] | any;
  addTo(contact: any) {
    contact.id = Math.random();
    this.contactList.push(contact);

  }
  getContactList() {
    return this.contactList;
  }
  getContacts = () => {
    return this.contactList;
  }



  clearTo(id: number) {
    const i = this.contactList.findIndex(c => c.id === id);

    if (i !== -1) {
      this.contactList.splice(i, 1)
    }

  }

  removeMultipleContacts(contactIdsArray: number[]) {
    for (let i = 0; i < contactIdsArray.length; i++) {
      this.contactList = this.contactList.filter(item => contactIdsArray[i] !== item.id);
      // console.log(this.contactList = this.contactList.filter(item => contactIdsArray[i] !== item.id))
    }
    this.getContacts();
    console.log(this.getContacts());

  }

  getMemberName(id: number) {
    const obj = this.contactList.find(con => con.id === id);
    return obj?.name;
  }

  constructor() { }


}
