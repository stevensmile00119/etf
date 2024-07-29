import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtfApiComponent } from './etf-api.component';

describe('EtfApiComponent', () => {
  let component: EtfApiComponent;
  let fixture: ComponentFixture<EtfApiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EtfApiComponent]
    });
    fixture = TestBed.createComponent(EtfApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
