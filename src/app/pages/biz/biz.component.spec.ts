import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BizComponent } from './biz.component';

describe('BizComponent', () => {
  let component: BizComponent;
  let fixture: ComponentFixture<BizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
