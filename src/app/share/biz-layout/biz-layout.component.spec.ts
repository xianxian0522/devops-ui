import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BizLayoutComponent } from './biz-layout.component';

describe('BizLayoutComponent', () => {
  let component: BizLayoutComponent;
  let fixture: ComponentFixture<BizLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BizLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BizLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
