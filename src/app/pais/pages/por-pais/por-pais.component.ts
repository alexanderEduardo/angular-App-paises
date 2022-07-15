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

  termino: string = "Alex";
  countryWasFound: boolean = true;
  countries: Country[] = [];

  
  constructor(private paisService:PaisService){}
  submitMethod() {
    console.log(this.termino);
    this.paisService.buscarPais(this.termino)
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

  alerta(val?:any){
    if(!this.countryWasFound){
      this.countryWasFound = true;
    }
    !this.countryWasFound ? this.countryWasFound = true : this.countryWasFound = this.countryWasFound 
  }

   


}
