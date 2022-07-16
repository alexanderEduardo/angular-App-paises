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
   * debounceTime es como setTimeout
   */
  
  @Output() 
  onEnter: EventEmitter<string> = new EventEmitter();
  
  @Output()
  onInput: EventEmitter<boolean> = new EventEmitter();
  
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();
  
  deBouncer: Subject<string> = new Subject();
  
  @Input("inputDefaultValue")
  termino : string = "";
  
  @Input()
  placeHolder : string = "";
  constructor() { }
  
  ngOnInit(): void {
    this.deBouncer
    .pipe(debounceTime(300)) //delay for suscribe
    .subscribe( inputValue => this.onDebounce.emit(inputValue));
  }

  submitMethod() {
    this.onEnter.emit(this.termino);
  }
  
  keyPress(event?:any) {
    //console.log(val.target.value);
    this.deBouncer.next(this.termino);
  }
  
}
