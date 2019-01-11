import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ResumeComponent } from './components/resume/resume.component';
import { CodeSnippitsComponent } from './components/code-snippits/code-snippits.component';
import { BooksComponent } from './components/books/books.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'about', component: AboutMeComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'code/:slug', component: CodeSnippitsComponent },
  { path: 'books', component: BooksComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

