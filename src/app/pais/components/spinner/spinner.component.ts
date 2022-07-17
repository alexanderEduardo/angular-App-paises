import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styles: [`
    .loader{
    margin: 0 0 2em;
    height: 100px;
    width: 50%;
    text-align: center;
    padding: 1em;
    margin: 0 auto 1em;
    display: inline-block;
    vertical-align: top;
  }
  
  svg path,
  svg rect{
    fill: #FF6700;
  }
  `
  ]
})
export class SpinnerComponent  {

  constructor() {}

}
