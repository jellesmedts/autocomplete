import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Passwords } from '../models/password.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  jsonData = '../../assets/passwordslong.json'; // 10K records
  public passwords: any = [];

  constructor(private http: HttpClient) {
    // this.passwords = this.getPasswords();
  }

  getPasswords(): Observable<Passwords[]> {
    this.passwords = this.http
      .get<Passwords[]>(`${this.jsonData}`);
    return this.passwords;
  }
}
