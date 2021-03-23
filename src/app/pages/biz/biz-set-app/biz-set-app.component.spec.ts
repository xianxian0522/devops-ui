import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BizSetAppComponent } from './biz-set-app.component';

describe('BizSetAppComponent', () => {
  let component: BizSetAppComponent;
  let fixture: ComponentFixture<BizSetAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BizSetAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BizSetAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
