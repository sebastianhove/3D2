import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreedeeComponent } from './threedee.component';

describe('ThreedeeComponent', () => {
  let component: ThreedeeComponent;
  let fixture: ComponentFixture<ThreedeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreedeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreedeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
