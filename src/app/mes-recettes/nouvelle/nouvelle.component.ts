import { RecetteDto } from './../../entity/recetteDto.domain';
import { MesRecettesService } from './../../service/mes-recettes.service';
import { Ingredient } from './../../entity/ingredient.domain';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Recette } from 'src/app/entity/recette.domain';

@Component({
  selector: 'app-nouvelle',
  templateUrl: './nouvelle.component.html',
  styleUrls: ['./nouvelle.component.css']
})
export class NouvelleComponent implements OnInit {

  myForm: FormGroup;

  constructor(private fb: FormBuilder, private service: MesRecettesService) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      nom: ['', [Validators.required, Validators.minLength(2)]],
      quantite: ['', [Validators.required, Validators.min(0)]],
      label: ['', [Validators.required]],
      preparation: ['', [Validators.required, Validators.min(0)]],
      cuisson: ['', [Validators.required, Validators.min(0)]],
      classement: ['', [Validators.required]],
      statut: ['', [Validators.required]],
      ingredients: this.fb.array([
        this.fb.group({
          nom:  ['', [Validators.required]],
          quantite:  ['', [Validators.required]]
        })
      ]),
      etapes: this.fb.array([
        this.fb.group({
          texte: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(250)]]
        })
      ]),
      astuces: this.fb.array([])
    });
  }

  // méthodes pour form ingrédients
  get ingredients() {
    return this.myForm.get('ingredients') as FormArray;
  }

  addIngredient(): void {
    this.ingredients.push(this.fb.group({
      nom:  ['', [Validators.required]],
      quantite:  ['', [Validators.required]]
    }));
  }

  removeIngredient(i: number): void {
    this.ingredients.removeAt(i);
  }

  // étapes
  get etapes() {
    return this.myForm.get('etapes') as FormArray;
  }

  addEtape(): void {
    this.etapes.push(this.fb.group({
      texte: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(250)]]
    }));
  }
  removeEtape(i: number): void {
    this.etapes.removeAt(i);
  }

  // astuces
  get astuces() {
    return this.myForm.get('astuces') as FormArray;
  }
  addAstuce(): void {
    this.astuces.push(this.fb.group({
      astuce: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(250)]]
    }));
  }
  removeAstuce(i: number): void {
    this.astuces.removeAt(i);
  }

  submit(): void{
    let recette = new RecetteDto();
    recette = this.myForm.value;
    recette.url = './assets/card-defaut.JPG';
    console.log(recette);
    this.service.createNewRecette(recette);
  }

}
