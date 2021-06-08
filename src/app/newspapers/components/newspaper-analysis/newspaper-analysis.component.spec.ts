import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewspaperAnalysisComponent } from './newspaper-analysis.component';

describe('NewspaperAnalysisComponent', () => {
  let component: NewspaperAnalysisComponent;
  let fixture: ComponentFixture<NewspaperAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewspaperAnalysisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewspaperAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
