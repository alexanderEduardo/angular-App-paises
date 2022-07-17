import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {

  countrieS : Country[] = [];
  wasd : any ;
  isLoading: boolean = true;
  errorSearch: boolean = false;

  constructor(private activateRoute:ActivatedRoute, private paisService:PaisService) { }

  ngOnInit(): void {
    
    this.activateRoute.params
      .pipe(switchMap( param => this.paisService.buscarPorCode( param['codeCountry']))
      ,tap( console.log))
      .subscribe({
        next:res => {
          this.isLoading = false;
          this.countrieS = res;
          console.log(this.countrieS[0].translations['jpn'].common)
          //this.countrieS.push(res[0],res[0],res[0]);
        },
        error: err => {
          this.isLoading = false;
          this.errorSearch = true;
          console.log(err)
        }
      })
    
      /* this.activateRoute.params.subscribe( res => {
        console.log(res);
        this.paisService.buscarPorCode(res['codeCountry'])
        .subscribe( pais => console.log(pais));
      }
    ) */
  }

}
