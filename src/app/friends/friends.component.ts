import { Component, OnInit } from '@angular/core';
import { Friend } from '../friend';
import { FriendService } from '../friend.service';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  friends: Friend[] = [];

  urlAvatar = 'https://i.pravatar.cc/150?u=';

  constructor(private friendService: FriendService) {
   }

  ngOnInit(): void {
  }

  viewFriends(): void {
    console.log('view friends');
    this.friendService.getFriends().subscribe(
       res => this.friends = res.listoffriends);
  }

  addFriend(newFriend: string): void {
    //TODO
  }

  myEncode(toEncode: string): string {
    return btoa(toEncode);
  }

}
