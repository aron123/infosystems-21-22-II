import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Comment } from '../models/comment';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPosts() {
    return lastValueFrom(this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts'));
  }

  deletePost(id: number) {
    return lastValueFrom(this.http.delete(`https://jsonplaceholder.typicode.com/posts/${id}`));
  }

  getComments(postId: number) {
    return lastValueFrom(this.http.get<Comment[]>(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`));
  }

  getPostsOfUser(userId: number) {
    return lastValueFrom(this.http.get<Post[]>(`https://jsonplaceholder.typicode.com/users/${userId}/posts`));
  }
}
