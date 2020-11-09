import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvelleComponent } from './nouvelle.component';

describe('NouvelleComponent', () => {
  let component: NouvelleComponent;
  let fixture: ComponentFixture<NouvelleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NouvelleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NouvelleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
