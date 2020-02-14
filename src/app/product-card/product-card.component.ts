import { Component, Input, OnChanges,  SimpleChanges } from '@angular/core';
import { Article } from '../article';
import { DataService } from '../data.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements  OnChanges{
 

  @Input() article: any;
  nameSeller: string;
  aux: any;
  price: number;

  constructor(private serviceMercado: DataService) {
    this.price = 543454;
    this.nameSeller = 'Loading';
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes.article) {
      this.serviceMercado.getNickname(this.article.seller.id)
      .subscribe(
        res => {console.log('respuesta');         
        this.aux = res;
        this.nameSeller = this.aux.seller.nickname;
        console.log(res);
      }
      );
      this.price = this.article.price; //Convertir a number y agregar punto decimal 
    }
  }

  
  

}
