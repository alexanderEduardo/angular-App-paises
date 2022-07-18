import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [`
    li {
      cursor: pointer;
    }
  `
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

  suggestionsCountries: Country[] = [];
  suggestions(event:string) {
    this.countryWasFound=true;
    this.termino = event;
    
    console.log(event)
    this.paisService.buscarPais(event)
    .pipe().subscribe({
      next : (res) => {
        return this.suggestionsCountries = res.splice(0,3);
      } ,
      error: (err) => this.suggestionsCountries = []
    })
  }

}
