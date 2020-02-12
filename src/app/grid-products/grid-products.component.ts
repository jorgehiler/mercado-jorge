import { Component, OnInit, Input, OnChanges, DoCheck, SimpleChanges } from '@angular/core';
import { PageEvent, MatPaginatorIntl } from '@angular/material';
import { Article } from '../article';
import { DataService } from '../data.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-grid-products',
  templateUrl: './grid-products.component.html',
  styleUrls: ['./grid-products.component.css']
})
export class GridProductsComponent implements OnInit, OnChanges{

  ngOnChanges(changes: SimpleChanges) {
    if(changes.listArticles){
      console.log("qui fue")
      this.pagedList = this.listArticles.slice(0, this.pageSize);

    }
    // You can also use categoryId.previousValue and
    // categoryId.firstChange for comparing old and new values
  }

  // MatPaginator Inputs
  length = 50;
  pageSize = 6;
  pageSizeOptions: number[] = [3, 6, 9, 12];
  @Input() listArticles: any[];
  pagedList: Article[];
  cols: number;

  @Input() events: Observable<void>;
  eventsSubscription: Subscription;

  // MatPaginator Output
  pageEvent: PageEvent;

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }

  constructor(private searchService: DataService) {
    this.listArticles = [];
    console.log(this.listArticles);
    // this.length = this.listArticles.length;
    // this.getSearch('gafas');
    this.cols = 4;
    this.listArticles = [];
  }

  ngOnInit() {
    this.listArticles = [];
    // this.pagedList = this.listArticles.slice(0, this.pageSize);
    this.eventsSubscription = this.events.subscribe(() => {
      console.log("nueva bussqueda");
      this.pagedList = this.listArticles.slice(0, this.pageSize);
      console.log(this.listArticles);
    });
  }

  ngOnDestroy() {
    this.eventsSubscription.unsubscribe();
  }

  OnPageChange(event: PageEvent) {
    console.log(`Current page 1: ${event.pageIndex}`);
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if (endIndex > this.length) {
      endIndex = this.length;
    }
    this.pagedList = this.listArticles.slice(startIndex, endIndex);
    this.pageSize = event.pageSize;
    console.log("page size" + this.pageSize)
  }

  // getSearch(txtSearch: string){
  //   this.searchService.getSearch(txtSearch)
  //   .subscribe(getSearch
  //     res => { console.log(res);
  //              this.resultSearch = res;
  //              this.listArticles = this.resultSearch.results;
  //             },
  //     err => console.log('error' + err)
  //   )
  // }

}
