import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSetClusterComponent } from './app-set-cluster.component';

describe('AppSetClusterComponent', () => {
  let component: AppSetClusterComponent;
  let fixture: ComponentFixture<AppSetClusterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppSetClusterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppSetClusterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
