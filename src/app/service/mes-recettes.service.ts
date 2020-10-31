import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Recette } from '../entity/recette.domain';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})

export class MesRecettesService {

  URL_BACKEND = environment.baseUrl;

  constructor(private http: HttpClient) { }

  /** lister les recettes de l'utilisateur */
  listerRecette(): Observable<Recette[]> {
    return this.http.get<Recette[]>(`${this.URL_BACKEND}recettes`);
  }

  /** afficher une recette suivant uuid */
  getRecetteByUuid(uuid: string): Observable<Recette>{
    return this.http.get<Recette>(`${this.URL_BACKEND}recettes/${uuid}`);
  }
}
