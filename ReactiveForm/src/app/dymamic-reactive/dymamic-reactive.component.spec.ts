import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DymamicReactiveComponent } from './dymamic-reactive.component';

describe('DymamicReactiveComponent', () => {
  let component: DymamicReactiveComponent;
  let fixture: ComponentFixture<DymamicReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DymamicReactiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DymamicReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
