import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvancadoComponent } from './avancado.component';

describe('AvancadoComponent', () => {
  let component: AvancadoComponent;
  let fixture: ComponentFixture<AvancadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvancadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvancadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
