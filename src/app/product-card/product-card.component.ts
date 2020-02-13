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

  constructor(private serviceMercado: DataService) {
    this.nameSeller = 'Loading';
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes.article) {
      this.serviceMercado.getNickname(this.article.seller.id)
      .subscribe(
        res => {console.log('respuesta'); 
        console.log(res);
        this.aux = res;
        console.log(this.aux.seller.nickname);
        this.nameSeller = this.aux.seller.nickname;
      }
      );
    }
  }

  
  

}
