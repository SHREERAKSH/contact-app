import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'
import { FilterPipe } from './filter.pipe';
import { GroupAddComponent } from './group-add/group-add.component';
import { ContactGroupComponent } from './contact-group/contact-group.component'

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,

    ContactDetailsComponent,
    AddContactComponent,
    FilterPipe,
    GroupAddComponent,
    ContactGroupComponent,
    // ReactiveFormsModule


    // [NgbPaginationModule, NgbAlertModule]
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
     FontAwesomeModule,
    

    RouterModule.forRoot([

      { path: 'contactList', component: ContactListComponent },
      { path: 'addContact', component: AddContactComponent },
      { path: 'contactDetails/:id', component: ContactDetailsComponent },

      { path: 'contactGroup', component: ContactGroupComponent },
      { path: 'groupAdd', component: GroupAddComponent }
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
