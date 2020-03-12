import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogModule } from './components/blog/blog.module';
import { BooksComponent } from './components/books/books.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { from } from 'rxjs';

const routes: Routes = [
  { path: '', component: HomeComponent},
  // { path: 'about', component: AboutMeComponent },
  // { path: 'portfolio', component: PortfolioComponent },
  // { path: 'resume', component: ResumeComponent },
  // { path: 'code/:slug', component: CodeSnippitsComponent },
  { path: 'books', component: BooksComponent },
  { path: 'contact', component: ContactComponent }, 
  // { path: 'blog', loadChildren: () => BlogModule }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'}),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

