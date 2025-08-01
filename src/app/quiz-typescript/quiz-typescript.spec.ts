import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizTypescript } from './quiz-typescript';

describe('QuizTypescript', () => {
  let component: QuizTypescript;
  let fixture: ComponentFixture<QuizTypescript>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuizTypescript]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizTypescript);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
