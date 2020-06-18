import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StrawberryDetailsComponent } from './strawberry-details/strawberry-details.component';
import { BerrySmoothieComponent } from './berry-smoothie/berry-smoothie.component';
import { ChickenSaladComponent } from './chicken-salad/chicken-salad.component';


const routes: Routes = [
 {
   path:'',
    component:HomeComponent
 },
 {
   path:'strawberry-details',
    component:StrawberryDetailsComponent
 },
 {
   path:'berry-smoothie',
    component:BerrySmoothieComponent
 },
 {
   path:'chicken-salad',
    component:ChickenSaladComponent
 },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
