import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSetInformationComponent } from './app-set-information.component';

describe('AppSetInformationComponent', () => {
  let component: AppSetInformationComponent;
  let fixture: ComponentFixture<AppSetInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppSetInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppSetInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
