import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  imageList:any[] = [
    {image:"menhi_digital311.JPG"},
    {image:"menhi_digital312.JPG"},
    {image:"menhi_digital313.JPG"},
    {image:"menhi_digital314.JPG"},
    {image:"menhi_digital315.JPG"},
    {image:"menhi_digital320.JPG"},
    {image:"menhi_digital321.JPG"},
    {image:"menhi_digital322.JPG"},
    {image:"menhi_digital324.JPG"},
    {image:"menhi_digital325.JPG"},
    {image:"menhi_digital327.JPG"},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
