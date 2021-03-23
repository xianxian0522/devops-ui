import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

const API = '/api/v1/sso';

@Injectable({
  providedIn: 'root'
})
export class LoginServices {
  constructor(private httpClient: HttpClient) {
  }

  login(): Observable<any> {
    return this.httpClient.get(`${API}/login`);
  }
  token(): Observable<any> {
    return this.httpClient.get(`${API}/loginOAuth`);
  }
}
