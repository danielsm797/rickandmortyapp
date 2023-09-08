import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkeletonDetalleComponent } from './skeleton-detalle.component';

describe('SkeletonDetalleComponent', () => {
  let component: SkeletonDetalleComponent;
  let fixture: ComponentFixture<SkeletonDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkeletonDetalleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkeletonDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
