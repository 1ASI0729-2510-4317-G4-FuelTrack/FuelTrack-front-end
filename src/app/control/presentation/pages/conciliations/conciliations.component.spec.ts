import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConciliationsComponent } from './conciliations.component';

describe('ConciliationsComponent', () => {
  let component: ConciliationsComponent;
  let fixture: ComponentFixture<ConciliationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConciliationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConciliationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
