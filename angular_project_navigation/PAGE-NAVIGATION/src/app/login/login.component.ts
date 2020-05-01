import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../services/userdata.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userImage: string;
  constructor(private userData: UserdataService) { }

  ngOnInit(): void {
    this.userImage = this.userData.getUserPhoto();
  }

}
