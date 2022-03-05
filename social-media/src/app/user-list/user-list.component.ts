import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users!: User[];

  constructor(private userService: UserService, private router: Router) { }

  async ngOnInit() {
    this.users = await this.userService.getUsers();
  }

  async navigateToPosts(userId: number) {
    this.router.navigate([ 'posts', 'user', userId ]);
  }
}
