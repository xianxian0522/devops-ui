import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BizSetInformationComponent } from './biz-set-information.component';

describe('BizSetInformationComponent', () => {
  let component: BizSetInformationComponent;
  let fixture: ComponentFixture<BizSetInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BizSetInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BizSetInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
