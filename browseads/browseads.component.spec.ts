import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseadsComponent } from './browseads.component';

describe('BrowseadsComponent', () => {
  let component: BrowseadsComponent;
  let fixture: ComponentFixture<BrowseadsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BrowseadsComponent]
    });
    fixture = TestBed.createComponent(BrowseadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
