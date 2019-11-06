import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import {Post} from '../models/post.model'
import { map, filter, scan } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class BlogService {

  postCollection: AngularFirestoreCollection<Post>
  postDoc: AngularFirestoreDocument<Post>

  constructor(public afs: AngularFirestore ) {
    this.postCollection = this.afs.collection('posts', ref => 
    ref.orderBy('published', 'desc'))
   }

   getPosts() { 
     return this.postCollection.snapshotChanges().pipe(map( actions => {
       return actions.map(a => {
         const data = a.payload.doc.data() as Post
         const id = a.payload.doc.id
         return {id, ...data}
       })
     }
     ))
    }

    getPostData(id: string) {
      this.postDoc = this.afs.doc<Post>(`posts/${id}`)
      return this.postDoc.valueChanges()
    }
    
}

