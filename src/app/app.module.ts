import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { CodeSnippitsComponent } from './components/code-snippits/code-snippits.component';
import { FooterComponent } from './components/footer/footer.component';
import { BooksComponent } from './components/books/books.component';
import { APP_BASE_HREF } from '@angular/common';
import { ContactComponent } from './components/contact/contact.component';
import { Material } from './app-material';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { GoodreadsService } from './services/goodreads-service.service';

import { environment } from '../environments/environment';
import { SharedModule } from './modules/shared/shared.module';
import { MaterialModule } from './modules/material/material.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PostModule } from './modules/post/post.module';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    CodeSnippitsComponent,
    FooterComponent,
    BooksComponent,
    ContactComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    Material,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    SharedModule,
    MaterialModule,
    PostModule
  ],
  exports: [
  ],
  providers: [
    GoodreadsService,
    {
      provide: APP_BASE_HREF, useValue: window['_app_base'] || '/'
    }
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
