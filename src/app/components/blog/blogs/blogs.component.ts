  import { Component, OnInit } from '@angular/core';
  import { Router, ActivatedRoute, ParamMap } from '@angular/router';
  import { Entry } from 'contentful';
import { ContentfulService } from 'src/app/services/contentful2.service';
  
  @Component({
    selector: 'app-blogs',
    templateUrl: './blogs.component.html',
    styleUrls: ['./blogs.component.css']
  })
  export class BlogsComponent implements OnInit {
    course: Entry<any>;
    constructor(
      private route: ActivatedRoute,
      private router: Router,
      private contentfulService: ContentfulService
    ) { }

    ngOnInit() {
      // const courseId = this.route.snapshot.paramMap.get('id');
      // this.contentfulService.getCourse(courseId)
      //   .then((course) => {
      //     this.course = course;
      //     console.log(this.course);
      //   });
    }
    goToList() {
      // this.router.navigate(['/courses']);
    }
  }
