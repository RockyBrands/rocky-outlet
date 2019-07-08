import { Component } from '@angular/core';
import { NavbarService } from './navbar.service';

@Component({
    moduleId: module.id,
    selector: 'navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor( public nav: NavbarService ) {}
  
  status: boolean = false;

  toggle: void;

  clickEvent(){
    this.status = !this.status;
  }

  // showDropdown: boolean = false;
  //
  // toggleDropdown():void {
  //   this.showDropdown = !this.showDropdown;
  // }
}
