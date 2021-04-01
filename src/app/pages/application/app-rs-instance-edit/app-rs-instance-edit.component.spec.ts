import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppRsInstanceEditComponent } from './app-rs-instance-edit.component';

describe('AppRsInstanceEditComponent', () => {
  let component: AppRsInstanceEditComponent;
  let fixture: ComponentFixture<AppRsInstanceEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppRsInstanceEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppRsInstanceEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
