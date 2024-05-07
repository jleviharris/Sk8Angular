import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkateparksListComponent } from './skateparks-list.component';

describe('SkateparksListComponent', () => {
  let component: SkateparksListComponent;
  let fixture: ComponentFixture<SkateparksListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkateparksListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SkateparksListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
