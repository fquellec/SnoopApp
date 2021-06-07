import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewspaperDetailPageComponent } from './newspaper-detail-page.component';

describe('NewspaperDetailPageComponent', () => {
  let component: NewspaperDetailPageComponent;
  let fixture: ComponentFixture<NewspaperDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewspaperDetailPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewspaperDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
