import { ComponentFixture, TestBed } from '@angular/core/testing';
import {NimGameMatchesViewComponent} from './nim-game-matches-view.component';

describe('NimGameComponent', () => {
  let component: NimGameMatchesViewComponent;
  let fixture: ComponentFixture<NimGameMatchesViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NimGameMatchesViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NimGameMatchesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
