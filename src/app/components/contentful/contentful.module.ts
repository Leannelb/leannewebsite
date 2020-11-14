import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../blog/dashboard/dashboard.component';
import { BlogComponent } from '../blog/blog.component';

const routes: Routes = [
  { path: '', redirectTo: '/courses', component: DashboardComponent},
  { path: 'courses', component: ListComponent},
  { path: 'course/:id', component: BlogComponent }
];

@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ContentfulModule { }
