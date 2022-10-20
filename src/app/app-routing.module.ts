import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FizzbuzzComponent } from './pages/fizzbuzz/fizzbuzz.component';
import { HomeComponent } from './pages/home/home.component';
import { LeapyearComponent } from './pages/leapyear/leapyear.component';
import { PatternComponent } from './pages/pattern/pattern.component';
import { PrimeComponent } from './pages/prime/prime.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'fizzbuzz',component:FizzbuzzComponent},
  {path : 'leapyear',component:LeapyearComponent},
  {path:'pattern',component:PatternComponent},
  {path:'prime',component:PrimeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
