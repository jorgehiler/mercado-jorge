import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  apiURL = 'https://api.mercadolibre.com/sites/MCO/search?q=';

  constructor(private http: HttpClient) {}

  getSearch(txtSearch: string, offset: string) {
    return this.http.get(this.apiURL + txtSearch + `&offset=${offset}&limit=50`);
  }
}

// https://api.mercadolibre.com/sites/MLA/search?casa=MLA1055&offset=51&limit=50
