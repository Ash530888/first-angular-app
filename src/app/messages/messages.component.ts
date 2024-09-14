import { Component } from '@angular/core';
import { MessageService } from '../message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css'
})
export class MessagesComponent {

  constructor(public messageService : MessageService){}

  private log(message: string){
    this.messageService.add(`ProductService: ${message}`);
  }
}
