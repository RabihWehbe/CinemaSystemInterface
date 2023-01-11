import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CastsPanelComponent } from '../casts-panel/casts-panel.component';
import { MoviesCastsComponent } from '../movies-casts/movies-casts.component';
import { MoviesPanelComponent } from '../movies-panel/movies-panel.component';
import { AdminsComponent } from './admins.component';

const routes: Routes = [{ path: '', component: AdminsComponent },
{path:'casts-panel',component: CastsPanelComponent},
{path:'movies-panel',component: MoviesPanelComponent},
{path:'movies-casts',component:MoviesCastsComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminsRoutingModule { }
