import { Utilisateur } from './authentification/authentification.domain';
import { Component } from '@angular/core';
import { AuthService } from './authentification/authentification.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  utilisateurConnecte: Observable<Utilisateur>;

  constructor(private authSrv: AuthService, private router: Router) {

  }



  /**
   * A l'initialisation, le composant s'abonne au flux du collègue courant connecté.
   *
   * Celui lui permet de rester à jour en fonction des connexions et déconnexions.
   */
  ngOnInit(): void {
    this.utilisateurConnecte = this.authSrv.utilisateurConnecteObs;
  }
}
