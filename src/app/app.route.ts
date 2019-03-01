import { RouterModule, Routes } from '@angular/router'
import { ModuleWithProviders } from '@angular/core'
import { ObservableComponent } from './observable/observable.component';
import { SearchUsersComponent } from './search-users/search-users.component';
import { SubjectComponent } from './subject/subject.component';
import { ColdHotObservablesComponent } from './cold-hot-observables/cold-hot-observables.component';



export const routes: Routes = [
    {
        path:'observable',
        component: ObservableComponent
    },
    {
        path:'operators',
        component: SearchUsersComponent
    },
    {
        path:'subject',
        component: SubjectComponent
    },
    {
        path:'coldVsHot',
        component: ColdHotObservablesComponent
    }
   
]

export const appRoute: ModuleWithProviders = RouterModule.forRoot(routes)

