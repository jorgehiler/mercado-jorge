import { Component, OnInit, Input, OnChanges, DoCheck, SimpleChanges, ViewChild, EventEmitter, Output, HostListener } from '@angular/core';
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
  cardNotice: boolean;

  screenHeight: number;
  screenWidth: number;


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
      this.getScreenSize();
      if(this.pagedList.length === 0) {
        this.cardNotice = true;
        console.log('mostrar aviso');
      } else {
        this.cardNotice = false;
      }
      // this.paginator.pageIndex = 0;
    }

  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }

  constructor(private searchService: DataService) {
    this.cardNotice = false;
    this.totalResults=0;
    this.listArticles = [];
    console.log(this.listArticles);
    this.cols = 5;
    this.listArticles = [];
    this.pagedList = new Array<any>(50);
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

    let algo = this.listArticles.slice(0, this.pageSize);
    this.pagedList.forEach((item,index) => {
      item[index] = algo[index];
    })

    this.pageSize = event.pageSize;
    let next = event.pageIndex - event.previousPageIndex;

    this.changePaginator.emit({offSet: event.pageIndex});
    console.log("Pagina previa " + event.previousPageIndex);
    console.log("Pagina actual " + event.pageIndex);
    console.log("page size" + this.pageSize);
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
    console.log(this.screenHeight, this.screenWidth);
    if (this.screenWidth >= 1650) {
      this.cols=8;
    } else if(this.screenWidth >= 1450) {
      this.cols=7;
    } else if(this.screenWidth >= 1200) {
      this.cols=6;
    } else if(this.screenWidth >= 1000) {
      this.cols=5;
    }  else if(this.screenWidth >= 800) {
      this.cols=4;
    } else if(this.screenWidth >= 600) {
      this.cols=3;
    } else if(this.screenWidth >= 400) {
      this.cols=2;
    } else {
      this.cols=1;
    }
  }


}
