import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpisproizvodaComponent } from './opisproizvoda.component';

describe('OpisproizvodaComponent', () => {
  let component: OpisproizvodaComponent;
  let fixture: ComponentFixture<OpisproizvodaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpisproizvodaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpisproizvodaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
