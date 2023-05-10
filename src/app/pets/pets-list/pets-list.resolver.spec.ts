import { TestBed } from '@angular/core/testing';

import { PetsListResolver } from './pets-list.resolver';

describe('PetsListResolver', () => {
  let resolver: PetsListResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(PetsListResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
