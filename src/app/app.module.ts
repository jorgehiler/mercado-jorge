import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatPaginatorModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatFormFieldModule,
  MatAutocompleteModule,
  MatInputModule,
  MatGridListModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ProductCardComponent } from './product-card/product-card.component';
import { GridProductsComponent } from './grid-products/grid-products.component';
import { DataService } from './data.service';
import { CurrencyFormatPipe } from './currency-format.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductCardComponent,
    GridProductsComponent,
    CurrencyFormatPipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatMenuModule,
    NoopAnimationsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatInputModule,
    MatCardModule,
    MatPaginatorModule,
    MatIconModule,
    MatGridListModule,
    FormsModule, ReactiveFormsModule,
    HttpClientModule
    // FlexLayoutModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
