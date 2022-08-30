import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Contact } from '../contacts'
import { ContactDataService } from '../contact-data.service'
import { GroupService } from '../group.service'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
// import { CommonServiceService } from '../common-service.service'
import { Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-group-add',
  templateUrl: './group-add.component.html',
  styleUrls: ['./group-add.component.scss']
})
export class GroupAddComponent implements OnInit {

  constructor(private contactDataService: ContactDataService,
    private Location: Location,
    private groupService: GroupService,
    private router: Router
  ) {

    this.reactiveForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      members: new FormControl([]),
    })

  }
  faCirclePlus = faCirclePlus;

  ngOnInit(): void {
    this.contactList = this.contactDataService.getContactList();
  }
  reactiveForm: FormGroup;
  contactList?: Contact[];
  selectedMembers: number[] = [];
  // selectedMembersExists: boolean = false;


  onSelect(event: any, id: any) {
    if (event.target.checked) {
      this.selectedMembers.push(id);
    } else {
      this.selectedMembers = this.selectedMembers.filter(item => item !== id)
    }
  }
  submitContact() {
    this.reactiveForm.value.members = this.selectedMembers;
    if (this.reactiveForm.valid) {
      if (this.selectedMembers.length === 0) {
        alert("Please select contacts for group!");
      } else {
        this.groupService.addNewGroup(this.reactiveForm.value);
        alert("Group created successfully")
        this.router.navigate(["/contactGroup"]);
      }
    }

    // if (!this.reactiveForm.valid) {
    //       if (this.selectedMembers.length === 0) {
    //         alert("Please select contacts for group!");
    //       } else {
    //         this.groupService.addNewGroup(this.reactiveForm.value);
    //         alert("Group created successfully")
    //         this.router.navigate(["/contactGroup"]);
    //       }
    //     }


  }


  goBack(): any {

    this.Location.back();
  }
}







