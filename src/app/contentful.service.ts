import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';
import { environment } from 'src/environments/environment.prod';


@Injectable()
export class ContentfulService {

  private client = createClient({
    space: environment.contentful.spaceId,
    accessToken: environment.contentful.token
  });

  constructor() { }

  getBlogs(query?: object): Promise<Entry<any>[]> {
    return this.client.getEntries(Object.assign({
      content_type: 'blog'
    }, query))
      .then(res => res.items);
  }

  getBlog(blogId): Promise<Entry<any>> {
    return this.client.getEntries(Object.assign({
     content_type: 'blog'
    }, {'sys.id': blogId}))
      .then(res => res.items[0]);
  }
}