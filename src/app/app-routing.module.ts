import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttractionsComponent } from './attractions/attractions.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { HomeComponent } from './home/home.component';
import { LodgingComponent } from './lodging/lodging.component';
import { TransportationComponent } from './transportation/transportation.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'lodging', component: LodgingComponent },
  { path: 'transportation', component: TransportationComponent },
  { path: 'attractions', component: AttractionsComponent },
  { path: 'entertainment', component: EntertainmentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
