import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { EmailCheckService } from './email-check.service';

describe('EmailCheckService', () => {
  let service: EmailCheckService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(EmailCheckService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
