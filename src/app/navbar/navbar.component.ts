import { Component } from '@angular/core';

@Component({
    selector: 'navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
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
