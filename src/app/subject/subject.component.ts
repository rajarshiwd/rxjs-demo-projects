import { Component, OnInit } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { SampleService } from '../sample.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {
  searchFieldForm: FormGroup;
  message: string;

  constructor(private sampleService: SampleService, private fb: FormBuilder) { }

  ngOnInit() {
    this.searchFieldForm = this.fb.group({
      searchField: ['']
    });

    this.sampleService.messenger.subscribe(message => {
      this.message = message
    })
  }

  sendMessage(){
    this.sampleService.sendMessageToAllSubscribers(this.searchFieldForm.controls.searchField.value);
  }

}
