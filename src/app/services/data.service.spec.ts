import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';
import { Passwords } from '../models/password.model';

describe('DataService', () => {

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [DataService]
  })
  );

  it('should be created', () => {
    const service: DataService = TestBed.get(DataService);
    expect(service).toBeTruthy();
  });

  it('should have getPasswords function', () => {
    const service: DataService = TestBed.get(DataService);
    expect(service.getPasswords).toBeTruthy();
   });

  it('should have jsonData variable', () => {
    const service: DataService = TestBed.get(DataService);
    expect(service.jsonData).toBeTruthy();
  });

  it('should have passwords variable', () => {
    const service: DataService = TestBed.get(DataService);
    expect(service.passwords).toBeTruthy();
  });

});

describe('DataService: HttpClient testing', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  const testUrl = '../../assets/passwordslong.json';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });

    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('Test Observable and GET', () => {
    const testData: Passwords = { password: ['1okd23', '3slkdjsl45']};

    httpClient.get<Passwords>(testUrl)
      .subscribe(data =>
        expect(data).toEqual(testData)
      );

    const req = httpTestingController.expectOne(testUrl);
    expect(req.request.method).toEqual('GET');
    req.flush(testData);
    httpTestingController.verify();
  });
});

