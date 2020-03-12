import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { BlogComponent } from './blog.component';
import { BlogsComponent } from './blogs/blogs.component';

const routes: Routes = [
  { path: '', component: BlogComponent},
  { path: ':id', component: BlogsComponent},

]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
