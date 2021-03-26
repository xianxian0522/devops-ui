import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSetClusterEditComponent } from './app-set-cluster-edit.component';

describe('AppSetClusterEditComponent', () => {
  let component: AppSetClusterEditComponent;
  let fixture: ComponentFixture<AppSetClusterEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppSetClusterEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppSetClusterEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
