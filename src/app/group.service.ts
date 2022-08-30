import { Injectable } from '@angular/core';
import { ContactDataService } from './contact-data.service';
import { Group, groups } from './groups';

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  groupList: Group[] | any = groups;
  constructor(private contactDataService: ContactDataService) { }



  getGroupList() {
    return this.groupList;
  }

  getGroupListSize() {
    return this.groupList.length;
  }

  getNewIdValue() {
    if (this.getGroupListSize())
      return this.groupList[this.getGroupListSize() - 1].id + 1;
    else return 1;
  }
  addNewGroup(group: Group) {
    group.id = this.getNewIdValue();
    this.groupList.push(group);
  }

  getMemberNameFromId(id: number) {
    return this.contactDataService.getMemberName(id);
  }

}
