import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/assets/contact';
import contactData from 'src/assets/contatti.json'

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  contacts = contactData
  selectContact!: Contact;
  contact: any;

  constructor() { }

  ngOnInit(): void {
    
    
  }

  returContact(e: Contact){
    this.selectContact  = e
    console.log(this.selectContact)
  }

}
