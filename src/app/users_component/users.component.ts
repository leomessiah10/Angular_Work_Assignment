import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../models/user.interface';

@Component({
  selector: 'ngr-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
  
export class UsersComponent implements OnInit {
  users: User[] = [
    {
      name: 'vikrant',
      username: 'kingtvarshin',
      email: 'kingtvarshin1@gmail.com'
    },
    {
      name: 'satya',
      username: 'satya',
      email: 'satya@gmail.com'
    },
    {
      name: 'shivi',
      username: 'shivi',
      email: 'shivi@gmail.com'
    },
    {
      name: 'aditi',
      username: 'aditi',
      email: 'aditi@gmail.com'
    }
  ];
  
  tableproperties = {
    shouldenablehover: true
}

  constructor() { }

  get tableClasses() {
    return { 'is-hoverable': this.tableproperties.shouldenablehover }
  }

  emailStyle(user: User) {
    
  }

  deleteclick(userIndex: number) {
  this.users.splice(userIndex,1)
  console.log(userIndex);
  }
  
  ngOnInit(): void {
  }

}
