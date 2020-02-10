import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material';
import { Article } from '../article';
import { DataService } from '../data.service';

@Component({
  selector: 'app-grid-products',
  templateUrl: './grid-products.component.html',
  styleUrls: ['./grid-products.component.css']
})
export class GridProductsComponent implements OnInit {

  // MatPaginator Inputs
  length = 50;
  pageSize = 6;
  pageSizeOptions: number[] = [3, 6, 9, 12];
  listArticles: any[];
  pagedList: Article[];
  cols: number;
  resultSearch: any;

  // MatPaginator Output
  pageEvent: PageEvent;

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }

  constructor(private searchService: DataService) {
    this.getSearch('gafas');
    this.cols = 4;
    this.listArticles = [];
  }

  ngOnInit() {
    this.pagedList = this.listArticles.slice(0, this.pageSize);

  }

  OnPageChange(event: PageEvent) {
    console.log(`Current page 1: ${event.pageIndex}`);
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if (endIndex > this.length) {
      endIndex = this.length;
    }
    this.pagedList = this.listArticles.slice(startIndex, endIndex);
  }

  getSearch(txtSearch: string){
    this.searchService.getSearch(txtSearch)
    .subscribe(
      res => { console.log(res);
               this.resultSearch = res;
               this.listArticles = this.resultSearch.results;
              },
      err => console.log('error' + err)
    )
  }

}
