import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { HomePage } from './home.page';
import { DataService } from '../services/data.service';
import { of } from 'rxjs';


describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;
  let getPasswordSpy;
  let testData;

  beforeEach(() => {
    testData = ['test123', 'password'];

    const mockDataService = jasmine.createSpyObj('DataService', ['getPasswords']);
    getPasswordSpy = mockDataService.getPasswords.and.returnValue( of(testData) );

    TestBed.configureTestingModule({
      declarations: [ HomePage ],
      providers: [
        { provide: DataService, useValue: mockDataService }
      ],
      imports: [IonicModule.forRoot(), HttpClientTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a datalist', () => {
    const html: HTMLElement = fixture.nativeElement;
    const dataListElement = html.querySelector('datalist');
    expect(dataListElement).toBeTruthy();
  });

  it('should have an input field', () => {
    const html: HTMLElement = fixture.nativeElement;
    const inputElement = html.querySelector('input');
    expect(inputElement).toBeTruthy();
  });
});
