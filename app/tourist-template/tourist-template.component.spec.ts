import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TouristTemplateComponent } from './tourist-template.component';

describe('TouristTemplateComponent', () => {
  let component: TouristTemplateComponent;
  let fixture: ComponentFixture<TouristTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TouristTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TouristTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
