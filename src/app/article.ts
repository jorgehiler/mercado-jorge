export class Article {

  title: string;
  seller: string;
  thumbnail: string
  price: number;
  id: string;

  constructor(title: string, seller: string, price: number, thumbnail: string, idSeller: string) {
    this.title = title;
    this.seller = seller;
    this.price = price;
    this.thumbnail = thumbnail;
    this.id = idSeller;
  }
}
