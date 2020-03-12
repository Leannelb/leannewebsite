import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { NavComponent } from '../nav/nav.component';
import { ContactComponent } from '../components/contact/contact.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';
import { FooterComponent } from '../components/footer/footer.component';
import { BooksComponent } from '../components/books/books.component';

@NgModule({
  declarations: [
    NavComponent,
    BooksComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  exports: [
    NavComponent,
    BooksComponent,
    ContactComponent,
    FooterComponent
  ]
})
export class SharedModule { }
