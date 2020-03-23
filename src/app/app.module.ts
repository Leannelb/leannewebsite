import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { RouterModule, Routes } from '@angular/router';
import { CodeSnippitsComponent } from './components/code-snippits/code-snippits.component';
import { ResumeComponent } from './components/resume/resume.component';
import { FooterComponent } from './components/footer/footer.component';
import { BooksComponent } from './components/books/books.component';
import { APP_BASE_HREF } from '@angular/common';
import { ContactComponent } from './components/contact/contact.component';
import { Material } from './app-material';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { GoodreadsService } from './goodreads-service.service';
import { SharedModule } from './shared/shared.module';
import { BlogModule } from './components/blog/blog.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ResumeComponent,
    PortfolioComponent,
    CodeSnippitsComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BlogModule,
    Material,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    SharedModule
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
