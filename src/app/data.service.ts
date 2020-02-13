import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  apiURL = 'https://api.mercadolibre.com/sites/MCO/search?';

  constructor(private http: HttpClient) {}

  getSearch(txtSearch: string, offset: string) {
    return this.http.get(this.apiURL + 'q=' + txtSearch + `&offset=${offset}&limit=50`);
  }

  getNickname(idSeller: string){
    console.log(`idSeller: ${idSeller}`)
    console.log(this.apiURL + 'seller_id=' + idSeller);
    return this.http.get(this.apiURL + 'seller_id=' + idSeller)
  }
}

// https://api.mercadolibre.com/sites/MLA/search?casa=MLA1055&offset=51&limit=50
