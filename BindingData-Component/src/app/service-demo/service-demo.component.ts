import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-service-demo',
  templateUrl: './service-demo.component.html',
  styleUrls: ['./service-demo.component.css']
})
export class ServiceDemoComponent implements OnInit {
  message!: string;
  constructor(private data: DataService) { }
  todayDate!: Date;
  ngOnInit(): void {
    this.data.currentMessage.subscribe((message: string) => this.message = message);
    this.todayDate = this.data.showTodayDate(); 
  }
  newMessage() {
    this.data.changeMessage('Hello from Sibling');
  }
}
