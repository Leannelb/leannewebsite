import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../blog/dashboard/dashboard.component';
import { BlogComponent } from '../blog/blog.component';
import { ListComponent } from '../blog/list/list.component';

const routes: Routes = [
  { path: '', redirectTo: '/blogs', component: DashboardComponent},
  { path: 'blogs', component: ListComponent},
  { path: 'blog/:id', component: BlogComponent }
];

@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ContentfulModule { }
