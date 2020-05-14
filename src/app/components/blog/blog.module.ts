<<<<<<< HEAD
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PostComponent } from './post/post.component';
import { ListComponent } from './list/list.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'list/:id', component: PostComponent },
  { path: 'list', component: ListComponent },
  { path: '', component: DashboardComponent }
]
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports:[DashboardComponent, PostComponent, ListComponent
],
  declarations: [DashboardComponent, PostComponent, ListComponent]
})
export class BlogModule { }
=======
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { BlogComponent } from './blog.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogsComponent } from './blogs/blogs.component';


@NgModule({
	imports: [
        CommonModule,
        SharedModule,
        BlogRoutingModule
    ],
    exports: [
        BlogComponent, BlogsComponent
    ],
	declarations: [
        BlogComponent, BlogsComponent
    ]
})
export class BlogModule {
}
>>>>>>> new-universal
