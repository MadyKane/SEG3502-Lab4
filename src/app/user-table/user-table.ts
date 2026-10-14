import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-table',
  imports: [RouterLink],
  templateUrl: './user-table.html',
  styleUrl: './user-table.css'
})
export class UserTable implements OnInit {
  private userService: UserService = inject(UserService);
  users: User[] = [];

  ngOnInit(): void {
    this.users = this.userService.getUsers();
  }
}
