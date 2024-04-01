import { Routes } from '@angular/router';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';

export const routes: Routes = [
  { path: '', component: PaginaInicialComponent, title: 'Home' },
  { path: 'sobre-nos', component: SobreNosComponent, title: 'Sobre nozes' },
];
