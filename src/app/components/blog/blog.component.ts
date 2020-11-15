import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Entry } from 'contentful';
import { ContentfulService } from 'src/app/contentful.service';

type NewType = ActivatedRoute;

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
 
  blog: Entry<any>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contentfulService: ContentfulService
  ) { }

  ngOnInit() {
    const blogId = this.route.snapshot.paramMap.get('id');
    this.contentfulService.getBlog(blogId)
      .then((blog) => {
        this.blog = blog;
        console.log(this.blog,'>>>>>>>>this.blog');
        
      });
  }

  goToList() {
    this.router.navigate(['/blogs']);
  }

}