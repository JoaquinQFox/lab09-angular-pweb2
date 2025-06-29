import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogicaAhorcado } from './logica-ahorcado';

describe('LogicaAhorcado', () => {
  let component: LogicaAhorcado;
  let fixture: ComponentFixture<LogicaAhorcado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogicaAhorcado]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogicaAhorcado);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
