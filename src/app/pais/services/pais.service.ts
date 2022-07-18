import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private api_Key = "https://restcountries.com/v3.1"; 
  
  constructor(private http:HttpClient) { }


  buscarPais(term:string) :Observable<Country[]> {
   return this.http.get<Country[]>(`${this.api_Key}/name/${term}`).pipe(
     catchError( err => Promise.reject(err)));
  }

  buscarCapital(term:string) :Observable<Country[]> {
    return this.http.get<Country[]>(`${this.api_Key}/capital/${term}`).pipe(
      catchError( err => Promise.reject(err)));
  }

  buscarPorCode(code:string) : Observable<Country[]>{
    return this.http.get<Country[]>(`${this.api_Key}/alpha/${code}`)
      .pipe(catchError( err => Promise.reject(err)));
  }

  buscarPorRegion(region:string) : Observable<Country[]> {
    return this.http.get<Country[]>(`${this.api_Key}/region/${region}`)
      .pipe(catchError( err => Promise.reject(err)));
  }
}
