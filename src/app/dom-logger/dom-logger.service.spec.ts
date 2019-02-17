import { TestBed } from '@angular/core/testing';

import { DomLoggerService } from './dom-logger.service';

describe('DivLoggerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DomLoggerService = TestBed.get(DomLoggerService);
    expect(service).toBeTruthy();
  });
});
