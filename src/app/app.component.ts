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
  totalResults: string;
  eventsSubject: Subject<void> = new Subject<void>();

  constructor(private searchService: DataService) {
  }

  ngOnInit(): void {
    // this.getSearch('camara');
  }

  searchArticles(elementSearch: { txtSearch: string }) { //Este evento se origino en navbar
    this.txtSearch = elementSearch.txtSearch;
    console.log('Desde component: ' + elementSearch.txtSearch);
    this.getSearch(elementSearch.txtSearch, '0');
    this.emitEventToChild();
  }

  searchArticlesOffset(elementSearch: { offSet: any}) { //Este evento se origino en paginator
    let offSet = elementSearch.offSet*50 + 1;
    if(offSet === 1) {
      offSet = 0;
    }
    console.log("Buca por paginator")
    console.log(this.txtSearch);
    this.getSearch(this.txtSearch, '' + offSet);
  }

  getSearch(txtSearch: string, offSet: string) {
    this.searchService.getSearch(txtSearch, offSet)
      .subscribe(
        res => {
          console.log(res);
          this.resultSearch = res;
          this.listArticles = this.resultSearch.results;
          this.totalResults = this.resultSearch.paging.total;
          console.log(`total Resultados: ${this.totalResults}`);
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

