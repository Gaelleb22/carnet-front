import { Recette } from '../entity/recette.domain';

/**
 * Utilisateur de l'application
 */
export class Utilisateur{

  uuid: string;
  pseudo: string;
  motDePasse: string;
  role: string;
  recettes: Recette[];

  constructor(params: any) {
    Object.assign(this, params);
  }

  estAnonyme(): boolean {
    return this.pseudo === undefined;
  }

}
