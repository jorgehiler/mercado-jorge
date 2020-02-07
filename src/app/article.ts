export class Article {

  nameArticle: string;
  seller: string;
  price: number;

  constructor(nameArticle: string, seller: string, price: number) {
    this.nameArticle = nameArticle;
    this.seller = seller;
    this.price = price;
  }
}
