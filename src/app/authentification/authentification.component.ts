import { Utilisateur } from './authentification.domain';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './authentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {

  utilisateur: Utilisateur = new Utilisateur({});
  err: boolean;

  constructor(private authSrv: AuthService, private router: Router) { }

  ngOnInit() {
  }

  connecter() {
    this.authSrv.connecter(this.utilisateur.pseudo, this.utilisateur.motDePasse)
      .subscribe(
        // en cas de succès, redirection vers la page /tech
        col => this.router.navigate(['/accueil']),

        // en cas d'erreur, affichage d'un message d'erreur
        err => this.err = true
      );
  }

}
