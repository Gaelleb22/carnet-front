import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { of, BehaviorSubject, Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Utilisateur } from './authentification.domain';

/**
 * Utilisateur anonyme.
 *
 */
const UTILISATEUR_ANONYME = new Utilisateur({});

/**
 * Service de gestion de l'authentification.
 */
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  /**
   * Flux de l'utilisateur connecté. Les abonnés sont notifiés dès qu'une connexion ou une déconnexion a lieu.
   *
   * A l'initialisation, l'utilisateur' connecté vaut 'undefined'.
   *
   */
  private utilisateurConnecteSub: BehaviorSubject<Utilisateur> = new BehaviorSubject(UTILISATEUR_ANONYME);

  constructor(private http: HttpClient) {
  }

  /**
   * Interface Observable de l'utilisateur connecté.
   *
   */
  get utilisateurConnecteObs(): Observable<Utilisateur> {
    return this.utilisateurConnecteSub.asObservable();
  }

  /**
   * Service permettant de vérifier si un utilisateur est authentifié.
   *
   * Une requête HTTP est déclenchée pour récupérer l'utilisateur' connecté s'il n'est pas en cache.
   *
   */
  verifierAuthentification(): Observable<Utilisateur> {
    return this.utilisateurConnecteSub.getValue().estAnonyme() ?
      this.http.get<Utilisateur>(`${environment.baseUrl}${environment.apiAuthMe}`, { withCredentials: true })
        .pipe(
          map(userServeur => new Utilisateur(userServeur)),
          tap(user => this.utilisateurConnecteSub.next(user)),
          catchError(err => of(UTILISATEUR_ANONYME))
        ) : of(this.utilisateurConnecteSub.getValue())
      ;
  }

  /**
   * Connexion de l'utilisateur.
   *
   * Le serveur provoque la création du cookie AUTH-TOKEN.
   *
   */
  connecter(pseudo: string, mdp: string): Observable<Utilisateur> {

    const config = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    };

    return this.http.post(`${environment.baseUrl}${environment.apiLogin}`,
      new HttpParams().set('username', pseudo).set('password', mdp), config)
      .pipe(
        map(userServeur => new Utilisateur(userServeur)),
        tap(col => this.utilisateurConnecteSub.next(col))
      );
  }

  /**
   * Déconnexion de l'utilisateur.
   *
   * Le serveur provoque la suppression du cookie AUTH-TOKEN.
   *
   */
  seDeconnecter() {

    const config = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    };

    return this.http.post<Utilisateur>(`${environment.baseUrl}${environment.apiLogout}`, null, config)
      .pipe(
        tap(col => this.utilisateurConnecteSub.next(UTILISATEUR_ANONYME))
      );
  }
}
