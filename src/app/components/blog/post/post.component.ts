import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Post } from 'src/app/models/post.model';


@Component({
  selector: 'lillycode-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  post: Post

  constructor(
    private route: ActivatedRoute,
    // private blogService: BlogService
  ) { }

  ngOnInit() {
    // this.getPost()
    // console.log(this)
  }

  getPost() {
    // const id = this.route.snapshot.paramMap.get('id');
    // return this.blogService.getPostData(id).subscribe(data => this.post = data)
  }
}
