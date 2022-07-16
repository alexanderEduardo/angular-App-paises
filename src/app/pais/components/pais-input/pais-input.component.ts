import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit{
  
  /**
   * Cuando hago enter en el input emite el evento por ende (onEnter) es ejecutado en el template porPais
   * debounceTime es como si 
   */
  @Output() 
  onEnter: EventEmitter<string> = new EventEmitter();
  
  termino : string = "Peru";
  
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  deBouncer: Subject<string> = new Subject();

  @Output()
  onInput: EventEmitter<boolean> = new EventEmitter();
  
  @Input("countryWasFound_")
  countryWasFound : boolean = true;

  
  constructor() { }
  
  ngOnInit(): void {
    this.deBouncer
    .pipe(debounceTime(300)) //delay for suscribe
    .subscribe( inputValue => this.onDebounce.emit(inputValue));
  }

  submitMethod() {
    this.onEnter.emit(this.termino);
    console.log(this.countryWasFound);
  }
  
  keyPress(event?:any) {
    //console.log(val.target.value);
    this.deBouncer.next(this.termino);
    /*if(!this.countryWasFound){
      this.countryWasFound = true
      this.onInput.emit(this.countryWasFound);
    }*/
  }
  
}
