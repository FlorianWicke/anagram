import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnagramTestComponent } from './anagram-test.component';

describe('AnagramTestComponent', () => {
  let component: AnagramTestComponent;
  let fixture: ComponentFixture<AnagramTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnagramTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnagramTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
