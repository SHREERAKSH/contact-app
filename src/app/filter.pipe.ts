import { Pipe, PipeTransform } from '@angular/core';
import { Contact, contacts } from './contacts';

@Pipe({ name: 'appFilter' })
export class FilterPipe implements PipeTransform {
    /**
     * Pipe filters the list of elements based on the search text provided
     *
     * @param items list of elements to search in
     * @param searchText search string
     * @returns list of elements filtered by search text or []
    //  */

    transform(contact: Contact[], searchText: string): any {
        if (contact.length === 0 || searchText === '') {
            // console.log(contact)
            return contact;
        }
        else {

            return (contact.filter((c) => {
                return c.name.toLowerCase().includes(searchText.toLowerCase())
            }));

        }

    }
}


