import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppClusterInstanceComponent } from './app-cluster-instance.component';

describe('AppClusterInstanceComponent', () => {
  let component: AppClusterInstanceComponent;
  let fixture: ComponentFixture<AppClusterInstanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppClusterInstanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppClusterInstanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
