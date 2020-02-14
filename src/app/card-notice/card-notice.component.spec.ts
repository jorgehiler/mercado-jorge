import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardNoticeComponent } from './card-notice.component';

describe('CardNoticeComponent', () => {
  let component: CardNoticeComponent;
  let fixture: ComponentFixture<CardNoticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardNoticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardNoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
