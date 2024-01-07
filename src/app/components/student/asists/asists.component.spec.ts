import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsistsComponent } from './asists.component';

describe('AsistsComponent', () => {
  let component: AsistsComponent;
  let fixture: ComponentFixture<AsistsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsistsComponent]
    });
    fixture = TestBed.createComponent(AsistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
