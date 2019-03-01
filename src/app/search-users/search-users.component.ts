import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { debounceTime, map } from 'rxjs/operators'
import { Subscription } from 'rxjs';
import { SampleService } from '../sample.service';

@Component({
  selector: 'app-search-users',
  templateUrl: './search-users.component.html',
  styleUrls: ['./search-users.component.css']
})
export class SearchUsersComponent implements OnInit, AfterViewInit {

  searchFieldForm: FormGroup;
  usersData: any[] = [];
  errData: any;
  serverSubscription: Subscription;

  constructor(private sampleService: SampleService, private fb: FormBuilder) { }

  ngOnInit() {
    this.searchFieldForm = this.fb.group({
      searchField: ['']
    })

    this.searchFieldForm.controls.searchField.valueChanges
      .pipe(debounceTime(1000))
      .subscribe(value => {
        console.log(value)
        // call your service endpoint.
        this.getUsersData(value);
      });
  }

  ngAfterViewInit() {

  }


  getUsersData(name) {
    const serverObservable = this.sampleService.getUserDataBasedOnFullName(name);
    this.serverSubscription = serverObservable.pipe(map(res => res.items)).subscribe(res => {
      // when next is executed in the Observable
      console.log(res)
      this.usersData = res;
    },
      (error) => {
        // when error is executed in the Observable
        this.errData = error;
      }, () => {
        // when complete is executed in the Observable
        console.log('Observable is completed');
      })
  }

  // // to avoid the memory leaks in the application we need to unsubscribe when we no longer using that observable
  // ngOnDestroy() {
  //   this.serverSubscription.unsubscribe();
  // }


}
