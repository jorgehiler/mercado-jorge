import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material';
import { Article } from '../article';

@Component({
  selector: 'app-grid-products',
  templateUrl: './grid-products.component.html',
  styleUrls: ['./grid-products.component.css']
})
export class GridProductsComponent implements OnInit {

  // MatPaginator Inputs
  length = 25;
  pageSize = 6;
  pageSizeOptions: number[] = [3, 6, 9, 12];
  listArticles: Article[];
  pagedList: Article[];
  cols: number;

  // MatPaginator Output
  pageEvent: PageEvent;

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }

  constructor() {
    this.cols = 3;
    this.listArticles = [
      new Article('Camiseta1', 'Jorge', 50000),
      new Article('Camiseta2', 'Jorge', 50000),
      new Article('Camiseta3', 'Jorge', 50000),
      new Article('Camiseta4', 'Jorge', 50000),
      new Article('Camiseta5', 'Jorge', 50000),
      new Article('Camiseta6', 'Jorge', 50000),
      new Article('Camiseta7', 'Jorge', 50000),
      new Article('Camiseta8', 'Jorge', 50000),
      new Article('Camiseta9', 'Jorge', 50000),
      new Article('Camiseta10', 'Jorge', 50000),
      new Article('Camiseta11', 'Jorge', 50000),
      new Article('Camiseta12', 'Jorge', 50000)];
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

}
