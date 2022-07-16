import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {

  termino: string = "";
  countryWasFound:boolean = true;
  isLoading: boolean = false;
  countries: Country[] = [];

  
  constructor(private paisService:PaisService){}

  submitMethod(event : string) {
    this.isLoading = true;
    this.termino=event;
    this.paisService.buscarPais(this.termino)
     .pipe()
     .subscribe(
       {
         next:(res)=> {
           this.isLoading=false;
           this.countries=res;console.log(res);
           this.countryWasFound=true;
          },
         error:(err) => {
           this.isLoading=false;
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
