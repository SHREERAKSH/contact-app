import { Component, OnInit } from '@angular/core';
import { faCirclePlus} from '@fortawesome/free-solid-svg-icons';
import { GroupService } from '../group.service';
import { Group } from '../groups'

@Component({
    selector: 'app-contact-group',
    templateUrl: './contact-group.component.html',
    styleUrls: ['./contact-group.component.scss']
})
export class ContactGroupComponent implements OnInit {
    groupList?: Group[];
    // members?: Group[];
faCirclePlus=faCirclePlus;

    constructor(private groupService: GroupService) { }

    ngOnInit(): void {
        this.groupList = this.groupService.getGroupList();
    }
    //   getGroups(): void {
    //     this.groupList = this.contactDataService.getGroups()

    //   }

    memberNameFromId(id: number) {

        return this.groupService.getMemberNameFromId(id);
    }

}








