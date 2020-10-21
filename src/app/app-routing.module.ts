import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EngineComponent } from './engine/engine.component';
import { HomeComponent } from './home/home.component';
import { ThreedeeComponent } from './threedee/threedee.component';
import { SphereComponent } from './sphere/sphere.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'ThreeDee', component: ThreedeeComponent},
  {path: 'Engine', component: EngineComponent},
  {path: 'Sphere', component: SphereComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
