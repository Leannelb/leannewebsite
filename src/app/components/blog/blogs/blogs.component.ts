  import { Component, OnInit } from '@angular/core';
  import { Router, ActivatedRoute, ParamMap } from '@angular/router';
  import { Entry } from 'contentful';
  
  @Component({
    selector: 'app-blogs',
    templateUrl: './blogs.component.html',
    styleUrls: ['./blogs.component.css']
  })
  export class BlogsComponent implements OnInit {
    blog: Entry<any>;
    constructor(
      private route: ActivatedRoute,
      private router: Router,
    ) { }

    ngOnInit() {
      // const blogId = this.route.snapshot.paramMap.get('id');
      // this.contentfulService.getblog(blogId)
      //   .then((blog) => {
      //     this.blog = blog;
      //     console.log(this.blog);
      //   });
    }
    goToList() {
      // this.router.navigate(['/blogs']);
    }
  }
