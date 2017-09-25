import { Component, HostBinding } from "@angular/core";
import { slideInDownAnimation } from './../animations';

@Component({
  selector: 'fourohfour',
  templateUrl: './fourohfour.component.html',
  styleUrls: ['./fourohfour.component.css'],
  animations: [ slideInDownAnimation ],
})

export class FourOhFourComponent {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';
  @HostBinding('style.width')  width = '100%';
  intro_image_mobile = "./assets/images/mobile_calltoaction.jpg";
  intro_image_desktop = "./assets/images/desktop_calltoaction_03.jpg";
}
