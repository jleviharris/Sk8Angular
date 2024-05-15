import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { NgModel } from '@angular/forms';

interface Friend {
  name: string;
}

@Component({
  selector: 'app-friends-list',
  standalone: true,
  templateUrl: './friends-list.component.html',
  imports: [],
  styleUrls: ['./friends-list.component.scss']
})
export class FriendsListComponent implements OnInit {
  friends: Friend[] = [
    { name: 'John' },
    { name: 'Jane' },
    { name: 'Doe' }
  ];
  newFriendName: string = '';
  searchQuery: string = '';
  users: Friend[] = [
    { name: 'Alice' },
    { name: 'Bob' },
    { name: 'Charlie' }
  ];
  searchResults: Friend[] = [];

  constructor() { }

  ngOnInit(): void {
    this.searchResults = this.users;
  }

  addFriend(user?: Friend) {
    if (user) {
      this.friends.push(user);
    } else if (this.newFriendName.trim() !== '') {
      this.friends.push({ name: this.newFriendName });
      this.newFriendName = '';
    }
  }

  removeFriend(friend: Friend) {
    this.friends = this.friends.filter(f => f !== friend);
  }

  searchFriends() {
    this.searchResults = this.users.filter(user =>
      user.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }
}


