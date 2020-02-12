import { Component, OnInit } from '@angular/core';
import { Article } from './article';
import { DataService } from './data.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'mercadolibre-jorge';
  txtSearch: string;
  resultSearch: any;
  listArticles: any[]

  eventsSubject: Subject<void> = new Subject<void>();



  constructor(private searchService: DataService) {
  }

  ngOnInit(): void {
    // this.getSearch('camara');
  }

  searchArticles(elementSearch: { txtSearch: string }) { //Este evento se origino en navbar
    console.log('Desde component: ' + elementSearch.txtSearch);
    this.getSearch(elementSearch.txtSearch);
  }

  getSearch(txtSearch: string) {
    this.searchService.getSearch(txtSearch)
      .subscribe(
        res => {
          console.log(res);
          this.resultSearch = res;
          this.listArticles = this.resultSearch.results;
          console.log('lista de articulos en component' + this.listArticles);
        },
        err => console.log('error' + err)
      );
  }


  emitEventToChild() {
    console.log("emitir evento");
    this.eventsSubject.next();
  }

}

