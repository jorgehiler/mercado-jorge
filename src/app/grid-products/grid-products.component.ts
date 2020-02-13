import { Component, OnInit, Input, OnChanges, DoCheck, SimpleChanges, ViewChild, EventEmitter, Output } from '@angular/core';
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

  length = 50; //Cantidad de resultados
  pageSize = 50;
  pageSizeOptions: number[] = [3, 6, 9, 12, 50];
  @Input() listArticles: any[];
  pagedList: Article[];
  cols: number;
  @ViewChild('paginator', {static: false}) paginator: MatPaginator;
  @Output() changePaginator = new EventEmitter<{offSet: number}>();
  @Input() totalResults: number;


  pageEvent: PageEvent;


  @Input() events: Observable<void>;
  
  private eventsSubscription: Subscription;

//perueba
  ngOnDestroy() {
    this.eventsSubscription.unsubscribe();
  }

  updateIndex(index: number){
    this.paginator.pageIndex = 0;
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes.listArticles) {
      this.pagedList = this.listArticles.slice(0, this.pageSize);
      // this.paginator.pageIndex = 0;
    }
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }

  constructor(private searchService: DataService) {
    this.totalResults=0;
    this.listArticles = [];
    console.log(this.listArticles);
    this.cols = 5;
    this.listArticles = [];
  }

  ngOnInit() {
    this.listArticles = [];    
    this.eventsSubscription = this.events.subscribe(() => {console.log("Update index, new search"); this.updateIndex(0)});

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
    let next = event.pageIndex - event.previousPageIndex;

    this.changePaginator.emit({offSet: event.pageIndex});
    console.log("Pagina previa " + event.previousPageIndex);
    console.log("Pagina actual " + event.pageIndex);
    console.log("page size" + this.pageSize);
  }


}
