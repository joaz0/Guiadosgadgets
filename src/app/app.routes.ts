import { Routes } from '@angular/router';

import { ComparacoesComponent } from './pages/comparacoes/comparacoes';
import { ContatoComponent } from './pages/contato/contato';
import { HomeComponent } from './pages/home/home';
import { PoliticasAfiliadosComponent } from './pages/politicas-afiliados/politicas-afiliados';
import { PromocoesComponent } from './pages/promocoes/promocoes';
import { ReviewsComponent } from './pages/reviews/reviews';
import { SobreComponent } from './pages/sobre/sobre';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Home' },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: 'sobre', component: SobreComponent, title: 'Sobre' },
  { path: 'contato', component: ContatoComponent, title: 'Contato' },
  {
    path: 'politicas-afiliados',
    component: PoliticasAfiliadosComponent,
    title: 'Politicas de Afiliados'
  },
  { path: 'reviews', component: ReviewsComponent, title: 'Reviews' },
  { path: 'comparacoes', component: ComparacoesComponent, title: 'Comparacoes' },
  { path: 'promocoes', component: PromocoesComponent, title: 'Promocoes' },
  { path: '**', redirectTo: 'reviews' }
];
