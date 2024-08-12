import { TestBed } from '@angular/core/testing';

import { GlobalSceneStateService } from './global-scene-state.service';

describe('GlobalSceneStateService', () => {
  let service: GlobalSceneStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalSceneStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
