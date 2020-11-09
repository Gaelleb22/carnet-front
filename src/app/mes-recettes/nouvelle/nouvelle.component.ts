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

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      nom: ['', [Validators.required, Validators.minLength(2)]],
      quantite: [''],
      label: [''],
      tempsPreparation: [''],
      tempsCuisson: [''],
      classement: [''],
      statut: [''],
      ingredients: this.fb.array([
        this.fb.group({
          nom:  [''],
          quantite:  ['']
        })
      ]),
      etapes: this.fb.array([
        this.fb.control('')
      ]),
      astuces: this.fb.array([
        this.fb.control(null)
      ])
    });
  }

  // méthodes pour form ingrédients
  initIngredient() {

    const group: FormGroup = this.fb.group({
      nom:  [''],
      quantite:  ['']
    });

    this.ingredients.push(group);

    /*return this.fb.group({

    });*/
  }
  get ingredients() {
    return this.myForm.get('ingredients') as FormArray;
  }

  addIngredient() {
    this.ingredients.push(this.fb.group({
      nom:  [''],
      quantite:  ['']
    }));
  }

  removeIngredient(i: number) {
    this.ingredients.removeAt(i);
  }

  // étapes
  get etapes() {
    return this.myForm.get('etapes') as FormArray;
  }

  addEtape() {
    this.etapes.push(this.fb.control(''));
  }
  removeEtape(i: number) {
    this.etapes.removeAt(i);
  }

  // astuces
  get astuces() {
    return this.myForm.get('astuces') as FormArray;
  }
  addAstuce() {
    this.astuces.push(this.fb.control(''));
  }
  removeAstuce(i: number) {
    this.astuces.removeAt(i);
  }

  submit(): void{
    let recette = new Recette();
    recette = this.myForm.value;

    console.log(recette);
  }

}
