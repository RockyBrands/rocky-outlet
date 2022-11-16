import { Component, OnInit } from '@angular/core';
declare var hbspt: any // put this at the top



@Component({
    selector: 'newsletter',
    templateUrl: './newsletter.component.html',
    styleUrls: ['./newsletter.component.css']
})
export class NewsletterComponent {
  constructor() {}

  ngOnInit() {
    hbspt.forms.create({
      region: "na1",
      portalId: "4392020",
      formId: "f5338c0f-886a-43dc-b768-7f1ecf49192d",
      target: "#newsletterForm"
    });
  }
}
