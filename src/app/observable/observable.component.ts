import { Component, OnInit, OnDestroy } from '@angular/core';
import { SampleService } from '../sample.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {

  serverData: any[] = [];
  errData: any;
  serverSubscription: Subscription;

  ngOnInit() {
  }

  constructor(private sampleService: SampleService) { }

  getDataFromServer() {
    const serverObservable = this.sampleService.getSampleData();
    this.serverSubscription = serverObservable.subscribe(
      (res) => {
      // when next is executed in the Observable
      console.log('got some response')
      this.serverData = res;
    },
      (error) => {
        // when error is executed in the Observable
        this.errData = error;
      }, () => {
        // when complete is executed in the Observable
        console.log('Observable is completed');
      })
  }

  // to avoid the memory leaks in the application we need to unsubscribe when we no longer using that observable
  // ngOnDestroy() {
  //   this.serverSubscription.unsubscribe();
  // }

}
