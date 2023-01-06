import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
interface ContactForm
{
  "name": String;
  "CheckAdult": boolean;
  "departament": String;
  "comment": String;
}
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  model = {
    name: '',
    CheckAdult: false,
    departament: '',
    comment: ''
    }
    onSubmit( form : NgForm):void{
      console.log('Form values', form);
    }
}
