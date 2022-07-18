import { Component, Input, OnInit } from '@angular/core';
import { map, Observable, throwError } from 'rxjs';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',
  styles: [
  ]
})
export class PaisTablaComponent implements OnInit{

  @Input("countries_")
  countries: readonly Country[] = []; 

  //Atributos for por-region component
  @Input("activeRegion_") activeRegion : string = '';
  
  @Input("regions__")
  regionNames_: readonly string[] = [];
  
  classNames: readonly string[] = [];
  
  regions_classNames: Map<string, string> = new Map();
  
  constructor() { }

  ngOnInit(): void {
    if(this.regionNames_.length>0) { //se construye solo cuando se renderiza el componente po-region
      this.classNames=["table-success","table-danger","table-primary","table-secondary","table-warning"];
      let test = this.mapConstructor();
      console.log(test);
    }
  }

  setClassPeru(country:string) : string {
    //this.asdasfs();
    let regex = new RegExp(country, "gi");
    return regex.test('peru') ? 'table-dark' : '';
  }

    mapConstructor() {
    if(this.regionNames_.length !== this.classNames.length)
      return new Error("not same length in arrays");

    for(let i=0;i<this.regionNames_.length;i++){
      this.regions_classNames.set(this.regionNames_[i],this.classNames[i]);
    }
    return this.regions_classNames;
  }
}


/*console.log(Object.entries(obj))
console.log(Object.fromEntries(Object.entries(obj)))
console.log(Object.keys(obj));*/

