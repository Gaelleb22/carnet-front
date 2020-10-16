/**
 * Utilisateur de l'application
 */
export class Utilisateur{

  uuid: string;
  pseudo: string;
  motDePasse: string;
  role: string;

  constructor(params: any) {
    Object.assign(this, params);
  }

  estAnonyme(): boolean {
    return this.pseudo === undefined;
  }

}
