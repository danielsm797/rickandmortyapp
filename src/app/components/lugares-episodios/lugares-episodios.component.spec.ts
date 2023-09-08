import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LugaresEpisodiosComponent } from './lugares-episodios.component';

describe('LugaresEpisodiosComponent', () => {
  let component: LugaresEpisodiosComponent;
  let fixture: ComponentFixture<LugaresEpisodiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LugaresEpisodiosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LugaresEpisodiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
