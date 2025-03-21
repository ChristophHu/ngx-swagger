import { TestBed } from '@angular/core/testing';

import { NgxSwaggerService } from './ngx-swagger.service';

describe('NgxSwaggerService', () => {
  let service: NgxSwaggerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxSwaggerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
