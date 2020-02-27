import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightBlockComponent } from './right-block.component';

describe('RightBlockComponent', () => {
  let component: RightBlockComponent;
  let fixture: ComponentFixture<RightBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
