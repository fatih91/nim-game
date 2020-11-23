import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NimGamePlayerSelectionViewComponent } from './nim-game-player-selection-view.component';

describe('NimGamePlayerSelectionViewComponent', () => {
  let component: NimGamePlayerSelectionViewComponent;
  let fixture: ComponentFixture<NimGamePlayerSelectionViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NimGamePlayerSelectionViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NimGamePlayerSelectionViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
