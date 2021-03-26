import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppHostDetailsComponent } from './app-host-details.component';

describe('AppHostDetailsComponent', () => {
  let component: AppHostDetailsComponent;
  let fixture: ComponentFixture<AppHostDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppHostDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppHostDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
