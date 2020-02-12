import { Component, OnInit, Input, OnChanges, DoCheck, SimpleChanges, ViewChild } from '@angular/core';
import { PageEvent, MatPaginatorIntl, MatPaginator } from '@angular/material';
import { Article } from '../article';
import { DataService } from '../data.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-grid-products',
  templateUrl: './grid-products.component.html',
  styleUrls: ['./grid-products.component.css']
})
export class GridProductsComponent implements OnInit, OnChanges{

  length = 50;
  pageSize = 6;
  pageSizeOptions: number[] = [3, 6, 9, 12];
  @Input() listArticles: any[];
  pagedList: Article[];
  cols: number;
  @ViewChild('paginator', {static: false}) paginator: MatPaginator;

  pageEvent: PageEvent;


  ngOnChanges(changes: SimpleChanges) {
    if(changes.listArticles){
      this.pagedList = this.listArticles.slice(0, this.pageSize);
      this.paginator.pageIndex = 0;
    }
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }

  constructor(private searchService: DataService) {
    this.listArticles = [];
    console.log(this.listArticles);
    this.cols = 4;
    this.listArticles = [];
  }

  ngOnInit() {
    this.listArticles = [];
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


}
