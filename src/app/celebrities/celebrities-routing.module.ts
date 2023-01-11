import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CelebrityDetailsComponent } from '../celebrity-details/celebrity-details.component';
import { CelebritiesComponent } from './celebrities.component';

const routes: Routes = [{ path: '', component: CelebritiesComponent },
{ path: 'celebrityDetails', component:  CelebrityDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CelebritiesRoutingModule { }
