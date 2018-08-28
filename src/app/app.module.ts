import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { ResumeComponent } from './components/resume/resume.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { Routes } from '@angular/router';

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
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
