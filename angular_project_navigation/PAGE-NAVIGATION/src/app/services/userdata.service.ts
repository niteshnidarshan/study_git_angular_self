import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor() { }

  getUserPhoto(): any
  {
    return "menhi_digital311.JPG";
  }
}
