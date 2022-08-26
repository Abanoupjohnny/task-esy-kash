import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  login(email: string, password: string) {
    return this.http.post('https://beboapi.free.beeceptor.com/login', {
      email,
      password
    })
  }
}