import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../models/post';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts!: Post[];

  constructor(private postService: PostService, private activatedRoute: ActivatedRoute) { }

  async ngOnInit() {
    const userId = this.activatedRoute.snapshot.paramMap.get('userId');
    
    if (userId) {
      this.posts = await this.postService.getPostsOfUser(parseInt(userId));
    } else {
      this.posts = await this.postService.getPosts();
    }
  }

  async deletePost(id: number) {
    try {
      await this.postService.deletePost(id);
      this.posts = this.posts.filter(post => post.id !== id);
    } catch (err) {
      console.error(err);
    }
  }

  async loadComments(index: number) {
    this.posts[index].comments = await this.postService.getComments(this.posts[index].id);
  }
}
