import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCharacterComponent } from './add-character.component';

describe('CharacterComponent', () => {
  let component: AddCharacterComponent;
  let fixture: ComponentFixture<AddCharacterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddCharacterComponent]
    });
    fixture = TestBed.createComponent(AddCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
