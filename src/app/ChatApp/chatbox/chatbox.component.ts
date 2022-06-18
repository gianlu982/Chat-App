import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Contact, TextMessage } from 'src/assets/contact';

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.scss']
})
export class ChatboxComponent implements OnInit {

  @Input() selectContact!: Contact;

  @ViewChild('message') message!: any;
  
  constructor() { }

  ngOnInit(): void {
  }
  inputClear(){
    this.message.nativeElement.value = ' ';
  }

  sendMessage(message:string){
  if(message.length > 0){  
    var lato: boolean
    var x = Math.floor((Math.random() * 10) + 1);
   if(x %2==0){
     lato = true;
  }else{
    lato = false;
  }
    console.log(lato);
    console.log(message);
    console.log(x)
    this.selectContact.messageText.push({
      text: message,
      side: lato
    })
  }
}
}

