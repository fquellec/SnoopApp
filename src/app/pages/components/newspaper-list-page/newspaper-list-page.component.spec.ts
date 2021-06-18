import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewspaperListPageComponent } from './newspaper-list-page.component';

describe('NewspaperListPageComponent', () => {
  let component: NewspaperListPageComponent;
  let fixture: ComponentFixture<NewspaperListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewspaperListPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewspaperListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
