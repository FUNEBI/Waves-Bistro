import { NgModule } from '@angular/core';
import { WaveHomepageComponent } from './wave-homepage/wave-homepage.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',component:WaveHomepageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
