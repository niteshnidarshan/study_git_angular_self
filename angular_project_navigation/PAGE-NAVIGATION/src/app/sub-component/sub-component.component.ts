import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../services/userdata.service';

@Component({
  selector: 'app-sub-component',
  templateUrl: './sub-component.component.html',
  styleUrls: ['./sub-component.component.css']
})
export class SubComponentComponent implements OnInit {

  userImage: string;

  constructor(private userPhoto: UserdataService) { }

  ngOnInit(): void {
    this.userImage = this.userPhoto.getUserPhoto();
  }

}
