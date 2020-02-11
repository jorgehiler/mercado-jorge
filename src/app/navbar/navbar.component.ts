import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  flagInputSearch = true;
  @Output() searchedArticles = new EventEmitter<{txtSearch: string}>();


  constructor() { }

  ngOnInit() {
  }

  searchArti(value: string) { 
    this.searchedArticles.emit({txtSearch: value});
    console.log(value);    
  }

}
