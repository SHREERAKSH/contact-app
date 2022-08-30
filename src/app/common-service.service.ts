import { Location } from '@angular/common';
import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
})
export class CommonService {

    constructor(private Location: Location) { }


    goBack(): any {
        this.Location.back();
    }
}
