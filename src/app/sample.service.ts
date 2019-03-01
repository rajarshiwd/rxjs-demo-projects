import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class SampleService {
  messenger = new BehaviorSubject<string>('My default message');

  constructor(
    private http: HttpClient
  ) { }

  getSampleData(): Observable<any> {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    return this.http.get(url);
  }

  getUserDataBasedOnFullName(name: string): Observable<any>{
    const url = `https://api.github.com/search/users?q=${name}`;
    return this.http.get(url);
  }

  sendMessageToAllSubscribers(message){
    this.messenger.next(message);
  }
}
