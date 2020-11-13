import { Utilisateur } from '../authentification/authentification.domain';
import { Astuces } from './astuces.domain';
import { Etape } from './etape.domain';
import { Ingredient } from './ingredient.domain';

export class RecetteDto {
  nom: string;
  preparation: number;
  cuisson: number;
  classement: number;
  statut: string;
  //user: Utilisateur;
  ingredients: Ingredient[];
  etapes: Etape[];
  astuces: Astuces[];
  url: string;
  quantite: number;
  label: string;

}
