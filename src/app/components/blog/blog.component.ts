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
 
  course: Entry<any>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contentfulService: ContentfulService
  ) { }

  ngOnInit() {
    const courseId = this.route.snapshot.paramMap.get('id');
    this.contentfulService.getCourse(courseId)
      .then((course) => {
        this.course = course;
        console.log(this.course);
        
      });
  }

  goToList() {
    this.router.navigate(['/courses']);
  }

}