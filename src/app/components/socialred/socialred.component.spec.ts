import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialredComponent } from './socialred.component';

describe('SocialredComponent', () => {
  let component: SocialredComponent;
  let fixture: ComponentFixture<SocialredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialredComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SocialredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
