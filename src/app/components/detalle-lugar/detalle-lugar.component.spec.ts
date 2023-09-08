import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleLugarComponent } from './detalle-lugar.component';

describe('DetalleLugarComponent', () => {
  let component: DetalleLugarComponent;
  let fixture: ComponentFixture<DetalleLugarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleLugarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleLugarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
