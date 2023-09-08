import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonajesComponent } from './pages/personajes/personajes.component';
import { LugaresComponent } from './pages/lugares/lugares.component';
import { EpisodiosComponent } from './pages/episodios/episodios.component';

const routes: Routes = [
  {
    path: 'personajes',
    component: PersonajesComponent
  },
  {
    path: 'lugares',
    component: LugaresComponent
  },
  {
    path: 'episodios',
    component: EpisodiosComponent
  },
  {
    path: '',
    redirectTo: '/personajes',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
