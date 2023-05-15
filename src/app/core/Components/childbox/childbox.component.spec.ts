import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildboxComponent } from './childbox.component';

describe('ChildboxComponent', () => {
  let component: ChildboxComponent;
  let fixture: ComponentFixture<ChildboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChildboxComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ChildboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
