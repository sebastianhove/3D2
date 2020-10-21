import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ThreedeeComponent } from './threedee/threedee.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'ThreeDee', component: ThreedeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
