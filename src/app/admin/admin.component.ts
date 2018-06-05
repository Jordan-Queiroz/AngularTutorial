import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  message = "Loading..."

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getSomedata()
    .subscribe(data => {
      this.message = data.message
    })
  }

}