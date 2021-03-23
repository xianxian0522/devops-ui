import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BizMembersComponent } from './biz-members.component';

describe('BizMembersComponent', () => {
  let component: BizMembersComponent;
  let fixture: ComponentFixture<BizMembersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BizMembersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BizMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
