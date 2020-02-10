import { Component, OnInit } from '@angular/core';
import { Article } from './article';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
    
  article = new Article('Camiseta1', 'Jorge', 50000);
  title = 'mercadolibre-jorge';

  constructor(private searchService: DataService) {
  }

  ngOnInit(): void {
    // this.getSearch('camara');
    }

  // getSearch(txtSearch: string){
  //   this.searchService.getSearch(txtSearch)
  //   .subscribe(
  //     res => { console.log(res);
  //              let results = res;
  //             },
  //     err => console.log('error' + err)
  //   )
  // }
}

