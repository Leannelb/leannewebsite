import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { RouterModule, Routes } from '@angular/router';
import { CodeSnippitsComponent } from './components/code-snippits/code-snippits.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ResumeComponent } from './components/resume/resume.component';
import { FooterComponent } from './components/footer/footer.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { BooksComponent } from './components/books/books.component';
import { APP_BASE_HREF } from '@angular/common';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'about', component: AboutMeComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'code', component: CodeSnippitsComponent },
  { path: 'books', component: BooksComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    ResumeComponent,
    PortfolioComponent,
    CodeSnippitsComponent,
    AboutMeComponent,
    FooterComponent,
    BooksComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes), // <-- installs Router routes, components and services
    AppRoutingModule,
    AngularFontAwesomeModule
  ],
  providers: [
    {
      provide: APP_BASE_HREF, useValue: window['_app_base'] || '/'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
