import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaveHomepageComponent } from './wave-homepage.component';

describe('WaveHomepageComponent', () => {
  let component: WaveHomepageComponent;
  let fixture: ComponentFixture<WaveHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WaveHomepageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WaveHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
