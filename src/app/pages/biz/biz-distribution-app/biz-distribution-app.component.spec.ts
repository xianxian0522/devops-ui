import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BizDistributionAppComponent } from './biz-distribution-app.component';

describe('BizDistributionAppComponent', () => {
  let component: BizDistributionAppComponent;
  let fixture: ComponentFixture<BizDistributionAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BizDistributionAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BizDistributionAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
