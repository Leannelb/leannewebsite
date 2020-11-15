import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CodeSnippitsComponent } from './components/code-snippits/code-snippits.component';
import { Material } from './app-material';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { BlogModule } from './components/blog/blog.module';
import { MdToHtmlPipe } from './md-to-html.pipe';
import { ContentfulService } from './contentful.service';
import { ListComponent } from './components/blog/list/list.component';
import { BlogComponent } from './components/blog/blog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CodeSnippitsComponent,
    MdToHtmlPipe,
    ListComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BlogModule,
    Material,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [
    ContentfulService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
