import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowModelComponent } from './window-model.component';

describe('WindowModelComponent', () => {
  let component: WindowModelComponent;
  let fixture: ComponentFixture<WindowModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WindowModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WindowModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
