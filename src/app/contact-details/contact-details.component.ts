import { Component, OnInit } from '@angular/core';
import { ContactDataService } from '../contact-data.service'
import { Contact, contacts } from '../contacts';
import { Location } from '@angular/common'
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {

  contact?: Contact | any;

  constructor(private route: ActivatedRoute,
    private contactDataService: ContactDataService,
    private Location: Location) { }

  getContacts(): void {
    // this.contact = this.contactDataService.getContacts()
    const id = Number(this.route.snapshot.paramMap.get('id'));
    // this.contact = this.contact.find((c) => c.id === id);
    this.contact = this.contactDataService.getContacts().find((c) => c.id === id);

  }

  ngOnInit(): void {
    this.getContacts()

  }
  goBack(): any {
    this.Location.back();
  }
}