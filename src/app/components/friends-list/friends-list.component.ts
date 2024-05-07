import { Component, OnInit } from '@angular/core';
//import { FriendService } from '../../services/friend.service';
//import { Friend } from '../../models/friend';

@Component({
  selector: 'app-friends-list',
  templateUrl: './friends-list.component.html',
  styleUrls: ['./friends-list.component.scss']
})
export class FriendsListComponent implements OnInit {
  // Array to hold the list of friends
  //friends: Friend[] = [];

  // Inject the FriendService into the constructor
  constructor(//private friendService: FriendService
  ) {}

  // Lifecycle hook to fetch the list of friends on component initialization
  ngOnInit(): void {
    // Retrieve the list of friends from the service
   // this.friendService.getFriends().subscribe((data: Friend[]) => {
     // this.friends = data;
    //});
  }

  // Additional methods for handling friend actions (e.g., adding, removing) can be defined here
  // Example:
  // addFriend(newFriend: Friend): void {
  //   this.friendService.addFriend(newFriend).subscribe((friend) => {
  //     this.friends.push(friend);
  //   });
  // }

  // removeFriend(friendId: string): void {
  //   this.friendService.removeFriend(friendId).subscribe(() => {
  //     this.friends = this.friends.filter(friend => friend.id !== friendId);
  //   });
  // }
}
