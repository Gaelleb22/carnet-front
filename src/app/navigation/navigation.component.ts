import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../authentification/authentification.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  public isMenuCollapsed = true;

  constructor(private authSrv: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  /**
   * Action déconnecter utilisateur.
   */
  seDeconnecter() {
    this.authSrv.seDeconnecter().subscribe(
      () => this.router.navigate(['/connexion'])
    );
  }

}
