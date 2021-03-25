import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BizMemberEditComponent } from './biz-member-edit.component';

describe('BizMemberEditComponent', () => {
  let component: BizMemberEditComponent;
  let fixture: ComponentFixture<BizMemberEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BizMemberEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BizMemberEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
