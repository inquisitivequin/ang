import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccesscdComponent } from './successcd.component';

describe('SuccesscdComponent', () => {
  let component: SuccesscdComponent;
  let fixture: ComponentFixture<SuccesscdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccesscdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccesscdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
