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
  
  loading: boolean;
  title = 'mercadolibre-jorge';
  txtSearch: string;
  resultSearch: any;
  listArticles: any[]
  totalResults: string;
  eventsSubject: Subject<void> = new Subject<void>();

  constructor(private searchService: DataService) {
    this.loading = false;
  }

  ngOnInit(): void {
    // this.getSearch('camara');
  }

  searchArticles(elementSearch: { txtSearch: string }) { //Este evento se origino en navbar
    this.txtSearch = elementSearch.txtSearch;
    this.getSearch(elementSearch.txtSearch, '0');
    this.emitEventToChild();
  }

  searchArticlesOffset(elementSearch: { offSet: any}) { //Este evento se origino en paginator
    let offSet = elementSearch.offSet*50 + 1;
    if(offSet === 1) {
      offSet = 0;
    }
    console.log(this.txtSearch);
    this.getSearch(this.txtSearch, '' + offSet);
  }

  getSearch(txtSearch: string, offSet: string) {
    this.loading = true;
    setTimeout(()=>{
      this.searchService.getSearch(txtSearch, offSet)
        .subscribe(
          res => {
            console.log(res);
            this.resultSearch = res;
            this.listArticles = this.resultSearch.results;
            this.totalResults = this.resultSearch.paging.total;
            this.loading = false;
          },
          err => console.log('error' + err)
        );
      
    },0)
  }


  emitEventToChild() {
    this.eventsSubject.next();
  }

}

