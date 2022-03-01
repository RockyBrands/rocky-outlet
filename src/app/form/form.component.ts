import { Component } from '@angular/core';
// import { EmailService } from '../email.service';
import { Request } from '../request';

@Component({
  selector: 'thisForm',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent {
  options = ['Catering', 'Community Room', 'Build a Buddy'];
  model = new Request('', this.options[0], 0);
  submitted = false;

  onSubmit() {
    this.submitted = true;
  } 

  newRequest() {
    this.model = new Request('', '', 1);
  }
}