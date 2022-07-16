import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

  termino: string = "";
  countryWasFound:boolean = true;
  countries: Country[] = [];

  
  constructor(private paisService:PaisService){}

  submitMethod(event : string) {
    this.termino=event;
    this.paisService.buscarCapital(this.termino)
     .pipe()
     .subscribe(
       {
         next:(res)=> {
           this.countries=res;console.log(res);
           this.countryWasFound=true;
          },
         error:(err) => {
           this.countryWasFound=false;
           this.countries=[];
          }
       }
     );
  }

  suggestions(event:any) {
    this.countryWasFound=true;
  }
}
