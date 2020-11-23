import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NimGameGuiContainerComponent } from './nim-game-gui-container.component';

describe('NimGameGuiContainerComponent', () => {
  let component: NimGameGuiContainerComponent;
  let fixture: ComponentFixture<NimGameGuiContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NimGameGuiContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NimGameGuiContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
