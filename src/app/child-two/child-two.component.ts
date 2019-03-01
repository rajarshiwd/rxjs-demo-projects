import { Component, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { SampleService } from '../sample.service';

@Component({
  selector: 'app-child-two',
  templateUrl: './child-two.component.html',
  styleUrls: ['./child-two.component.css']
})
export class ChildTwoComponent implements OnInit {
  message;
  constructor(private sampleService: SampleService) { }

  ngOnInit() {
    this.sampleService.messenger.subscribe(message => {
      this.message = message
    })
  }

}
