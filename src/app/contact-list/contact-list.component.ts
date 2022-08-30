import { Component, OnInit } from '@angular/core';
import { contacts, Contact } from '../contacts';
import { ContactDataService } from '../contact-data.service'
import { FilterPipe } from '../filter.pipe'
import { faCircleMinus} from '@fortawesome/free-solid-svg-icons';

  import { faCirclePlus} from '@fortawesome/free-solid-svg-icons';
 import {faTrashCan} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  searchText: string = '';
  contact?: Contact[] | any;
  deleteMultiple: boolean = false;
  listEmpty?: boolean;
  selectItems: number[];
faCircleMinus = faCircleMinus;
faCirclePlus=faCirclePlus;
faTrashCan=faTrashCan;
  constructor(private contactDataService: ContactDataService) {
    this.selectItems = new Array<number>();

  }

  ngOnInit(): void {
    this.getContacts();
    // this.search();
  }


  getContacts(): void {
    this.contact = this.contactDataService.getContacts()

  }

  deleteContacts() {

    this.contactDataService.removeMultipleContacts(this.selectItems);
    this.deleteMultiple = false;
    this.getContacts();

  }

  onSelected(event: any, id: any) {
    if (event.target.checked) {
      this.selectItems.push(id)

    } else {
      this.selectItems = this.selectItems.filter(item => item !== id)
    }
  }

  remove(id: number) {
    console.log(id)
    // this.contactDataService.clearTo(this.contact)
    this.contactDataService.clearTo(id)
  

  }
}

