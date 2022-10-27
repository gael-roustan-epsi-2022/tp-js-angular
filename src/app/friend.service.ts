import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Friends } from './friends';


@Injectable({
  providedIn: 'root'
})
export class FriendService {

  constructor(private http: HttpClient) { }

  getFriends(): Observable<Friends> {
    return this.http.get<Friends>('http://localhost:4567/api/friends');
  }
}
