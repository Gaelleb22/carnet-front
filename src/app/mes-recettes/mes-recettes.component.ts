import { AuthService } from './../authentification/authentification.service';
import { Observable, Subscription } from 'rxjs';
import { MesRecettesService } from './../service/mes-recettes.service';
import { Component, OnInit } from '@angular/core';
import { Recette } from '../entity/recette.domain';
import { Utilisateur } from '../authentification/authentification.domain';

@Component({
  selector: 'app-mes-recettes',
  templateUrl: './mes-recettes.component.html',
  styleUrls: ['./mes-recettes.component.css']
})
export class MesRecettesComponent implements OnInit {

  recettes: Recette[];
  utilisateurConnecte: Observable<Utilisateur>;
  userSub: Subscription;

  constructor(private service: MesRecettesService, private authService: AuthService) {}

  ngOnInit(): void {
    this.utilisateurConnecte = this.authService.utilisateurConnecteObs;
    this.userSub = this.service.listerRecette().subscribe(
      value => {
        this.recettes = value;
      },
      err => console.log(err),
      () => { }
    );
  }

}
