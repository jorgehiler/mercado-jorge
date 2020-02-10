import { Component } from '@angular/core';
import { Article } from './article';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  article = new Article('Camiseta1', 'Jorge', 50000);
  title = 'mercadolibre-jorge';
}

