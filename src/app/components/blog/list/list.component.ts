import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Entry } from 'contentful';
import { ContentfulService } from 'src/app/contentful.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  blogs: Entry<any>[] = [];

  constructor(
    private router: Router,
    private contentfulService: ContentfulService
  ) { }

  ngOnInit() {
    this.contentfulService.getBlogs()
      .then(blogs => this.blogs = blogs);
      console.log('blogs >>>', this.blogs)
  }

  goToBlogDetailsPage(blogId) {
    console.log(blogId);
    this.router.navigate(['/blog', blogId]);
  }

}