import { Component, OnInit } from '@angular/core';
declare var hbspt: any // put this at the top



@Component({
    selector: 'el-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  constructor() {}

  ngOnInit() {
    hbspt.forms.create({
      region: "na1",
      portalId: "4392020",
      formId: "6fc16cd0-81aa-4ace-9b6b-bf31c6a583ae",
      target: "#hubspotForm"
    });
  }
}
