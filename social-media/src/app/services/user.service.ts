import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return lastValueFrom(this.http.get<User[]>('https://jsonplaceholder.typicode.com/users/'));
  }

  getUser(id: number) {
    return lastValueFrom(this.http.get<User[]>(`https://jsonplaceholder.typicode.com/users/${id}`));
  }
}
