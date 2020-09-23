import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MesRecettesComponent } from './mes-recettes/mes-recettes.component';
import { RecettesPartageesComponent } from './recettes-partagees/recettes-partagees.component';
import { ConseilsComponent } from './conseils/conseils.component';
import { AuthentificationComponent } from './authentification/authentification.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    NavigationComponent,
    MesRecettesComponent,
    RecettesPartageesComponent,
    ConseilsComponent,
    AuthentificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
