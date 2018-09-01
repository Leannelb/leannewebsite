import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { ResumeComponent } from './components/resume/resume.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { Routes } from '@angular/router';
import { CodeSnippitsComponent } from './components/code-snippits/code-snippits.component';
import { AboutMeComponent } from './components/about-me/about-me.component';

const appRoutes: Routes = [
  { 
    path: 'about', 
    component: HomeComponent 
  },
  {
    path: 'portfolio',
    component: PortfolioComponent
  }

];


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    ResumeComponent,
    PortfolioComponent,
    CodeSnippitsComponent,
    AboutMeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
