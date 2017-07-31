import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TbScreeningComponent } from './tb-screening.component';

describe('TbScreeningComponent', () => {
  let component: TbScreeningComponent;
  let fixture: ComponentFixture<TbScreeningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TbScreeningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TbScreeningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
