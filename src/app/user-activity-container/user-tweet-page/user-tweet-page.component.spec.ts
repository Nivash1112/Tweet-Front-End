import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTweetPageComponent } from './user-tweet-page.component';

describe('UserTweetPageComponent', () => {
  let component: UserTweetPageComponent;
  let fixture: ComponentFixture<UserTweetPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserTweetPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTweetPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
