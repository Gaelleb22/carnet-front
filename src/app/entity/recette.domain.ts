import { Astuces } from './astuces.domain';
import { Ingredient } from './ingredient.domain';
import { Utilisateur } from './../authentification/authentification.domain';
import { Etape } from './etape.domain';

/** Recette */

export class Recette {
  uuid: string;
  nom: string;
  tempsPreparation: number;
  cuisson: boolean;
  tempsCuisson: number;
  typeCuisson: string;
  repos: boolean;
  tempsRepos: number;
  classement: number;
  statut: string;
  user: Utilisateur;
  ingredients: Ingredient[];
  etapes: Etape[];
  astuces: Astuces[];
  urlPhoto: string;
}