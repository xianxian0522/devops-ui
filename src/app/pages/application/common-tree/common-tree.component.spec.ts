import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonTreeComponent } from './common-tree.component';

describe('CommonTreeComponent', () => {
  let component: CommonTreeComponent;
  let fixture: ComponentFixture<CommonTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommonTreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
