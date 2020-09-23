import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecettesPartageesComponent } from './recettes-partagees.component';

describe('RecettesPartageesComponent', () => {
  let component: RecettesPartageesComponent;
  let fixture: ComponentFixture<RecettesPartageesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecettesPartageesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecettesPartageesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
