import { ConseilsComponent } from './conseils/conseils.component';
import { RecettesPartageesComponent } from './recettes-partagees/recettes-partagees.component';
import { MesRecettesComponent } from './mes-recettes/mes-recettes.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'connexion', component: AuthentificationComponent},
  // Accessible si utilisateur connecté
  {path: 'accueil', component: AccueilComponent},
  {path: 'mes-recettes', component: MesRecettesComponent},
  {path: 'recettes-partagees', component: RecettesPartageesComponent},
  {path: 'conseils', component: ConseilsComponent},
  { path: '', redirectTo: '/connexion', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
