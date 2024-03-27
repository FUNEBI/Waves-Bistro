import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SnacksService {

  constructor(
    private http: HttpClient
  ) { }

  public getSnacks(): Observable<any> {
    const url = 'https://themealdb.com/api/json/v1/1/filter.php?c=Dessert';
    return this.http.get<any>(url)
  }
}
