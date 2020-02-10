import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  apiURL = 'https://api.mercadolibre.com/sites/MCO/search?q=';  

  constructor(private http: HttpClient) {}

  getSearch(txtSearch: string){
    return this.http.get(this.apiURL + txtSearch);
  }
}
