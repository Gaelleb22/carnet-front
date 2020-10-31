import { TestBed } from '@angular/core/testing';

import { MesRecettesService } from './mes-recettes.service';

describe('MesRecettesService', () => {
  let service: MesRecettesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MesRecettesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
