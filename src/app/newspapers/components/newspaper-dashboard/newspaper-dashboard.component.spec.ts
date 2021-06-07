import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewspaperDashboardComponent } from './newspaper-dashboard.component';

describe('NewspaperDashboardComponent', () => {
  let component: NewspaperDashboardComponent;
  let fixture: ComponentFixture<NewspaperDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewspaperDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewspaperDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
