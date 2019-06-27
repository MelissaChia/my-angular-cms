import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MymailsComponent } from './mymails.component';

describe('MymailsComponent', () => {
  let component: MymailsComponent;
  let fixture: ComponentFixture<MymailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MymailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MymailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
