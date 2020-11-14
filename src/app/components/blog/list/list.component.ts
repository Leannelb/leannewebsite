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

  courses: Entry<any>[] = [];

  constructor(
    private router: Router,
    private contentfulService: ContentfulService
  ) { }

  ngOnInit() {
    this.contentfulService.getCourses()
      .then(courses => this.courses = courses);
      console.log('courses >>>', this.courses)
  }

  goToCourseDetailsPage(courseId) {
    console.log(courseId);
    this.router.navigate(['/course', courseId]);
  }

}