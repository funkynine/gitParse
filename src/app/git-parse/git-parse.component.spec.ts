import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitParseComponent } from './git-parse.component';

describe('GitParseComponent', () => {
  let component: GitParseComponent;
  let fixture: ComponentFixture<GitParseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitParseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitParseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
