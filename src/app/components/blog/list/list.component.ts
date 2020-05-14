import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { BlogService } from 'src/app/services/blog.service';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent, SubscriptionLike, PartialObserver } from 'rxjs';

@Component({
  selector: 'lillycode-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  posts: Observable<Post[]>

  constructor( private blogService: BlogService) { }

  ngOnInit() {
    // this.posts = this.blogService.getPosts()
    // console.log(this);
  }

}
