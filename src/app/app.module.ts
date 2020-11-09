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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from './authentification/auth-interceptor.service';
import { DatePipe } from '@angular/common';
import { DetailComponent } from './mes-recettes/detail/detail.component';
import { FooterComponent } from './footer/footer.component';
import { NouvelleComponent } from './mes-recettes/nouvelle/nouvelle.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    NavigationComponent,
    MesRecettesComponent,
    RecettesPartageesComponent,
    ConseilsComponent,
    AuthentificationComponent,
    DetailComponent,
    FooterComponent,
    NouvelleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true,
  }, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
