import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `button {
      margin-right: 5px;
    }`
  ]
})
export class PorRegionComponent {

  regions : string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  activeRegion : string = '';

  constructor() { }

  activeButton(region : string) {
    this.activeRegion = region;
  }


}
