import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMembersComponent } from './app-members.component';

describe('AppMembersComponent', () => {
  let component: AppMembersComponent;
  let fixture: ComponentFixture<AppMembersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppMembersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
