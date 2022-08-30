import { Component, OnInit } from '@angular/core';
import { Contact, contacts } from '../contacts';
import { ContactDataService } from '../contact-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { faCirclePlus} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent implements OnInit {

  form = {

    name: '',
    phone: '',
    email: '',

  }
faCirclePlus=faCirclePlus;

  contactList: Contact | any;

  constructor(private route: ActivatedRoute,
    private router: Router,

    private contactDataService: ContactDataService) {

  }
  onSubmit() {
    if (this.form.name === '' || this.form.phone === '') {
      alert("please enter the required details");
    } else {
      this.contactDataService.addTo(this.form);
      alert("added");
      this.router.navigate(['/contactList'])
      return;
    }

  }




  ngOnInit(): void {


  }
}
