import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSwaggerComponent } from './ngx-swagger.component';

describe('NgxSwaggerComponent', () => {
  let component: NgxSwaggerComponent;
  let fixture: ComponentFixture<NgxSwaggerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxSwaggerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxSwaggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
