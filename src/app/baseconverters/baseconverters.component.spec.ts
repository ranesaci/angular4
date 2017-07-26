import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseconvertersComponent } from './baseconverters.component';

describe('BaseconvertersComponent', () => {
  let component: BaseconvertersComponent;
  let fixture: ComponentFixture<BaseconvertersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseconvertersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseconvertersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
