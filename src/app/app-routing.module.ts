import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogModule } from './components/blog/blog.module';
import { BooksComponent } from './components/books/books.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { ListComponent } from './components/blog/list/list.component';
import { BlogComponent } from './components/blog/blog.component';
import { BarChartComponent } from './components/chart/bar-chart.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'blogs', component: ListComponent},
  { path: 'charts', component: BarChartComponent},
  { path: 'blog/:id', component: BlogComponent },
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: 'products',  component: ListComponent },
  { path: 'blog', loadChildren: () => import('./components/blog/blog.module').then(m => m.BlogModule)},
  { path: 'books', component: BooksComponent },
  { path: 'contact', component: ContactComponent }, 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'}),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

