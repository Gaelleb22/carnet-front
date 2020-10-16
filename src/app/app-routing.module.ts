import { ConseilsComponent } from './conseils/conseils.component';
import { RecettesPartageesComponent } from './recettes-partagees/recettes-partagees.component';
import { MesRecettesComponent } from './mes-recettes/mes-recettes.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StatutConnecteService } from './authentification/statut-connecte.service';

const routes: Routes = [
  {path: 'connexion', component: AuthentificationComponent},
  // Accessible si utilisateur connecté
  {path: 'accueil', component: AccueilComponent, canActivate: [StatutConnecteService] },
  {path: 'mes-recettes', component: MesRecettesComponent, canActivate: [StatutConnecteService] },
  {path: 'recettes-partagees', component: RecettesPartageesComponent, canActivate: [StatutConnecteService] },
  {path: 'conseils', component: ConseilsComponent, canActivate: [StatutConnecteService] },
  { path: '', redirectTo: '/connexion', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
