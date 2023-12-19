import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SunlightZoneComponent } from './sunlight-zone.component';

describe('SunlightZoneComponent', () => {
  let component: SunlightZoneComponent;
  let fixture: ComponentFixture<SunlightZoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SunlightZoneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SunlightZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
