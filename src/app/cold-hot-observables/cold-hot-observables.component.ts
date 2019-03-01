import { Component, OnInit } from '@angular/core';
import { interval, Observable, Subject } from 'rxjs';
import { take, map } from 'rxjs/operators';

@Component({
  selector: 'app-cold-hot-observables',
  templateUrl: './cold-hot-observables.component.html',
  styleUrls: ['./cold-hot-observables.component.css']
})
export class ColdHotObservablesComponent implements OnInit {
  defaultSubscriber: number = 0;
  afterTenSeconds: number = 0;
  afterFiveSeconds: number = 0;

  defaultSubscriberHot: number = 0;
  afterTenSecondsHot: number = 0;
  afterFiveSecondsHot: number = 0;

  coldObservable: Observable<number> = interval(1000).pipe(
    take(5),
    map(value => value + 1)
  );

  intervalObservable: Observable<number> = interval(1000).pipe(
    take(30),
    map(value => value + 1)
  );

  hotObservable = new Subject<number>();


  constructor() { }

  ngOnInit() {
    // cold observables
    this.coldObservable.subscribe(time => this.defaultSubscriber = time);
    setTimeout(() => {
      this.coldObservable.subscribe(time => this.afterFiveSeconds = time);
    }, 5000);

    setTimeout(() => {
      this.coldObservable.subscribe(time => this.afterTenSeconds = time);
    }, 10000);


   // Hot observables 
   this.intervalObservable.subscribe(time => this.hotObservable.next(time));

   this.hotObservable.subscribe(time => this.defaultSubscriberHot = time);

   setTimeout(() => {
    this.hotObservable.subscribe(time => this.afterFiveSecondsHot = time);
  }, 5000);

  setTimeout(() => {
    this.hotObservable.subscribe(time => this.afterTenSecondsHot = time);
  }, 10000);
       
  }

}
