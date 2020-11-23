import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NimGameMenuDropdownViewComponent } from './nim-game-menu-dropdown-view.component';

describe('NimGameMenuDropdownViewComponent', () => {
  let component: NimGameMenuDropdownViewComponent;
  let fixture: ComponentFixture<NimGameMenuDropdownViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NimGameMenuDropdownViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NimGameMenuDropdownViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
