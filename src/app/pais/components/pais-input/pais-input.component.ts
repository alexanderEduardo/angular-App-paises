import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit {
  
  
  
  termino : string = "";
  countryWasFound : boolean = true;
  constructor() { }

  ngOnInit(): void {
  }
  submitMethod() {

  }

}
