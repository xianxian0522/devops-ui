import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppHostInstanceComponent } from './app-host-instance.component';

describe('AppHostInstanceComponent', () => {
  let component: AppHostInstanceComponent;
  let fixture: ComponentFixture<AppHostInstanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppHostInstanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppHostInstanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
