import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {

  contact = {
    name: '',
    email: '',
    message: ''
  };

  onSubmit() {
    // For now, just log the contact object. You might want to send this data to a backend server later.
    console.log(this.contact);

    // You can reset the form after submission if desired:
    this.contact = {
      name: '',
      email: '',
      message: ''
    };
  }
}
