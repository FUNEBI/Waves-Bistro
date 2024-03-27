import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DrinksService {

  constructor(
    private http: HttpClient
  ) { }

  public getHotCofee(): Observable<any> {
    const url = 'https://api.sampleapis.com/coffee/hot';
    return this.http.get<any>(url)
  }

  public getIcedCofee(): Observable<any> {
    const url = 'https://api.sampleapis.com/coffee/iced';
    return this.http.get<any>(url)
  }

  public getRoseWine(): Observable<any> {
    const url = 'https://api.sampleapis.com/wines/rose';
    return this.http.get<any>(url)
  }

  public getSmoothies(): Observable<any> {
    const url = 'https://thecocktaildb.com/api/json/v1/1/search.php?s=smoothie';
    return this.http.get<any>(url)
  }
}
