export class Article {

  title: string;
  seller: string;
  thumbnail: string
  price: number;

  constructor(title: string, seller: string, price: number, thumbnail: string) {
    this.title = title;
    this.seller = seller;
    this.price = price;
    this.thumbnail = thumbnail;
  }
}
