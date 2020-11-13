import { RecetteDto } from './../entity/recetteDto.domain';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
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

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  /** lister les recettes de l'utilisateur */
  listerRecette(): Observable<Recette[]> {
    return this.http.get<Recette[]>(`${this.URL_BACKEND}recettes`);
  }

  /** afficher une recette suivant uuid */
  getRecetteByUuid(uuid: string): Observable<Recette>{
    return this.http.get<Recette>(`${this.URL_BACKEND}recettes/${uuid}`);
  }

  /** créer une nouvelle recette */
  createNewRecette(recette: RecetteDto): void {
    this.http.post(`${this.URL_BACKEND}recettes`,
      JSON.stringify(recette),
      this.httpOptions
    ).subscribe((data: any) => {
      console.log('Création nouvelle recette !')
    }, (error: HttpErrorResponse) => {
      console.log('error', error);
      if (error.status === 409) {
        console.log(error);
      }
      else if (error.status === 400) {
        alert('Veuillez remplir tous les champs !');
      }
    });
  }
}
