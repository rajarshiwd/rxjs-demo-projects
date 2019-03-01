import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { appRoute } from './app.route';
import { ObservableComponent } from './observable/observable.component';
import { SearchUsersComponent } from './search-users/search-users.component';
import { SampleService } from './sample.service';
import { HttpClientModule } from '@angular/common/http';
import { SubjectComponent } from './subject/subject.component';
import { ChildOneComponent } from './child-one/child-one.component';
import { ChildTwoComponent } from './child-two/child-two.component';
import { ColdHotObservablesComponent } from './cold-hot-observables/cold-hot-observables.component';

@NgModule({
  declarations: [
    AppComponent,
    ObservableComponent,
    SearchUsersComponent,
    SubjectComponent,
    ChildOneComponent,
    ChildTwoComponent,
    ColdHotObservablesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    appRoute,
  ],
  providers: [
    SampleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
