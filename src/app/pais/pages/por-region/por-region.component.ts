import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `button {
      margin-right: 5px;
    }`
  ]
})
export class PorRegionComponent {

  regionNames: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  activeRegion: string = '';
  countries: Country[] = [];
  isLoading: boolean = false;
  errorRequest: boolean = false;

  constructor(private countryService:PaisService) { }

  activeButton(region : string) {
    if(this.activeRegion === region) return;
    this.countries = [];
    this.activeRegion = region;
    this.isLoading = true;

    this.countryService.buscarPorRegion(region).subscribe({
      next : res => {
        this.isLoading = false;
        this.countries = res;
      },
      error: err => {
        this.isLoading = false;
        this.errorRequest = true;
        console.log(err)
      }
    });
  }


}
