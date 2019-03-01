import { Component, OnInit } from '@angular/core';
import { SampleService } from '../sample.service';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.css']
})
export class ChildOneComponent implements OnInit {
  message;
  constructor(private sampleService: SampleService) { }

  ngOnInit() {
    this.sampleService.messenger.subscribe(message => {
      this.message = message
    })
  }

}
