import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent {
  
  /**
   * Cuando hago enter en el input emite el evento por ende (onEnter) es ejecutado en el template porPais
   */
  @Output() 
  onEnter: EventEmitter<string> = new EventEmitter();
  
  //@Input("termino_")
  termino : string = "Peru";
  
  @Output()
  onInput: EventEmitter<boolean> = new EventEmitter();
  
  @Input("countryWasFound_")
  countryWasFound : boolean = true;

  
  constructor() { }

  submitMethod() {
    this.onEnter.emit(this.termino);
    console.log(this.countryWasFound);
  }
  
  alerta(val:any) {
    if(!this.countryWasFound){
      this.countryWasFound = true
      this.onInput.emit(this.countryWasFound);
    }
    //!this.countryWasFound ? this.countryWasFound=true : console.log("!·");
  }
  
}
