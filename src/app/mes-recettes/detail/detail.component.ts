import { MesRecettesService } from './../../service/mes-recettes.service';
import { Component, OnInit } from '@angular/core';
import { Recette } from 'src/app/entity/recette.domain';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  recette: Recette;
  uuid: string;

  constructor(private route: ActivatedRoute, private service: MesRecettesService) {
    this.uuid = route.snapshot.paramMap.get('uuid');
  }

  ngOnInit(): void {
    this.service.getRecetteByUuid(this.uuid).subscribe(
      valeur => this.recette = valeur
    );
  }

}
