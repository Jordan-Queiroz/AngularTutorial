import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


interface myData {
  email: string
  quote: string,
  status: boolean
}

interface isLoggedIn {
  status: boolean
}

interface quoteStatus {
  success: boolean
}

interface logoutStatus {
  success: boolean
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get<myData>('/api/data')
  }

  updateQuote(value) {
    return this.http.post<quoteStatus>('/api/quote', {value});
  }

  isLoggedIn(): Observable<isLoggedIn> {
    return this.http.get<isLoggedIn>('/api/isloggedin')
  }

  logout() {
    return this.http.get<logoutStatus>('/api/logout');
  }
}
