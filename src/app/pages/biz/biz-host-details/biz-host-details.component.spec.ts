import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BizHostDetailsComponent } from './biz-host-details.component';

describe('BizHostDetailsComponent', () => {
  let component: BizHostDetailsComponent;
  let fixture: ComponentFixture<BizHostDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BizHostDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BizHostDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
