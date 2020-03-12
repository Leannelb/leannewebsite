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
    FormsModule,
    SharedModule,
    BlogRoutingModule
    ],
    exports: [
        BlogComponent, BlogsComponent
    ],
	declarations: [BlogComponent, BlogsComponent]
})
export class BlogModule {
}
